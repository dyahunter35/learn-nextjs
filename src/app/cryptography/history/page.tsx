"use client";

import { useState } from "react";
import Link from "next/link";
import { caesarEncrypt, caesarDecrypt, otpProcess } from "@/lib/crypto-engine";

export default function HistoryPage() {
  const [activeStory, setActiveStory] = useState<"midway" | "venona" | "otp_ambiguity" | "caesar" | "morse">("midway");

  // Midway Interactive Simulation State
  const [midwayStep, setMidwayStep] = useState<1 | 2 | 3 | 4>(1);

  // Venona Simulation State
  const [venonaCrib, setVenonaCrib] = useState("KGB");

  // OTP Ambiguity State
  const CIPHER_AMBIGUITY = "SRLHSSTHSR";
  const AMBIGUITY_KEYS = {
    heil: { key: "LAKDHYUOSB", meaning: "HEIL HITLER", desc: "إثبات الولاء للحزب النازي لتجنب الإعدام" },
    kill: { key: "ZAKDHYUOSB", meaning: "KILL HITLER", desc: "إثبات الانتماء لحركة المقاومة السرية" },
    ike: { key: "LROEBAMYWC", meaning: "HE LIKES IKE", desc: "رسالة مؤيدة لحملة الجنرال دوايت أيزنهاور" },
  };
  const [selectedAmbiguity, setSelectedAmbiguity] = useState<"heil" | "kill" | "ike">("heil");

  // Caesar Gaul Dispatch State
  const [caesarInput, setCaesarInput] = useState("LEGIO TERTIA IN PERICULO");
  const caesarCipher = caesarEncrypt(caesarInput, 3);

  // Morse Puzzle State
  const sampleLetter = "Dear friend, having always read your notes cautiously...";

  return (
    <div className="space-y-8">
      {/* Breadcrumb & Title */}
      <div>
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <Link href="/cryptography" className="hover:text-slate-200">لوحة التحكم</Link>
          <span>/</span>
          <span className="text-emerald-400 font-semibold">مسرح المعارك والقصص التاريخية</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              مسرح المعارك والقصص التاريخية (Historical Battle Theater)
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              محاكاة تفاعلية قائمة على أحداث تاريخية حقيقية غيرت مجرى الحروب والسياسة العالمية بفضل التشفير وكسره.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-[#111827] border border-[#1f2d48] px-3 py-1.5 rounded-lg text-slate-400">
            <span>السيناريوهات التاريخية:</span>
            <span className="text-emerald-400 font-bold">5 مهمات تفاعلية</span>
          </div>
        </div>
      </div>

      {/* Story Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 crypto-scroll border-b border-[#1f2d48]">
        {[
          { key: "midway", label: "خدعة معركة ميدواي (1942)", sub: "Chosen-Plaintext Attack", icon: "⚓" },
          { key: "venona", label: "مشروع فينونا السوفييتي", sub: "OTP Key Reuse Vulnerability", icon: "🕵️" },
          { key: "otp_ambiguity", label: "أحجية العميل المزدوج", sub: "OTP Ambiguity & Perfect Secrecy", icon: "🎭" },
          { key: "caesar", label: "برقية قيصر في بلاد الغال", sub: "Roman Military Shift", icon: "🏛️" },
          { key: "morse", label: "أحجية المفتش مورس", sub: "Text Steganography Puzzle", icon: "📜" },
        ].map((item) => {
          const isActive = activeStory === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveStory(item.key as any)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col items-start gap-0.5 border ${
                isActive
                  ? "bg-emerald-500/15 border-emerald-400 text-emerald-300 shadow-md shadow-emerald-950/40"
                  : "bg-[#111827] border-[#1f2d48] text-slate-400 hover:text-slate-200 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">{item.sub}</span>
            </button>
          );
        })}
      </div>

      {/* 1. BATTLE OF MIDWAY SCENARIO */}
      {activeStory === "midway" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>STATION HYPO · PEARL HARBOR · MAY 1942</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              خدعة معركة ميدواي: هجوم النص الأصلي المختار (Chosen-Plaintext Attack)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              اشتبه ضابط الاستخبارات البحرية الأمريكية <strong>جوزيف روشفورت (Joseph Rochefort)</strong> في أن الرمز الياباني السري <strong className="text-amber-400 font-mono">"AF"</strong> يشير إلى جزيرة ميدواي، بينما كانت واشنطن تشك في أنها هاواي أو جزر ألوتيان. لتأكيد ذلك، نفذ روشفورت أذكى خدعة في تاريخ التشفير!
            </p>
          </div>

          {/* Interactive Gamified Walkthrough */}
          <div className="bg-[#101524] border border-[#1f2d48] rounded-2xl p-6 space-y-6">
            {/* Step Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { s: 1, title: "1. التقاط الرمز AF" },
                { s: 2, title: "2. زرع النص المختار" },
                { s: 3, title: "3. اعتراض الرد المشفر" },
                { s: 4, title: "4. إثبات الهدف ونصب الفخ" },
              ].map((step) => (
                <div
                  key={step.s}
                  className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                    midwayStep === step.s
                      ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold"
                      : midwayStep > step.s
                      ? "bg-[#141e33] border-[#1f2d48] text-slate-400"
                      : "bg-[#090d16] border-[#1f2d48]/50 text-slate-600"
                  }`}
                >
                  {step.title}
                </div>
              ))}
            </div>

            {/* Step 1 */}
            {midwayStep === 1 && (
              <div className="bg-[#141e33] border border-[#1f2d48] rounded-xl p-5 space-y-4">
                <h4 className="text-sm font-bold text-slate-200">الخطوة 1: الشكوك حول الهدف القادم للبحرية اليابانية</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  تكرر الرمز السري <strong className="text-amber-400 font-mono">"AF"</strong> في برقيات البحرية الإمبراطورية اليابانية المشفرة بنظام JN-25 كهدف لهجوم ضخم قادم. مطلوب منك التحقق يقيناً هل AF هي جزيرة ميدواي؟
                </p>
                <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-xs text-amber-300">
                  INTERCEPTED JN-25 FRAGMENT: [TARGET: AF] · [FLEET DEPLOYMENT: CARRIER STRIKE FORCE]
                </div>
                <button
                  type="button"
                  onClick={() => setMidwayStep(2)}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-lg text-xs font-bold transition-colors"
                >
                  صياغة خطة الطُعم الاستخباري ←
                </button>
              </div>
            )}

            {/* Step 2 */}
            {midwayStep === 2 && (
              <div className="bg-[#141e33] border border-[#1f2d48] rounded-xl p-5 space-y-4">
                <h4 className="text-sm font-bold text-slate-200">الخطوة 2: إرسال برقية مفتوحة غير مشفرة (Chosen-Plaintext Injection)</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  طلبت الاستخبارات من حامية جزيرة ميدواي إرسال برقية لاسلكية واضحة (غير مشفرة بالإنجليزية) تفيد بأن محطة تحلية المياه العذبة في ميدواي تعرضت لعطل فادح والجزيرة تعاني من نقص حاد في مياه الشرب.
                </p>
                <div className="p-3 bg-[#090d16] border border-sky-500/40 rounded-lg font-mono text-xs text-sky-300">
                  OPEN DISPATCH (UNENCRYPTED): &quot;MIDWAY REPORTS FRESH WATER DISTILLATION PLANT SUFFERED COMPLETE FAILURE. SHORTAGE CRITICAL.&quot;
                </div>
                <button
                  type="button"
                  onClick={() => setMidwayStep(3)}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-lg text-xs font-bold transition-colors"
                >
                  بث البرقية وانتظار استجابة العدو ←
                </button>
              </div>
            )}

            {/* Step 3 */}
            {midwayStep === 3 && (
              <div className="bg-[#141e33] border border-[#1f2d48] rounded-xl p-5 space-y-4">
                <h4 className="text-sm font-bold text-slate-200">الخطوة 3: التجسس على الرد الياباني المشفر</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  بعد ساعات قليلة فقط، التقطت محطة الاستماع الأمريكية برقية مشفرة أرسلتها الاستخبارات اليابانية إلى أسطول حاملات الطائرات.
                </p>
                <div className="p-3 bg-[#090d16] border border-yellow-500/50 rounded-lg font-mono text-xs text-yellow-300">
                  DECODED JAPANESE JN-25 DISPATCH: &quot;AF IS SHORT OF FRESH WATER. REPLENISH SUPPLIES BEFORE ASSAULT.&quot;
                </div>
                <button
                  type="button"
                  onClick={() => setMidwayStep(4)}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-lg text-xs font-bold transition-colors"
                >
                  تأكيد النتيجة النهائية ←
                </button>
              </div>
            )}

            {/* Step 4 */}
            {midwayStep === 4 && (
              <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <span>✓</span>
                  <span>نجاح الخدعة وتأكيد الهدف 100%!</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  أثبتت الخدعة بلا أدنى شك أن الرمز <strong className="text-amber-300 font-mono">AF = ميدواي</strong>. وبناءً على هذا التأكيد، أرسل الأدميرال تشيستر نيميتز حاملات الطائرات الأمريكية الثلاث في كمين محكم قبالة ميدواي، مما أدى إلى غرق 4 حاملات طائرات يابانية في غضون دقائق، وقلب ميزان الحرب العالمية الثانية في المحيط الهادئ بالكامل!
                </p>
                <button
                  type="button"
                  onClick={() => setMidwayStep(1)}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  إعادة تجربة المحاكاة
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. PROJECT VENONA SCENARIO */}
      {activeStory === "venona" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <h3 className="text-xl font-bold text-white mb-2">
              مشروع فينونا (Project VENONA): كارثة إعادة استخدام لوحة المرة الواحدة
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              لوحة المرة الواحدة (OTP) مستحيلة الكسر رياضياً ما دامت الورقة لا تُستخدم إلا مرة واحدة فقط. ولكن تحت وطأة ضغط الحرب العالمية الثانية في عام 1942، قام مكتب التشفير السوفيتي في موسكو بطباعة نسخ مكررة من صفحات دفاتر الشفرات وتوزيعها على عدة مكاتب تجسس. أدى هذا الخطأ البشري إلى كسر آلاف البرقيات السوفيتية السرية في أرلينغتون هول!
            </p>
          </div>

          <div className="bg-[#101524] border border-[#1f2d48] rounded-2xl p-6 space-y-5">
            <h4 className="text-sm font-bold text-slate-200">
              المعادلة الرياضية لكسر الأمان المطلق عند إعادة المفتاح (Two-Time Pad):
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-xl">
                <span className="text-sky-400 block mb-1 font-bold">البرقية الأولى المشفرة C₁:</span>
                <span className="text-slate-300">C₁ = P₁ ⊕ K</span>
              </div>
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-xl">
                <span className="text-amber-400 block mb-1 font-bold">البرقية الثانية المشفرة C₂:</span>
                <span className="text-slate-300">C₂ = P₂ ⊕ K (نفس المفتاح K!)</span>
              </div>
              <div className="p-3 bg-[#090d16] border border-emerald-500/40 rounded-xl">
                <span className="text-emerald-400 block mb-1 font-bold">إلغاء المفتاح K تماماً:</span>
                <span className="text-emerald-300 font-bold">C₁ ⊕ C₂ = P₁ ⊕ P₂</span>
              </div>
            </div>

            <div className="p-4 bg-[#141e33] border border-[#1f2d48] rounded-xl text-xs space-y-2">
              <span className="text-slate-300 font-bold block">ماذا تعني النتيجة الرياضية؟</span>
              <p className="text-slate-400 leading-relaxed">
                بمجرد إجراء XOR بين البرقيتين المشفرتين، يُلغى المفتاح السري $K$ بالكامل ($K \oplus K = 0$). يتبقى أمام المحلل حاصل XOR بين نصين عاديين باللغة الطبيعية ($P_1 \oplus P_2$)، مما يسمح بتخمين الكلمات الشائعة (Crib dragging) مثل أسماء السفارات والعملاء وكشف الرسالتين دفعة واحدة!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. OTP AMBIGUITY / DOUBLE AGENT SCENARIO */}
      {activeStory === "otp_ambiguity" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <h3 className="text-xl font-bold text-white mb-2">
              سيناريو الإيهام وتغيير المفاتيح: معضلة العميل المزدوج والسرية التامة
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              توضيح العبقري كلود شانون (Claude Shannon) لأعظم ميزات لوحة المرة الواحدة: <strong>الأمان التام من المستحيل كسره استناداً للنص المشفر وحده</strong>. فالنص المشفر نفسه قد يكون حاملاً لأي رسالة على الإطلاق إذا غُيّر المفتاح، مما يمكن العميل المزدوج من اختلاق أي برقية يشاء لإنقاذ حياته!
            </p>
          </div>

          <div className="bg-[#101524] border border-[#1f2d48] rounded-2xl p-6 space-y-6">
            <div className="p-4 bg-[#090d16] border border-yellow-500/30 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">النص المشفر المضبوط بحوزة الجاسوس (Intercepted Ciphertext):</span>
                <span className="text-2xl font-mono font-black text-yellow-400 tracking-widest">{CIPHER_AMBIGUITY}</span>
              </div>
              <span className="text-xs text-slate-400">طول النص: 10 أحرف</span>
            </div>

            {/* Key Switcher */}
            <div>
              <span className="text-xs font-semibold text-slate-300 block mb-3">
                اختر المفتاح الذي سيقدمه العميل المزدوج للمحققين:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(["heil", "kill", "ike"] as const).map((kType) => {
                  const data = AMBIGUITY_KEYS[kType];
                  const isSelected = selectedAmbiguity === kType;
                  return (
                    <button
                      key={kType}
                      type="button"
                      onClick={() => setSelectedAmbiguity(kType)}
                      className={`p-4 rounded-xl border text-right transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-amber-500/15 border-amber-400 shadow-lg shadow-amber-950/50"
                          : "bg-[#141e33] border-[#1f2d48] hover:border-slate-600"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-mono text-slate-400 block">مفتاح {kType.toUpperCase()}:</span>
                        <span className="text-sm font-bold font-mono text-amber-300 block mb-1">{data.key}</span>
                        <p className="text-[11px] text-slate-400">{data.desc}</p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-[#1f2d48] flex justify-between items-center text-xs">
                        <span className="text-slate-400">النص المفكوك:</span>
                        <span className="font-mono font-bold text-emerald-400">{data.meaning}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Shannon's Mathematical Conclusion */}
            <div className="p-4 bg-[#090d16] border border-sky-500/30 rounded-xl text-xs space-y-2">
              <span className="text-sky-300 font-bold block">البرهان الرياضي لنظرية شانون (Shannon&apos;s Proof):</span>
              <p className="text-slate-400 leading-relaxed">
                لكل نص مفكوك $P$ محتمل له نفس الطول (سواء كان <em>HEIL HITLER</em> أو <em>KILL HITLER</em> أو <em>HE LIKES IKE</em>)، يوجد مفتاح فريد $K$ يحول النص المشفر إلى $P$ تماماً باحتمالية متساوية $1/26^{10}$. وبالتالي لا يملك المحلل أي معلومة إحصائية على الإطلاق ترجح معنى على آخر دون حيازة المفتاح الحقيقي!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 4. CAESAR ROMAN DISPATCH SCENARIO */}
      {activeStory === "caesar" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <h3 className="text-xl font-bold text-white mb-2">
              برقية قيصر العسكرية في بلاد الغال (54 ق.م)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              حين حاصرت القبائل الغالية الفيلق الروماني بقيادة كوينتوس كيكيرو (Quintus Cicero)، أرسل يوليوس قيصر خيالاً يحمل رمحاً ربط في نصله برقية مشفرة بإزاحة حروف 3 خطوات لئلا يفهم العدو الأوامر إن سقطت الرسالة في يدهم.
            </p>
          </div>

          <div className="bg-[#101524] border border-[#1f2d48] rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-300 block">أمر العمليات العسكري الروماني:</label>
              <textarea
                value={caesarInput}
                onChange={(e) => setCaesarInput(e.target.value.toUpperCase())}
                rows={3}
                className="w-full bg-[#090d16] border border-[#1f2d48] rounded-lg p-3 text-xs text-slate-200 font-mono tracking-wider focus:border-emerald-400 focus:outline-none uppercase"
              />
              <span className="text-[11px] text-slate-500 font-mono">الترجمة: الفيلق الثالث في خطر، النجدة قادمة مع طلوع الفجر.</span>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-emerald-400 block">البرقية المشفرة المربوطة في رأس الرمح (k=3):</label>
              <div className="p-3 bg-[#090d16] border border-[#1f2d48] rounded-lg font-mono text-sm font-bold text-emerald-300 break-words tracking-widest min-h-[70px]">
                {caesarCipher}
              </div>
              <span className="text-[11px] text-slate-400 block">
                تطبق القاعدة الرومانية: A←D, B←E, C←F ...
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 5. INSPECTOR MORSE PUZZLE */}
      {activeStory === "morse" && (
        <div className="space-y-6">
          <div className="bg-[#111827] border border-[#1f2d48] rounded-xl p-5">
            <h3 className="text-xl font-bold text-white mb-2">
              أحجية المفتش مورس لإخفاء النصوص (Inspector Morse Text Puzzle)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              المستوحاة من رواية كولين ديكستر الشهيرة (<em>The Silent World of Nicholas Quinn</em>). خطاب تجاري أو رسالة تبدو بريئة وطبيعية تماماً، ولكنها تُخفي رسالة سرية تستخرج بأخذ أول حرف من كل كلمة بترتيب محدد.
            </p>
          </div>

          <div className="bg-[#101524] border border-[#1f2d48] rounded-2xl p-6 space-y-4">
            <div className="p-4 bg-[#090d16] border border-[#1f2d48] rounded-xl">
              <span className="text-xs text-slate-400 block mb-2">النص الظاهري المطبوع في الخطاب:</span>
              <p className="font-mono text-xs text-slate-200 leading-loose">
                <span className="text-amber-400 font-bold underline">M</span>eet <span className="text-amber-400 font-bold underline">E</span>very <span className="text-amber-400 font-bold underline">E</span>xecutive <span className="text-amber-400 font-bold underline">T</span>onight <span className="text-amber-400 font-bold underline">A</span>t <span className="text-amber-400 font-bold underline">T</span>welve <span className="text-amber-400 font-bold underline">D</span>own <span className="text-amber-400 font-bold underline">A</span>venue <span className="text-amber-400 font-bold underline">W</span>ith <span className="text-amber-400 font-bold underline">N</span>otes
              </p>
            </div>

            <div className="p-4 bg-[#141e33] border border-emerald-500/30 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">الرسالة المخفية المستخرجة من أوائل الكلمات:</span>
                <span className="text-base font-bold font-mono text-emerald-300 tracking-widest">
                  MEET AT DAWN
                </span>
              </div>
              <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
                TEXT STEGANOGRAPHY
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
