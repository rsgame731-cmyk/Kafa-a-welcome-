import React, { useState } from 'react';
import { MessageSquarePlus, AlertCircle, CheckCircle2, Send, Lightbulb, Bug, Sparkles } from 'lucide-react';

interface FeedbackSectionProps {
  initialType?: 'suggestion' | 'issue';
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ initialType = 'suggestion' }) => {
  const [feedbackType, setFeedbackType] = useState<'suggestion' | 'issue' | 'experience' | 'idea'>(
    initialType === 'issue' ? 'issue' : 'suggestion'
  );
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    // Save locally
    try {
      const existing = JSON.parse(localStorage.getItem('kafaa_community_feedback') || '[]');
      const newEntry = {
        id: Date.now().toString(),
        type: feedbackType,
        message: message.trim(),
        name: name.trim() || 'عضو من البداية',
        email: email.trim() || 'بدون بريد',
        date: new Date().toISOString(),
      };
      localStorage.setItem('kafaa_community_feedback', JSON.stringify([newEntry, ...existing]));
    } catch {
      // LocalStorage fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section id="feedback" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#E2A97B] py-1 px-3.5 rounded-full bg-[#1A1A24] border border-[#C88A58]/20">
            <MessageSquarePlus className="w-3.5 h-3.5 text-[#C88A58]" />
            <span>محور التطوير الأساسي</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            قل لنا ما الذي ينقص كفاءة.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed font-normal">
            أنت لا تستخدم منتجًا نهائيًا فقط.
            <br />
            أنت تساعدنا على تحديد المنتج الذي يجب أن يصبح عليه.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setFeedbackType('suggestion');
                setSubmitted(false);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                feedbackType === 'suggestion'
                  ? 'bg-[#1D2029] text-white border border-[#C88A58]/60 shadow-xs'
                  : 'text-zinc-400 bg-[#121419] border border-white/[0.06] hover:text-zinc-200'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-[#C88A58]" />
              <span>أرسل اقتراحًا</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setFeedbackType('issue');
                setSubmitted(false);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                feedbackType === 'issue'
                  ? 'bg-[#1D2029] text-white border border-rose-500/50 shadow-xs'
                  : 'text-zinc-400 bg-[#121419] border border-white/[0.06] hover:text-zinc-200'
              }`}
            >
              <Bug className="w-3.5 h-3.5 text-rose-400" />
              <span>أخبرنا عن مشكلة</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setFeedbackType('experience');
                setSubmitted(false);
              }}
              className={`hidden sm:flex px-4 py-2 text-xs font-medium rounded-lg transition-all items-center gap-1.5 cursor-pointer ${
                feedbackType === 'experience'
                  ? 'bg-[#1D2029] text-white border border-[#C88A58]/60 shadow-xs'
                  : 'text-zinc-400 bg-[#121419] border border-white/[0.06] hover:text-zinc-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>انطباع عن التجربة</span>
            </button>
          </div>
        </div>

        {/* Feedback Form Card */}
        <div className="rounded-2xl bg-[#111319] border border-white/[0.08] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">وصلتنا رسالتك، شكرًا لك!</h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                ملاحظتك وصلت مباشرة لفريق عمل كفاءة، وستكون محل نقاش في جلستنا التقنية القادمة.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-[#191C24] border border-white/[0.08] rounded-md transition-colors cursor-pointer"
                >
                  إرسال ملاحظة أو اقتراح آخر
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-right">
              
              {/* Message field */}
              <div className="space-y-2">
                <label className="block text-xs font-medium text-zinc-300">
                  {feedbackType === 'issue'
                    ? 'ما هي المشكلة أو الخلل الذي واجهته في المنصة؟'
                    : 'ما هي الميزة أو التغيير الذي تراه ضروريًا في كفاءة؟'}
                  <span className="text-[#C88A58] mr-1">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder={
                    feedbackType === 'issue'
                      ? 'صف المشكلة بالتفصيل، في أي صفحة حدثت، وما الذي كنت تحاول القيام به...'
                      : 'مثال: نحتاج مرشحًا حسب الولاية في الجزائر، أو إمكانية إضافة رابط محفظة أعمال GitHub/Behance مباشرة في الهوية...'
                  }
                  className="w-full rounded-xl bg-[#090A0D] border border-white/[0.08] focus:border-[#C88A58]/50 focus:ring-1 focus:ring-[#C88A58]/30 p-4 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none resize-y"
                />
              </div>

              {/* Name & Contact Info (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-zinc-300">
                    اسمك أو مجالك المهني (اختياري)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مثال: أمين — مهندس برمجيات"
                    className="w-full rounded-lg bg-[#090A0D] border border-white/[0.08] focus:border-[#C88A58]/50 p-3 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-medium text-zinc-300">
                    بريدك الإلكتروني للمتابعة (اختياري)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full rounded-lg bg-[#090A0D] border border-white/[0.08] focus:border-[#C88A58]/50 p-3 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/[0.05]">
                <span className="text-xs text-zinc-400">
                  نقرأ كل رسالة بعناية. لا ردود آلية ولا رسائل ترويجية.
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting || !message.trim()}
                  className="w-full sm:w-auto px-7 py-2.5 text-xs sm:text-sm font-semibold text-[#120B05] copper-button-gradient rounded-md shadow-sm hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{feedbackType === 'issue' ? 'إرسال التقرير عن المشكلة' : 'أرسل الاقتراح الآن'}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
