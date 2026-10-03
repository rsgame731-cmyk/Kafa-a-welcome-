import React from 'react';
import { ArrowLeft, MessageSquarePlus, ExternalLink } from 'lucide-react';

interface FinalCTAProps {
  onOpenJoinModal: () => void;
  onOpenFeedback: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenJoinModal, onOpenFeedback }) => {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06] relative overflow-hidden">
      
      {/* Warm Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-b from-[#C88A58]/10 via-[#965C30]/5 to-transparent blur-[140px] -z-10"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#E2A97B] py-1 px-3 rounded-full bg-[#171922] border border-[#C88A58]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]"></span>
          <span>دعوة للبداية المشتركة</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.25]">
          كفاءة لم تكتمل بعد.
          <br />
          <span className="copper-gradient-text">وهذا بالضبط سبب حاجتنا إليك.</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
          انضم من البداية.
          <br />
          جرّب.
          <br />
          أعطنا رأيك.
          <br />
          وساعدنا في بناء منصة مهنية تستحق أن تكون جزءًا من مسارك.
        </p>

        {/* CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-8 py-3.5 text-sm md:text-base font-semibold text-[#120B05] copper-button-gradient rounded-md shadow-lg hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>انضم إلى كفاءة</span>
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenFeedback}
            className="w-full sm:w-auto px-8 py-3.5 text-sm md:text-base font-medium text-zinc-200 hover:text-white bg-[#14151B] hover:bg-[#1C1F27] border border-white/[0.08] hover:border-white/[0.2] rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>شارك اقتراحك</span>
            <MessageSquarePlus className="w-4 h-4 text-[#C88A58]" />
          </button>
        </div>

        {/* Link to live app directly */}
        <div className="pt-2">
          <a
            href="https://kafaa-app-2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-[#E2A97B] transition-colors"
          >
            <span>أو تصفح الإصدار المباشر قيد التطوير مباشرة (Vercel)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
