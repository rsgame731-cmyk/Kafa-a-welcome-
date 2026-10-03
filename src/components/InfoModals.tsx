import React from 'react';
import { X, ShieldCheck, FileText, Mail, Send } from 'lucide-react';

interface InfoModalProps {
  type: 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export const InfoModals: React.FC<InfoModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#111319] border border-white/[0.1] shadow-2xl p-6 sm:p-8 overflow-hidden text-right max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#E2A97B]">
              <ShieldCheck className="w-5 h-5 text-[#C88A58]" />
              <h3 className="text-xl font-bold text-white">سياسة الخصوصية الصادقة</h3>
            </div>
            <div className="text-xs sm:text-sm text-zinc-300 space-y-3 leading-relaxed">
              <p>
                في كفاءة، نتعامل مع بياناتك بأقصى درجات المسؤولية والشفافية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-400">
                <li><strong className="text-zinc-200">البيانات التي نجمعها:</strong> فقط المعلومات التي تقدمها طوعًا لملفك المهني (الاسم، النبذة، المهارات، والبريد الإلكتروني لتسجيل الدخول).</li>
                <li><strong className="text-zinc-200">عدم بيع البيانات:</strong> لا نبيع ولا نشارك أي بيانات شخصية مع أطراف ثالثة أو شركات إعلانية على الإطلاق.</li>
                <li><strong className="text-zinc-200">التحكم الكامل:</strong> يمكنك تعديل أو حذف حسابك وبياناتك في أي وقت مباشرة.</li>
                <li><strong className="text-zinc-200">خلو المنصة من التتبع التجاري:</strong> لا نستخدم ملفات تعريف ارتباط خبيثة لتتبعك خارج منصتنا.</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-left">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs bg-[#1C1F28] hover:bg-[#252A36] text-white rounded-md"
              >
                فهمت، إغلاق
              </button>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#E2A97B]">
              <FileText className="w-5 h-5 text-[#C88A58]" />
              <h3 className="text-xl font-bold text-white">شروط الاستخدام وميثاق المجتمع</h3>
            </div>
            <div className="text-xs sm:text-sm text-zinc-300 space-y-3 leading-relaxed">
              <p>
                كفاءة هي مساحة مهنية محترمة نهدف من خلالها للارتقاء ببيئة العمل وتبادل الخبرات:
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-400">
                <li><strong className="text-zinc-200">المحتوى المهني:</strong> المنصة مخصصة للنقاشات والتجارب والخدمات المهنية فقط، بعيدًا عن المشاحنات والمحتوى غير اللائق.</li>
                <li><strong className="text-zinc-200">النزاهة في السيرة والخدمات:</strong> نطلب من جميع الأعضاء تحري الدقة والصدق في تمثيل مهاراتهم وعروضهم المهنية.</li>
                <li><strong className="text-zinc-200">طبيعة المرحلة التجريبية:</strong> كفاءة في طور التطوير، قد نقوم بتحديث الميزات أو البنية دوريًا لخدمتكم بشكل أفضل.</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-left">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs bg-[#1C1F28] hover:bg-[#252A36] text-white rounded-md"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}

        {type === 'contact' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#E2A97B]">
              <Mail className="w-5 h-5 text-[#C88A58]" />
              <h3 className="text-xl font-bold text-white">تواصل مع فريق كفاءة</h3>
            </div>
            <div className="text-xs sm:text-sm text-zinc-300 space-y-3 leading-relaxed">
              <p>
                نحن متاحون دائمًا لأي سؤال، فكرة تعاون، أو استفسار تقني مباشر:
              </p>
              <div className="p-4 rounded-xl bg-[#0D0F14] border border-white/[0.06] space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">البريد الإلكتروني المباشر:</span>
                  <a href="mailto:contact@kafaa.app" className="text-[#E2A97B] font-mono hover:underline">
                    contact@kafaa.app
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">رابط التطبيق قيد التطوير:</span>
                  <a href="https://kafaa-app-2.vercel.app/" target="_blank" rel="noreferrer" className="text-zinc-200 hover:underline">
                    kafaa-app-2.vercel.app
                  </a>
                </div>
              </div>
              <p className="text-xs text-zinc-400">
                يمكنك أيضًا كتابة ملاحظتك مباشرة في قسم "قل لنا ما الذي ينقص كفاءة" على الصفحة الرئيسية لنقرأها على الفور.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] text-left">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs bg-[#1C1F28] hover:bg-[#252A36] text-white rounded-md"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
