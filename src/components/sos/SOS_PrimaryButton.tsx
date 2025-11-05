interface SOS_PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SOS_PrimaryButton({ children, className = '', ...props }: SOS_PrimaryButtonProps) {
  return (
    <button
      className={`px-8 py-4 rounded-[24px] bg-white text-[#FF5E78] shadow-lg hover:shadow-xl transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
