interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'purple';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function GradientButton({ 
  variant = 'primary', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}: GradientButtonProps) {
  const baseClasses = "px-6 py-3 rounded-[24px] transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed";
  const gradientClass = variant === 'primary' ? 'gradient-primary' : 'gradient-purple';
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button 
      className={`${baseClasses} ${gradientClass} ${widthClass} text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
