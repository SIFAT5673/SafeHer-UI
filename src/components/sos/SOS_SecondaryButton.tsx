interface SOS_SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SOS_SecondaryButton({ children, className = '', ...props }: SOS_SecondaryButtonProps) {
  return (
    <button
      className={`px-8 py-4 rounded-[24px] bg-transparent border-2 border-white text-white shadow-md hover:bg-white/10 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
