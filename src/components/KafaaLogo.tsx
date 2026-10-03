import React from 'react';

interface KafaaLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const KafaaLogo: React.FC<KafaaLogoProps> = ({ 
  className = '', 
  showSubtitle = true,
  size = 'md' 
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Geometric Architectural Monogram */}
      <div 
        className={`${iconSizes[size]} relative rounded-lg bg-gradient-to-br from-[#1C1E24] via-[#141519] to-[#0E0F12] border border-[#C88A58]/30 flex items-center justify-center p-1.5 shadow-sm group hover:border-[#C88A58]/60 transition-colors`}
      >
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="kafaaCopper" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5D3B3" />
              <stop offset="45%" stopColor="#D4935F" />
              <stop offset="100%" stopColor="#965C30" />
            </linearGradient>
            <linearGradient id="kafaaAccent" x1="40" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFE0C2" />
              <stop offset="100%" stopColor="#C88A58" />
            </linearGradient>
          </defs>
          
          {/* Architectural Arabic letter 'Kaf' ك / K modern fusion */}
          <path 
            d="M9 10C9 8.89543 9.89543 8 11 8H15C16.1046 8 17 8.89543 17 10V30C17 31.1046 16.1046 32 15 32H11C9.89543 32 9 31.1046 9 30V10Z" 
            fill="url(#kafaaCopper)" 
          />
          <path 
            d="M17 19.5L28.8 8.6C29.6 7.8 31 8.4 31 9.5V13.8C31 14.5 30.6 15.1 30 15.6L22.5 21.5L30.2 27.8C30.7 28.2 31 28.8 31 29.5V31.5C31 32.7 29.5 33.3 28.6 32.4L17 21.5V19.5Z" 
            fill="url(#kafaaAccent)" 
          />
          <circle cx="28" cy="21" r="2.2" fill="#FCE5CF" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-semibold tracking-wide text-zinc-100 ${textSizes[size]}`}>
            كفاءة
          </span>
          <span className="text-zinc-500 font-light text-sm">|</span>
          <span className={`font-medium tracking-tight text-zinc-300 font-sans ${size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            Kafa’a
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[11px] text-[#C88A58]/80 font-normal tracking-wide">
            منصة مهنية في طور البناء
          </span>
        )}
      </div>
    </div>
  );
};
