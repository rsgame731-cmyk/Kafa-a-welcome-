import React from 'react';
import { MessageCircle, Wrench, Compass, ArrowUpRight } from 'lucide-react';

export const WhyJoinSection: React.FC = () => {
  const reasons = [
    {
      title: 'شارك رأيك',
      subtitle: 'صوتك مسموع مباشرة',
      description: 'ساعدنا على معرفة ما يحتاجه المحترفون فعلًا.',
      icon: MessageCircle,
      detail: 'أنت لست مجرد رقم مستخدم في قاعدة بيانات، بل شريك في صياغة الأداة التي تناسب بيئة العمل والمهنيين في الجزائر.',
    },
    {
      title: 'جرّب المنتج',
      subtitle: 'اختبار حقيقي على أرض الواقع',
      description: 'استخدم ما بنيناه وأخبرنا بما يحتاج إلى تحسين.',
      icon: Wrench,
      detail: 'تجربتك للواجهات، إضافة ملفك، أو إرسال أول رسالة يعطينا انطباعات واقعية لا يمكن لأي دراسة نظرية تعويضها.',
    },
    {
      title: 'ساهم في الاتجاه',
      subtitle: 'تأثير ملموس في الخارطة',
      description: 'اقتراحاتك وملاحظاتك يمكن أن تؤثر في ما نبنيه لاحقًا.',
      icon: Compass,
      detail: 'إذا اقترحت ميزة تحل مشكلة حقيقية، فغالبًا ستجدها ضمن أولويات التطوير في التحديثات القادمة.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-right">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#E2A97B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]"></span>
            <span>القيمة الحقيقية للمشاركة المبكرة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            لماذا تنضم الآن؟
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            لن نعدك بآلاف الفرص بين ليلة وضحاها؛ لكننا نعدك بأن كل دقيقة تقضيها معنا تسهم في بناء شيء نفتخر به جميعًا.
          </p>
        </div>

        {/* 3 Honest Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="rounded-xl bg-[#12141A] hover:bg-[#151722] border border-white/[0.07] hover:border-[#C88A58]/30 p-7 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#181B23] border border-white/[0.06] flex items-center justify-center text-[#E2A97B] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-[#C88A58]" />
                    </div>
                    <span className="text-xs text-zinc-400 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-zinc-100">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-[#C88A58]/90 font-medium">
                      {reason.subtitle}
                    </p>
                  </div>

                  <div className="p-3 rounded-md bg-[#0D0F13] border border-white/[0.04]">
                    <p className="text-sm font-semibold text-zinc-200">
                      "{reason.description}"
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {reason.detail}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/[0.04] flex items-center text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <span>دور قيادي في المجتمع الأولي</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
