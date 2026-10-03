import React, { useState } from 'react';
import { KafaaLogo } from './KafaaLogo';
import { ExternalLink, Menu, X, MessageSquarePlus, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
  onOpenFeedback: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal, onOpenFeedback }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'أين نحن الآن؟', href: '#status' },
    { label: 'ماذا يمكنك أن تفعل؟', href: '#features' },
    { label: 'معاينة الواجهة', href: '#preview' },
    { label: 'إلى أين نتجه؟', href: '#roadmap' },
    { label: 'رأيك يهمنا', href: '#feedback' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090A0C]/85 border-b border-white/[0.06] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <KafaaLogo size="md" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#F3D7B5] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://kafaa-app-2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-zinc-300 hover:text-white bg-[#141519] hover:bg-[#1A1C22] border border-white/[0.08] hover:border-[#C88A58]/30 rounded-md transition-all font-medium"
            title="افتح إصدار كفاءة المباشر قيد التطوير"
          >
            <span>جرّب المنصة</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C88A58]" />
          </a>

          <button
            onClick={onOpenJoinModal}
            className="px-4 py-1.5 text-xs font-medium text-[#120B05] copper-button-gradient rounded-md shadow-sm hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
          >
            انضم إلى البداية
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenJoinModal}
            className="px-3 py-1 text-xs font-medium text-[#120B05] copper-button-gradient rounded-md"
          >
            انضم
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white rounded-md bg-[#141519] border border-white/[0.06]"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0E0F13] px-4 py-4 space-y-3">
          <div className="text-xs text-[#C88A58] pb-1 border-b border-white/[0.06] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58] animate-pulse"></span>
            <span>كفاءة منصة قيد البناء والتطوير</span>
          </div>

          <div className="flex flex-col space-y-2 text-sm text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 hover:bg-white/[0.04] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/[0.06] flex flex-col gap-2">
            <a
              href="https://kafaa-app-2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 text-xs bg-[#171920] border border-white/[0.08] text-zinc-200 rounded-md"
            >
              <span>فتح التطبيق قيد التطوير</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C88A58]" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFeedback();
              }}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs bg-[#171920] border border-white/[0.08] text-zinc-200 rounded-md"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-[#C88A58]" />
              <span>أرسل اقتراحًا لفريق العمل</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
