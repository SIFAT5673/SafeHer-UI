import logoImage from "figma:asset/755ca0909f4eabdf52cf9ca733f8b90ff477476b.png";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24',
    xl: 'h-32'
  };

  return (
    <img 
      src={logoImage} 
      alt="SafeHer Logo" 
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
}
