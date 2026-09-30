import React from 'react';

interface MatrixLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export default function MatrixLogo({ size = 'md', showText = true, className = '' }: MatrixLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Metallic Emblem with 100% transparent background - NO box, NO white/black frame */}
      <div className={`relative ${sizeClasses[size]} shrink-0 flex items-center justify-center`}>
        <img
          src="/images/logo-matrix-holding.svg"
          alt="Matrix Holding Emblem"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(39,217,239,0.3)]"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-extrabold text-base sm:text-lg tracking-wider text-white font-display">
            MATRIX
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#27d9ef] font-semibold uppercase mt-0.5">
            HOLDING
          </span>
        </div>
      )}
    </div>
  );
}

