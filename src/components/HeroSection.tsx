import React from 'react';
import { ArrowLeft, Compass, PenSquare, MessageSquare, Briefcase, UserCheck, Shield, ChevronLeft } from 'lucide-react';

interface HeroSectionProps {
  onOpenJoinModal: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenJoinModal,
  onExploreClick
}) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle Warm Lighting Background Accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#C88A58]/12 via-[#B37542]/5 to-transparent blur-[120px] -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -left-48 w-[400px] h-[350px] bg-[#C88A58]/5 blur-[100px] -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Eyebrow & Headline Block */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-12 md:mb-16">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm tracking-wide text-[#E2A97B] font-medium py-1 px-3 rounded-full bg-[#181920] border border-[#C88A58]/20 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]"></span>
            <span>نحن في البداية.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.25]">
            نبني كفاءة <span className="copper-gradient-text">معكم.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            كفاءة منصة مهنية جديدة، ما زالت في طور التطوير.
            بدأنا ببناء الأساس، والآن نريد أن نعرف ماذا تحتاجون أنتم.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenJoinModal}
              className="w-full sm:w-auto px-7 py-3 text-sm md:text-base font-semibold text-[#120B05] copper-button-gradient rounded-md shadow-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>انضم إلى البداية</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-7 py-3 text-sm md:text-base font-medium text-zinc-200 hover:text-white bg-[#141519] hover:bg-[#1C1E25] border border-white/[0.09] hover:border-white/[0.2] rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>اكتشف كفاءة</span>
              <Compass className="w-4 h-4 text-[#C88A58]" />
            </button>
          </div>

          {/* Subtle Honest Sub-message */}
          <p className="text-xs sm:text-sm text-zinc-400 font-light pt-1">
            وجودك اليوم يساعد في تشكيل ما تصبح عليه كفاءة غدًا.
          </p>
        </div>

        {/* Hero Visual: Realistic Kafa'a Product Interface Preview (Authentic Early State) */}
        <div className="relative mx-auto max-w-5xl rounded-xl border border-white/[0.08] bg-[#0E1014] shadow-2xl overflow-hidden copper-border-glow">
          
          {/* Mock Browser/App Chrome Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#13151A] border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-700/80"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700/80"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700/80"></div>
              <span className="hidden sm:inline-block text-[11px] text-zinc-400 font-mono mr-2">
                kafaa-app.vercel.app/home
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="inline-block w-2 h-2 rounded-full bg-[#C88A58]"></span>
              <span>واجهة المنتج الحالية · إصدار التطوير الأولي</span>
            </div>
          </div>

          {/* Internal App Navigation Mock */}
          <div className="px-4 sm:px-6 py-2.5 bg-[#101217] border-b border-white/[0.05] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-bold text-sm text-zinc-200">
                <span className="text-[#C88A58]">كفاءة</span>
                <span className="text-xs text-zinc-500 font-sans font-normal">| Kafa’a</span>
              </div>
              <div className="hidden md:flex items-center bg-[#171920] border border-white/[0.06] rounded-md px-3 py-1 text-xs text-zinc-400 w-64">
                <span>ابحث عن خبرات أو تخصصات...</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-zinc-300">
              <span className="text-[#E2A97B] font-medium border-b border-[#C88A58] pb-0.5">الخلاصة</span>
              <span className="hidden sm:inline text-zinc-400">هويتي المهنية</span>
              <span className="hidden sm:inline text-zinc-400">الرسائل</span>
              <span className="hidden sm:inline text-zinc-400">الخدمات</span>
            </div>
          </div>

          {/* Product Interface Body */}
          <div className="p-4 sm:p-6 bg-[#0B0C0E] grid grid-cols-1 lg:grid-cols-12 gap-5 text-right">
            
            {/* Left Column (Profile & Early State Indicator) - 3 cols */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-4">
              {/* Profile Card Early State */}
              <div className="p-4 rounded-lg bg-[#14161C] border border-white/[0.06] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#1D2028] border border-white/[0.08] flex items-center justify-center text-zinc-400">
                    <UserCheck className="w-5 h-5 text-[#C88A58]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-200">ملفك المهني</div>
                    <div className="text-[11px] text-zinc-400">بانتظار إضافاتك الأولى</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.05] space-y-1.5 text-xs text-zinc-300">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>الهوية المهنية</span>
                    <span className="text-[#C88A58]">جاهزة للبدء</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>المجال والمهارات</span>
                    <span>حدد مسارك</span>
                  </div>
                </div>
              </div>

              {/* Quiet Note */}
              <div className="p-3 rounded-lg bg-[#121418] border border-white/[0.05] text-[11px] text-zinc-400 leading-relaxed">
                <div className="text-zinc-300 font-medium mb-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C88A58]" />
                  <span>خصوصية تامة</span>
                </div>
                أنت من يحدد ما يظهر في ملفك وكيف يتواصل معك الآخرون.
              </div>
            </div>

            {/* Center Column: Feed with Realistic Empty State - 6 cols */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Post Composer Mock */}
              <div className="p-4 rounded-lg bg-[#14161C] border border-white/[0.06] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1C1F27] border border-white/[0.08] flex items-center justify-center text-xs text-zinc-400">
                    أنت
                  </div>
                  <div className="flex-1 bg-[#0F1014] border border-white/[0.06] rounded-md px-3.5 py-2 text-xs text-zinc-400 text-right">
                    شارك فكرة مهنية، خبرة ميدانية، أو تجربة جديدة...
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-xs">
                  <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                    <PenSquare className="w-3.5 h-3.5 text-[#C88A58]" />
                    مساحة نقية للمحتوى المهني المتخصص
                  </span>
                  <button 
                    onClick={onOpenJoinModal}
                    className="px-3 py-1 bg-[#1F222B] hover:bg-[#282C37] text-zinc-300 text-xs rounded transition-colors"
                  >
                    نشر
                  </button>
                </div>
              </div>

              {/* Realistic Authentic Empty State Card */}
              <div className="p-8 sm:p-10 rounded-lg bg-[#13151A] border border-dashed border-white/[0.12] text-center space-y-3.5">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#1B1E26] border border-[#C88A58]/20 flex items-center justify-center text-[#E2A97B]">
                  <PenSquare className="w-5 h-5 text-[#C88A58]" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-zinc-200">
                    لا توجد منشورات بعد.
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
                    ابدأ أول منشور في شبكتك المهنية. شارك مع زملائك رؤيتك أو مشروعك الحالي.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenJoinModal}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-zinc-200 bg-[#1D2028] hover:bg-[#262A35] border border-white/[0.08] hover:border-[#C88A58]/30 rounded-md transition-colors"
                  >
                    <span>ابدأ منشورك الأول</span>
                    <ChevronLeft className="w-3.5 h-3.5 text-[#C88A58]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Discover & Platform State - 3 cols */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-4">
              <div className="p-4 rounded-lg bg-[#14161C] border border-white/[0.06] space-y-2.5">
                <div className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#C88A58]" />
                  <span>خدمات مهنية قادمة</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  نعمل على توفير مساحة لعرض خدماتك ومشاريعك والتواصل المباشر مع طالبي الخدمة.
                </p>
                <div className="text-[11px] text-[#C88A58] pt-1">
                  اعرض خدماتك المهنية فور جاهزيتها
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#14161C] border border-white/[0.06] space-y-2.5">
                <div className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C88A58]" />
                  <span>المحادثات المباشرة</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  لم تبدأ المحادثات بعد. تواصلك الأول هو خطوة بناء علاقة مهنية حقيقية.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Live Link Banner */}
          <div className="px-4 py-2.5 bg-[#12141A] border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
            <span>المنتج قابل للاستخدام والتطوير المستمر بملاحظاتكم.</span>
            <a 
              href="https://kafaa-app-2.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E2A97B] hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>فتح تطبيق كفاءة المباشر (إصدار التطوير)</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
