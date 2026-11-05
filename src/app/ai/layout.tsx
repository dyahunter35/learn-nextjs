import type { Metadata } from "next";
import "./ai.css";
import { AiHeader } from "@/components/ai/AiHeader";

export const metadata: Metadata = {
  title: "معمل الذكاء الاصطناعي والتعلم الآلي | Interactive AI & Machine Learning Lab",
  description: "معامل تفاعلية للبحث الذكي A*، خوارزمية Minimax للألعاب وتقليم ألفا-بيتا، محاكي الشبكات العصبية والبرسيبترون، وعناقيد K-Means.",
};

export default function AiLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ai-universe min-h-screen bg-[#090d16] text-slate-100 selection:bg-violet-600 selection:text-white">
      <AiHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
      <footer className="mt-20 border-t border-[#1e293b] bg-[#070a12] py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            معمل الذكاء الاصطناعي والتعلم الآلي التفاعلي · صُمم لتمكين الطلاب من استكشاف الخوارزميات وتجربتها بصرياً ورياضياً.
          </p>
          <p className="font-mono text-slate-600">
            A* PATHFINDING · MINIMAX ALPHA-BETA · NEURAL CLASSIFIER · K-MEANS
          </p>
        </div>
      </footer>
    </div>
  );
}

