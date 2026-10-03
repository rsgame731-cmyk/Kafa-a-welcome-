import React from 'react';
import { 
  UserCheck, 
  PenLine, 
  Users2, 
  MessageSquare, 
  Briefcase, 
  Bookmark, 
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';

interface FeaturesSectionProps {
  onSelectFeaturePreview?: (featureIndex: number) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onSelectFeaturePreview }) => {
  const features = [
    {
      id: 0,
      title: 'الهوية المهنية',
      subtitle: 'حضور رقمي موثوق لخبرتك',
      description: 'أنشئ حضورك المهني وعرّف بخبرتك ومهاراتك.',
      icon: UserCheck,
      details: 'ملف شخصي يركز على مسارك المهني الحقيقي، مهاراتك التقنية والتطبيقية، ومشاريعك السابقة بدون حشو.',
    },
    {
      id: 1,
      title: 'المحتوى المهني',
      subtitle: 'مساحة لنقاشات ذات قيمة',
      description: 'شارك أفكارك واكتشف محتوى مهنيًا من مجالات مختلفة.',
      icon: PenLine,
      details: 'انشر تدوينات وتجارب واقعية واقرأ ما يشاركه المتخصصون في مختلف المجالات بدون خوارزميات الاستعراض.',
    },
    {
      id: 2,
      title: 'العلاقات المهنية',
      subtitle: 'تواصل هادف مع الكفاءات',
      description: 'تابع الأشخاص وابنِ علاقات مهنية.',
      icon: Users2,
      details: 'تابع زملاء المهنة والمحترفين في مجالك، ووسّع دائرة معارفك المهنية باحترام متبادل وفائدة حقيقية.',
    },
    {
      id: 3,
      title: 'الرسائل',
      subtitle: 'محادثات فورية مباشرة',
      description: 'تواصل مباشرة مع الأشخاص داخل المنصة.',
      icon: MessageSquare,
      details: 'قنوات دردشة نصية مباشرة لتبادل الخبرات، طرح الاستفسارات، ومناقشة فرص التعاون والعمل.',
    },
    {
      id: 4,
      title: 'الخدمات',
      subtitle: 'معرض لخدماتك المهنية',
      description: 'اعرض خدماتك المهنية وأنشئ حضورًا لخدماتك.',
      icon: Briefcase,
      details: 'قدم خدماتك المتخصصة (استشارات، تصميم، برمجة، إدارة) لجمهور يبحث عن كفاءات مؤهلة.',
    },
    {
      id: 5,
      title: 'الحفظ والمجموعات',
      subtitle: 'مكتبتك المهنية الشخصية',
      description: 'احفظ المحتوى الذي تريد العودة إليه ونظّمه.',
      icon: Bookmark,
      details: 'نظّم المقالات والنصائح وقوائم الأدوات التي تهمك في مجموعات خاصة للرجوع إليها متى احتجت.',
    },
    {
      id: 6,
      title: 'الخصوصية والظهور (Privacy & Visibility)',
      subtitle: 'التحكم الكامل ببياناتك',
      description: 'تحكم في ظهور معلوماتك وطريقة تواصُل الآخرين معك.',
      icon: ShieldCheck,
      details: 'خيارات دقيقة تحدد من يمكنه رؤية تفاصيل ملفك، تواصل الرسائل معك، وظهورك العام.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14 text-right">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#E2A97B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]"></span>
            <span>القدرات الفعلية المتاحة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            ماذا يمكنك أن تفعل الآن؟
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            لا نعدك بأشياء غير موجودة. هذه هي الميزات المتاحة اليوم في إصدار كفاءة الحالي، وهي جاهزة للتجربة والتطوير.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isFullWidthMobile = idx === 6; // Privacy & visibility spans on 3-col grid if needed
            return (
              <div
                key={feature.title}
                className={`rounded-xl bg-[#12141A] border border-white/[0.07] hover:border-[#C88A58]/30 p-6 transition-all hover:bg-[#151720] flex flex-col justify-between group ${
                  isFullWidthMobile ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Icon & Title Header */}
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#191C24] border border-white/[0.06] flex items-center justify-center text-[#E2A97B] group-hover:bg-[#C88A58]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] text-zinc-400 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#C88A58]/90 font-medium mt-0.5">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Primary prompt sentence */}
                  <div className="p-3 rounded-md bg-[#0D0F13] border border-white/[0.04]">
                    <p className="text-sm font-medium text-zinc-200">
                      "{feature.description}"
                    </p>
                  </div>

                  {/* Operational detail */}
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {feature.details}
                  </p>
                </div>

                {onSelectFeaturePreview && (
                  <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between">
                    <button
                      onClick={() => onSelectFeaturePreview(feature.id)}
                      className="text-xs text-zinc-400 hover:text-[#E2A97B] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>معاينة الواجهة</span>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] text-zinc-400">متاحة الآن</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
