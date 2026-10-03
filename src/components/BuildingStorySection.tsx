import React from 'react';
import { Sparkles, Layers, ShieldCheck, Heart } from 'lucide-react';

export const BuildingStorySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Humble, Human Editorial Container */}
        <div className="rounded-2xl bg-gradient-to-b from-[#13151C] to-[#0E1015] border border-white/[0.08] p-8 sm:p-12 space-y-8 relative overflow-hidden">
          
          {/* Subtle copper edge glow */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 right-0 w-80 h-80 bg-[#C88A58]/10 blur-[100px]"
          />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#E2A97B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]"></span>
              <span>قصة البداية</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              نبني كفاءة خطوة بخطوة.
            </h2>
          </div>

          <div className="space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            <p>
              كفاءة بدأت بفكرة بسيطة:
              <br />
              ماذا لو امتلك المحترف مساحة واحدة يستطيع فيها بناء هويته المهنية، مشاركة خبرته، التواصل مع الآخرين، وعرض ما يستطيع تقديمه؟
            </p>
            <p className="text-zinc-300">
              ما نملكه اليوم هو البداية فقط.
              والخطوة التالية ستتحدد أيضًا بناءً على من ينضم إلينا الآن.
            </p>
          </div>

          {/* Core Values / Anti-Slop Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.06]">
            <div className="p-4 rounded-lg bg-[#0C0E12] border border-white/[0.05] space-y-1">
              <div className="text-xs font-semibold text-zinc-200">الصدق قبل التسويق</div>
              <div className="text-[11px] text-zinc-400">لا نضخم الأرقام ولا نختلق شهادات وهمية.</div>
            </div>

            <div className="p-4 rounded-lg bg-[#0C0E12] border border-white/[0.05] space-y-1">
              <div className="text-xs font-semibold text-zinc-200">الهدوء والتركيز</div>
              <div className="text-[11px] text-zinc-400">واجهة هادئة خالية من التشتيت والإشعارات المزعجة.</div>
            </div>

            <div className="p-4 rounded-lg bg-[#0C0E12] border border-white/[0.05] space-y-1">
              <div className="text-xs font-semibold text-zinc-200">مجتمع محلي وعالمي</div>
              <div className="text-[11px] text-zinc-400">منصة نشأت لخدمة الكفاءات الجزائرية أينما كانت.</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
