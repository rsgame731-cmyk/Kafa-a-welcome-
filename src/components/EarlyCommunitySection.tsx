import React from 'react';
import { Sparkles, ArrowLeft, HeartHandshake, Compass, Layers } from 'lucide-react';

interface EarlyCommunitySectionProps {
  onOpenJoinModal: () => void;
}

export const EarlyCommunitySection: React.FC<EarlyCommunitySectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      
      {/* Background radial warmth */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#C88A58]/6 blur-[130px] -z-10"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#E2A97B] py-1 px-3.5 rounded-full bg-[#181922] border border-[#C88A58]/20">
          <HeartHandshake className="w-3.5 h-3.5 text-[#C88A58]" />
          <span>دعوة صادقة للمؤسسين الأوائل لمجتمعنا</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          كن من أوائل من يبنون كفاءة.
        </h2>

        {/* Text */}
        <div className="max-w-2xl mx-auto space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          <p>
            لسنا هنا لنقول إن كفاءة أصبحت كبيرة.
            <br />
            نحن هنا لنقول إننا بدأنا.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base">
            إذا كنت ترى أن بناء هوية مهنية قوية، التواصل مع الكفاءات، ومشاركة المعرفة يستحق مساحة أفضل، فانضم إلينا من البداية.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="pt-2">
          <button
            onClick={onOpenJoinModal}
            className="px-8 py-3.5 text-sm sm:text-base font-semibold text-[#120B05] copper-button-gradient rounded-md shadow-lg hover:brightness-105 active:scale-[0.98] transition-all inline-flex items-center gap-2.5 cursor-pointer"
          >
            <span>أريد أن أكون من الأوائل</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Grounding note */}
        <div className="pt-4 flex items-center justify-center gap-6 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]"></span>
            مجتمع مبني على الفائدة الحقيقية
          </span>
          <span className="text-zinc-700">·</span>
          <span>بدون خوارزميات إدمانية</span>
          <span className="text-zinc-700">·</span>
          <span>صوتك مسموع مباشرة</span>
        </div>

      </div>
    </section>
  );
};
