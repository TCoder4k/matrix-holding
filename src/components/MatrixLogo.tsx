interface MatrixLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
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
}: MatrixLogoProps) {
  return (
    <img
      src="/images/logo-matrix-holding.svg"
      alt="Logo Matrix Holding"
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
}