import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Sparkles, ArrowLeft, Shield } from 'lucide-react';
import { KafaaLogo } from './KafaaLogo';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      const existing = JSON.parse(localStorage.getItem('kafaa_early_builders') || '[]');
      const newEntry = {
        id: Date.now().toString(),
        name: name.trim() || 'مهني في البداية',
        email: email.trim(),
        role: role.trim() || 'غير محدد',
        city: city.trim() || 'الجزائر',
        notes: notes.trim(),
        joinedAt: new Date().toISOString(),
      };
      localStorage.setItem('kafaa_early_builders', JSON.stringify([newEntry, ...existing]));
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#111319] border border-white/[0.1] shadow-2xl p-6 sm:p-8 overflow-hidden text-right max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#C88A58]/10 blur-[80px]"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#1A1D27] border border-[#C88A58]/40 flex items-center justify-center text-[#E2A97B]">
              <CheckCircle2 className="w-7 h-7 text-[#C88A58]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                أهلًا بك بين أوائل بناة كفاءة!
              </h3>
              <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                سجلنا اهتمامك بنجاح. سنبقيك على اطلاع مباشر بكل تحديث، وستكون لك الأولوية في تجربة الميزات الجديدة.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0D0F14] border border-white/[0.06] text-xs text-zinc-400 space-y-2">
              <div className="flex items-center justify-between">
                <span>حالة العضوية:</span>
                <span className="text-[#E2A97B] font-medium">مساهم في البداية (Early Pioneer)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>البريد المسجل:</span>
                <span className="font-mono text-zinc-300">{email}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://kafaa-app-2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs sm:text-sm font-semibold text-[#120B05] copper-button-gradient rounded-md flex items-center justify-center gap-2"
              >
                <span>الانتقال فورًا لتطبيق كفاءة المباشر</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs text-zinc-400 hover:text-zinc-200 bg-[#161820] border border-white/[0.06] rounded-md transition-colors"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C88A58]"></span>
                <span className="text-xs text-[#E2A97B] font-medium">انضمام للأوائل</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                كن من أوائل من يبنون كفاءة
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                سجل رغبتك في الانضمام واختبار كفاءة، أو انتقل مباشرة للتطبيق الحي قيد التطوير.
              </p>
            </div>

            {/* Direct Option 1: Try App Immediately */}
            <div className="p-3.5 rounded-xl bg-[#161822] border border-[#C88A58]/20 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-zinc-200">تريد تجربة المنصة الآن؟</div>
                <div className="text-[11px] text-zinc-400">الإصدار الحي للتطوير متاح ومفتوح للاستخدام</div>
              </div>
              <a
                href="https://kafaa-app-2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-medium text-white bg-[#222532] hover:bg-[#2A2E3D] border border-white/[0.1] rounded-md flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>دخول التطبيق</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C88A58]" />
              </a>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-white/[0.06] w-full"></div>
              <span className="bg-[#111319] px-3 text-[11px] text-zinc-500 absolute">أو سجل اهتمامك ليصلك كل جديد</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-right">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  الاسم الكامل أو اللقب المهني
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: ياسمين بن علي"
                  className="w-full rounded-lg bg-[#0A0C10] border border-white/[0.08] focus:border-[#C88A58]/50 p-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  البريد الإلكتروني <span className="text-[#C88A58]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company-or-email.com"
                  className="w-full rounded-lg bg-[#0A0C10] border border-white/[0.08] focus:border-[#C88A58]/50 p-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    المجال أو التخصص
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="برمجة، تصميم، أعمال، طب..."
                    className="w-full rounded-lg bg-[#0A0C10] border border-white/[0.08] focus:border-[#C88A58]/50 p-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    المدينة / الولاية
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="الجزائر، وهران، الشتات..."
                    className="w-full rounded-lg bg-[#0A0C10] border border-white/[0.08] focus:border-[#C88A58]/50 p-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  ما الذي تتمنى أن توفره لك كفاءة كمنصة مهنية؟
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="أفكار أو توقعات تود أن نضعها في الحسبان..."
                  className="w-full rounded-lg bg-[#0A0C10] border border-white/[0.08] focus:border-[#C88A58]/50 p-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !email.trim()}
                  className="w-full py-3 text-xs sm:text-sm font-semibold text-[#120B05] copper-button-gradient rounded-md shadow-sm hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>تأكيد الانضمام كعضو في البداية</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] text-zinc-400">
                  لا نرسل رسائل مزعجة أو سبام أبدًا. خصوصيتك محترمة بالكامل.
                </span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
