import React from 'react';
import { Compass, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const roadmapItems = [
    {
      title: 'تحسين تجربة المستخدم',
      status: 'نعمل على',
      statusColor: 'text-[#E2A97B] bg-[#22180F] border-[#C88A58]/30',
      description: 'نعمل على تسريع التفاعل وتبسيط التنقل بين الهوية المهنية وخلاصة المنشورات والرسائل.',
    },
    {
      title: 'تطوير الهوية المهنية',
      status: 'نستكشف',
      statusColor: 'text-zinc-300 bg-[#161820] border-white/[0.08]',
      description: 'نستكشف أشكالًا أفضل لتوثيق المهارات التطبيقية، وإبراز المشاريع، وربط الشهادات الموثوقة.',
    },
    {
      title: 'تحسين اكتشاف المحتوى',
      status: 'نريد تطوير',
      statusColor: 'text-[#E2A97B] bg-[#22180F] border-[#C88A58]/30',
      description: 'نريد تطوير نظام تصنيف وتوصية ذكي لكنه غير تطفلي، يركز على تخصصك والمواضيع ذات القيمة العالية.',
    },
    {
      title: 'تطوير الخدمات المهنية',
      status: 'نعمل على',
      statusColor: 'text-[#E2A97B] bg-[#22180F] border-[#C88A58]/30',
      description: 'نعمل على إتاحة مساحة احترافية واضحة للمستقلين والاستشاريين والشركات لعرض ما يقدمونه مباشرة.',
    },
    {
      title: 'تحسين التواصل',
      status: 'نستكشف',
      statusColor: 'text-zinc-300 bg-[#161820] border-white/[0.08]',
      description: 'نستكشف أدوات تواصل أكثر ملاءمة للمحادثات المهنية ومجموعات العمل المغلقة وتبادل الملفات.',
    },
    {
      title: 'الاستماع إلى ملاحظات المجتمع',
      status: 'مستمر دائمًا',
      statusColor: 'text-emerald-400 bg-emerald-950/30 border-emerald-800/30',
      description: 'أولوياتنا لا تُحدد في غرف مغلقة، بل نراجع ملاحظاتكم واقتراحاتكم أسبوعيًا لتحديد خطوتنا القادمة.',
    },
  ];

  return (
    <section id="roadmap" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-right">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#E2A97B]">
            <Compass className="w-3.5 h-3.5 text-[#C88A58]" />
            <span>خارطة التطوير الشفافة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            إلى أين نتجه؟
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            لا نقدّم مواعيد نهائية زائفة أو وعودًا تسويقية فارغة. هذه هي المحاور البرمجية والتصميمية التي نركز عليها حاليًا، وأولوياتنا تتغير وتتطور معكم.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roadmapItems.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-xl bg-[#12141A] hover:bg-[#151720] border border-white/[0.07] hover:border-[#C88A58]/30 p-6 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded border ${item.statusColor}`}>
                    {item.status}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    #{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C88A58] shrink-0" />
                  <span>{item.title}</span>
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.04] text-[11px] text-zinc-400">
                قيد التفكير والمناقشة المستمرة
              </div>
            </div>
          ))}
        </div>

        {/* Honest Note Below Roadmap */}
        <div className="mt-8 p-4 rounded-xl bg-[#0F1116] border border-white/[0.05] text-center max-w-2xl mx-auto">
          <p className="text-xs text-zinc-400 leading-relaxed">
            هل ترى أن هناك أولوية أخرى يجب أن نركز عليها قبل هذه المحاور؟
            <a href="#feedback" className="text-[#E2A97B] hover:text-white mr-1 underline font-medium">
              أخبرنا مباشرة في قسم الاقتراحات أدناه.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
