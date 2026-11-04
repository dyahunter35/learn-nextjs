"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function DeveloperCard() {
  const { language } = useLanguage();
  const en = language === "en";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section id="developer" className="developer-section" aria-label={en ? "Project Developer" : "مطور المشروع"}>
      <div className="developer-header">
        <span className="developer-kicker">
          {en ? "PROJECT CREATOR" : "مطور المنصة"}
        </span>
        <h2 className="developer-title">
          {en ? "The Developer Behind This Project" : "المطور وراء هذا المشروع"}
        </h2>
        <p className="developer-subtitle">
          {en
            ? "Engineering interactive educational experiences to make computer science intuitive and accessible"
            : "الجهود الهندسية والبرمجية المبذولة لإثراء المحتوى التعليمي التفاعلي لمقرر الحاسوب"}
        </p>
      </div>

      <div className="developer-card-wrapper">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Developer Avatar */}
          <div className="shrink-0">
            <div className="relative">
              <img
                src={`${basePath}/images/deyaa.png`}
                alt={en ? "Deyaa Albushra Mohamed" : "صورة المطور ضياء البشرى محمد"}
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover object-top shadow-md border-4 border-[var(--surface)] ring-1 ring-[var(--line)]"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf("/image/") === -1) {
                    target.src = `${basePath}/image/deyaa.png`;
                  }
                }}
              />
              <span
                className="absolute -bottom-1 -left-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-[var(--surface)] shadow-sm"
                title={en ? "Active developer" : "متاح للتطوير"}
              />
            </div>
          </div>

          {/* Developer Info */}
          <div className="flex-1 text-center md:text-start">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <h3 className="developer-name">
                {en ? "Deyaa Albushra Mohamed" : "ضياء البشرى محمد"}
              </h3>
              <span className="developer-role-badge self-center md:self-auto">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {en ? "Full Stack & Laravel Developer" : "مطور تطبيقات ويب (Laravel Developer)"}
              </span>
            </div>

            <p className="developer-bio">
              {en
                ? "Highly skilled Web Application Developer with extensive experience architecting complex platforms, specialized in Full-Stack development and the Laravel framework. Proven track record in designing interactive educational tooling, algorithms visualization, and management platforms."
                : "مطور تطبيقات ويب يتمتع بمهارات عالية وخبرة واسعة في بناء أنظمة ومواقع معقدة، متخصص في Full Stack وإطار العمل Laravel. خبرة مُثبتة في تصميم وتنفيذ منصات إدارة متكاملة ومحاكيات تعليمية تفاعلية لتحسين جودة التعليم والإنتاجية."}
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
              <span className="developer-tech-pill">PHP</span>
              <span className="developer-tech-pill">Laravel</span>
              <span className="developer-tech-pill">MySQL</span>
              <span className="developer-tech-pill">JavaScript</span>
              <span className="developer-tech-pill">React / Next.js</span>
              <span className="developer-tech-pill">HTML/CSS</span>
              <a
                href="https://deyaa.alsultansudan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="developer-tech-pill font-extrabold !border-amber-400 !bg-amber-400 !text-slate-950 hover:!bg-amber-500 shadow-sm"
              >
                {en ? "Portfolio Website" : "الموقع الشخصي"}
              </a>
            </div>

            {/* Contact Links */}
            <div className="pt-4 border-t border-[var(--line)] flex items-center justify-center md:justify-start gap-3">
              <a
                href="https://www.linkedin.com/in/Deyaa-Albushra-Mohamed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="developer-social-btn linkedin"
                title="LinkedIn"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM4 11h4v10H4zM6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
              </a>
              <a
                href="https://github.com/hunter35"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="developer-social-btn github"
                title="GitHub"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.31 3.43 9.8 8.21 11.38.6.11.82-.26.82-.57 0-.28-.01-1.01-.01-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.3 3.5.99.11-.77.42-1.3.77-1.6-2.67-.3-5.47-1.33-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3.12A11.5 11.5 0 0 1 12 5.86c1.02.04 2.05.15 3.03.44 2.29-.44 3.3-.12 3.3-.12.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.22.68.83.57C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://deyaa.alsultansudan.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="developer-social-btn website"
                title="Personal Website"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
