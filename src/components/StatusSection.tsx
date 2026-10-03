import React from 'react';
import { Compass, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

export const StatusSection: React.FC = () => {
  const cards = [
    {
      number: '01',
      title: 'بدأنا',
      description: 'الأساس التقني للمنصة موجود، والمنتج قابل للاستخدام والتطوير.',
      icon: CheckCircle2,
      detail: 'قمنا ببناء البنية الأساسية للحسابات، الملفات الشخصية، الخلاصة، ونظام المحادثات الأولي.',
    },
    {
      number: '02',
      title: 'ما زلنا نتعلم',
      description: 'بعض المزايا والواجهات ستتغير مع الوقت بناءً على احتياجات المستخدمين.',
      icon: Lightbulb,
      detail: 'لا ندعي امتلاك كل الإجابات مسبقًا؛ التجربة الحية واختبارات الاستخدام هي مرشدنا للتطوير.',
    },
    {
      number: '03',
      title: 'نريدكم معنا',
      description: 'ملاحظاتكم واقتراحاتكم ستساعدنا في تحديد ما نبنيه بعد ذلك.',
      icon: Users,
      detail: 'صوت كل مستخدم في هذه المرحلة المبكرة له وزن حقيقي في رسم مسار المنصة.',
    },
  ];

  return (
    <section id="status" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-right">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#E2A97B]">
            <Compass className="w-3.5 h-3.5 text-[#C88A58]" />
            <span>الشفافية أولًا</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            أين نحن الآن؟
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
            كفاءة ليست منصة مكتملة بعد.
            <br />
            نحن في مرحلة مبكرة، نختبر، نطوّر، ونستمع.
          </p>
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="relative rounded-xl bg-[#12141A] hover:bg-[#151820] border border-white/[0.07] hover:border-[#C88A58]/30 p-7 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-5">
                  {/* Top: Editorial Number & Icon */}
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                    <span className="font-mono text-2xl font-light text-[#C88A58]/90">
                      {card.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#1A1D25] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-[#E2A97B] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-zinc-100">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Footnote / Contextual Detail */}
                <div className="pt-6 mt-6 border-t border-white/[0.04]">
                  <p className="text-xs text-zinc-400 leading-normal">
                    {card.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
