import React from 'react';

interface MatrixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const MatrixLogo: React.FC<MatrixLogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const subTextSizes = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Original 3D Metallic Matrix Holding Emblem */}
      <div className={`relative ${iconSizes[size] || iconSizes.md} shrink-0 flex items-center justify-center`}>
        <img
          src="/src/assets/logo-matrix-holding.svg"
          alt="Matrix Holding"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,162,232,0.3)]"
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-black text-white tracking-[0.06em] leading-none ${textSizes[size] || textSizes.md}`}>
            MATRIX
          </span>
          <span className={`font-bold text-slate-300 tracking-[0.32em] mt-1 uppercase ${subTextSizes[size] || subTextSizes.md}`}>
            HOLDING
          </span>
        </div>
      )}
    </div>
  );
};
