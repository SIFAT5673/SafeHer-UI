interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CardContainer({ children, className = '', onClick }: CardContainerProps) {
  return (
    <div 
      className={`bg-white rounded-[12px] p-4 shadow-[0_4px_8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
