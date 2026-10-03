import React, { useState } from 'react';
import { 
  PenSquare, 
  MessageSquare, 
  Briefcase, 
  UserCheck, 
  Bookmark, 
  Send, 
  Plus, 
  Search, 
  ExternalLink,
  Shield,
  FileText
} from 'lucide-react';

interface ProductPreviewProps {
  activeTabOverride?: number;
  onOpenJoinModal: () => void;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({ 
  activeTabOverride,
  onOpenJoinModal 
}) => {
  const [selectedTab, setSelectedTab] = useState<number>(activeTabOverride ?? 0);
  const [userDraft, setUserDraft] = useState('');
  const [draftSubmitted, setDraftSubmitted] = useState(false);

  React.useEffect(() => {
    if (activeTabOverride !== undefined) {
      setSelectedTab(activeTabOverride);
    }
  }, [activeTabOverride]);

  const tabs = [
    { id: 0, label: 'خلاصة المحتوى', icon: PenSquare },
    { id: 1, label: 'الهوية المهنية', icon: UserCheck },
    { id: 2, label: 'المحادثات والرسائل', icon: MessageSquare },
    { id: 3, label: 'الخدمات المهنية', icon: Briefcase },
    { id: 4, label: 'المجموعات المحفوظة', icon: Bookmark },
  ];

  return (
    <section id="preview" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-10 text-right">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#E2A97B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]"></span>
            <span>معاينة حية وصادقة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            واجهات حقيقية، بدون نشاط مصطنع.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            لا نملأ الواجهة بحسابات وهمية أو إشعارات مفبركة. عندما تدخل إلى كفاءة، سترى الواجهة كما هي في واقعها الآن: جاهزة لتستقبل مشاركتك الأولى.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/[0.06] mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#1D2028] text-white border border-[#C88A58]/50 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#14151B] border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C88A58]' : 'text-zinc-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Preview Frame */}
        <div className="rounded-xl border border-white/[0.08] bg-[#0E1015] shadow-2xl overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="px-5 py-3 bg-[#13161C] border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C88A58]"></span>
              <span className="text-xs text-zinc-300 font-medium">
                {tabs[selectedTab].label} — حالة البداية (Empty State)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-zinc-500 hidden sm:inline">
                حالة واقعية ومصممة للترحيب بأول المساهمين
              </span>
              <a
                href="https://kafaa-app-2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#E2A97B] hover:text-white transition-colors mr-2"
              >
                <span>فتح التطبيق</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Screen Display Area */}
          <div className="p-6 md:p-10 bg-[#0B0D11] min-h-[440px] flex flex-col justify-center">

            {/* TAB 0: FEED EMPTY STATE */}
            {selectedTab === 0 && (
              <div className="max-w-xl mx-auto w-full space-y-6">
                
                {/* Composer */}
                <div className="p-4 rounded-xl bg-[#13151C] border border-white/[0.07] space-y-3">
                  <div className="text-xs text-zinc-400 font-medium mb-1">
                    جرّب كتابة منشورك الأول في كفاءة:
                  </div>
                  
                  <div className="relative">
                    <textarea
                      value={userDraft}
                      onChange={(e) => {
                        setUserDraft(e.target.value);
                        setDraftSubmitted(false);
                      }}
                      placeholder="ما الذي تعمل عليه اليوم؟ شارك تحديًا تقنيًا، كتابًا مهنيًا أثّر فيك، أو درسًا من عملك..."
                      rows={3}
                      className="w-full rounded-lg bg-[#0A0C0F] border border-white/[0.08] p-3 text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#C88A58]/50 resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-zinc-500">
                      محتوى مهني بدون صخب
                    </span>
                    <button
                      onClick={() => {
                        if (userDraft.trim()) {
                          setDraftSubmitted(true);
                        } else {
                          onOpenJoinModal();
                        }
                      }}
                      className="px-4 py-1.5 text-xs font-medium text-[#120B05] copper-button-gradient rounded-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      <span>{userDraft.trim() ? 'نشر في المعاينة' : 'انضم للنشر'}</span>
                    </button>
                  </div>

                  {draftSubmitted && (
                    <div className="p-3 rounded bg-[#171B24] border border-[#C88A58]/30 text-xs text-zinc-200 animate-fadeIn">
                      <span className="text-[#E2A97B] font-semibold">منشورك جاهز!</span>
                      <p className="text-zinc-400 mt-1">
                        "{userDraft}"
                      </p>
                      <p className="text-[11px] text-zinc-500 mt-2">
                        سجل حسابك في المنصة الحية ليكون منشورك الأول متاحًا لجميع زملائك في البداية.
                      </p>
                    </div>
                  )}
                </div>

                {/* Honest Empty State Container */}
                <div className="p-8 rounded-xl bg-[#12141B] border border-dashed border-white/[0.12] text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#1A1D26] border border-[#C88A58]/20 flex items-center justify-center text-[#E2A97B]">
                    <FileText className="w-5 h-5 text-[#C88A58]" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-zinc-100">
                      لا توجد منشورات بعد.
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                      ابدأ أول منشور في شبكتك.
                      <br />
                      المنصة في بدايتها، وكلمتك الأولى ستكون بداية لحوارات مهنية بنّاءة.
                    </p>
                  </div>

                  <button
                    onClick={onOpenJoinModal}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-200 bg-[#1A1D26] hover:bg-[#222632] border border-white/[0.08] hover:border-[#C88A58]/40 rounded-md transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#C88A58]" />
                    <span>ابدأ أول منشور في كفاءة</span>
                  </button>
                </div>

              </div>
            )}

            {/* TAB 1: PROFILE EMPTY STATE */}
            {selectedTab === 1 && (
              <div className="max-w-xl mx-auto w-full space-y-5">
                <div className="p-6 rounded-xl bg-[#13151D] border border-white/[0.08] space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#1A1D27] border border-white/[0.1] flex items-center justify-center text-zinc-500">
                      <UserCheck className="w-8 h-8 text-[#C88A58]" />
                    </div>
                    <div className="text-center sm:text-right space-y-1">
                      <h4 className="text-lg font-bold text-zinc-100">هويتك المهنية</h4>
                      <p className="text-xs text-zinc-400">حدد تخصصك، خبراتك، ورؤيتك المهنية</p>
                      <span className="inline-block text-[11px] text-[#E2A97B] bg-[#1C1F2A] px-2.5 py-0.5 rounded border border-[#C88A58]/20">
                        متاح للمحترفين في الجزائر والشتات
                      </span>
                    </div>
                  </div>

                  {/* Empty Sections */}
                  <div className="space-y-3 pt-3 border-t border-white/[0.05]">
                    <div className="p-3.5 rounded-lg bg-[#0C0E12] border border-dashed border-white/[0.08] flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-zinc-300">النبذة المهنية (Bio)</div>
                        <div className="text-[11px] text-zinc-500">عرّف عن نفسك في سطرين يصفان ما تتقنه</div>
                      </div>
                      <span className="text-xs text-[#C88A58]">+ إضافة</span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#0C0E12] border border-dashed border-white/[0.08] flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-zinc-300">المهارات والخبرات السابقة</div>
                        <div className="text-[11px] text-zinc-500">المشاريع والأدوات التي تجيدها</div>
                      </div>
                      <span className="text-xs text-[#C88A58]">+ إضافة</span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#0C0E12] border border-dashed border-white/[0.08] flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-zinc-300">الشهادات ومعرض الأعمال</div>
                        <div className="text-[11px] text-zinc-500">روابط لمشاريعك ومستودعاتك أو تصميماتك</div>
                      </div>
                      <span className="text-xs text-[#C88A58]">+ إضافة</span>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={onOpenJoinModal}
                      className="px-5 py-2 text-xs font-semibold text-[#120B05] copper-button-gradient rounded-md cursor-pointer"
                    >
                      أنشئ هويتك المهنية الآن
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MESSAGING EMPTY STATE */}
            {selectedTab === 2 && (
              <div className="max-w-xl mx-auto w-full">
                <div className="p-8 sm:p-10 rounded-xl bg-[#12141B] border border-dashed border-white/[0.12] text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#1A1D27] border border-[#C88A58]/20 flex items-center justify-center text-[#E2A97B]">
                    <MessageSquare className="w-6 h-6 text-[#C88A58]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-100">
                      لم تبدأ المحادثات بعد.
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                      ابدأ أول علاقة مهنية.
                      <br />
                      المحادثات في كفاءة مخصصة لتبادل الخبرات، استفسارات العمل، ومناقشة فرص التعاون المباشر.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={onOpenJoinModal}
                      className="px-4 py-2 text-xs font-medium text-zinc-200 bg-[#1D2029] hover:bg-[#252A36] border border-white/[0.08] hover:border-[#C88A58]/40 rounded-md transition-colors cursor-pointer"
                    >
                      تواصل مع مطوري المنصة مباشرة
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: SERVICES EMPTY STATE */}
            {selectedTab === 3 && (
              <div className="max-w-xl mx-auto w-full space-y-4">
                <div className="p-8 sm:p-10 rounded-xl bg-[#12141B] border border-dashed border-white/[0.12] text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#1A1D27] border border-[#C88A58]/20 flex items-center justify-center text-[#E2A97B]">
                    <Briefcase className="w-6 h-6 text-[#C88A58]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-100">
                      اعرض خدماتك المهنية فور جاهزيتها
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                      سواء كنت تقدم استشارات تقنية، حلولًا برمجية، تصميم واجهات، أو استشارات قانونية ومالية؛ جهزنا لك مساحة واضحة لعرض ما تتقنه.
                    </p>
                  </div>

                  <button
                    onClick={onOpenJoinModal}
                    className="px-4 py-2 text-xs font-semibold text-[#120B05] copper-button-gradient rounded-md cursor-pointer"
                  >
                    كن من أوائل مقدّمي الخدمات
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: SAVED EMPTY STATE */}
            {selectedTab === 4 && (
              <div className="max-w-xl mx-auto w-full">
                <div className="p-8 sm:p-10 rounded-xl bg-[#12141B] border border-dashed border-white/[0.12] text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#1A1D27] border border-[#C88A58]/20 flex items-center justify-center text-[#E2A97B]">
                    <Bookmark className="w-6 h-6 text-[#C88A58]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-100">
                      احفظ المحتوى الذي يهمك ونظّمه
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                      كل منشور، مقال، أو مرجع مهني تجده مفيدًا أثناء تصفحك لكفاءة، يمكنك حفظه هنا للرجوع إليه عند الحاجة.
                    </p>
                  </div>

                  <div className="pt-1">
                    <span className="text-xs text-zinc-500">
                      ميزة الحفظ والتنظيم مدمجة بالكامل في التطبيق الحالي
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Micro Footer Inside Preview */}
          <div className="px-5 py-3 bg-[#0D0F14] border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#C88A58]" />
              <span>لا بيانات افتراضية · واجهات مبنية ومستعدة للاستخدام الفعلي</span>
            </span>
            <span className="font-mono text-[11px]">v0.2.1-dev</span>
          </div>

        </div>

      </div>
    </section>
  );
};
