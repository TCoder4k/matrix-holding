interface MatrixLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

const sizeClasses = {
  sm: 'h-7 w-7',
  md: 'h-9 w-9',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

export default function MatrixLogo({
  size = 'lg',
  className = '',
  showText = false,
}: MatrixLogoProps) {
  if (showText) {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <img
          src="/images/logo-matrix-holding.svg"
          alt="Logo Matrix Holding"
          className={`${sizeClasses[size]} object-contain`}
        />
        <div className="flex flex-col">
          <span className="font-bold text-base tracking-tight text-white leading-none">
            MATRIX
          </span>
          <span className="text-[9px] tracking-[0.25em] text-[#27d9ef] font-semibold uppercase mt-0.5">
            HOLDING
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src="/images/logo-matrix-holding.svg"
      alt="Logo Matrix Holding"
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
}