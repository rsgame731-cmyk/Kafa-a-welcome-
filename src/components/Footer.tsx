import React, { useState } from 'react';
import { KafaaLogo } from './KafaaLogo';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
  onOpenContactModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyModal,
  onOpenTermsModal,
  onOpenContactModal,
}) => {
  return (
    <footer className="border-t border-white/[0.06] bg-[#08090C] text-zinc-400 text-xs py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Top Row: Brand & Purpose */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <KafaaLogo size="md" />
            <p className="text-zinc-500 text-xs max-w-sm">
              منصة مهنية في طور البناء. نبني الأساس بصدق، ونتطور خطوة بخطوة مع مجتمعنا في الجزائر وخارجها.
            </p>
          </div>

          {/* Direct Platform Link */}
          <div className="flex items-center gap-3">
            <a
              href="https://kafaa-app-2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#14161E] hover:bg-[#1A1D27] border border-white/[0.08] hover:border-[#C88A58]/30 text-xs text-zinc-200 transition-all"
            >
              <span>فتح تطبيق كفاءة (إصدار التطوير)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C88A58]" />
            </a>
          </div>
        </div>

        {/* Links & Honest Principles Bar */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <a href="#status" className="hover:text-zinc-200 transition-colors">
              عن كفاءة
            </a>
            <a href="#features" className="hover:text-zinc-200 transition-colors">
              المميزات
            </a>
            <button 
              onClick={onOpenPrivacyModal}
              className="hover:text-zinc-200 transition-colors cursor-pointer"
            >
              الخصوصية
            </button>
            <button 
              onClick={onOpenTermsModal}
              className="hover:text-zinc-200 transition-colors cursor-pointer"
            >
              الشروط
            </button>
            <button 
              onClick={onOpenContactModal}
              className="hover:text-zinc-200 transition-colors cursor-pointer"
            >
              تواصل معنا
            </button>
          </div>

          {/* Radical Honesty Notice */}
          <div className="text-[11px] text-zinc-500 flex items-center gap-1.5 text-center sm:text-left">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C88A58]/80"></span>
            <span>لا أرقام مزيفة · لا مبالغات تسويقية · بداية جادة</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-2 text-center text-[11px] text-zinc-400">
          <span>© {new Date().getFullYear()} كفاءة | Kafa’a. جميع الحقوق محفوظة للمشروع قيد البناء.</span>
        </div>

      </div>
    </footer>
  );
};
