import { useRef, useEffect } from "react";

interface OTP_InputBoxProps {
  value: string;
  index: number;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
}

export function OTP_InputBox({ value, index, onChange, onKeyDown }: OTP_InputBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value && index < 3) {
      const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement;
      nextInput?.focus();
    }
  }, [value, index]);

  return (
    <input
      ref={inputRef}
      data-index={index}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value}
      onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ''))}
      onKeyDown={(e) => onKeyDown(e, index)}
      className="w-16 h-16 text-center rounded-[12px] border-2 border-[#FFD2D9] bg-white text-2xl text-[#3B3B3B] focus:border-[#FF5E78] focus:outline-none focus:ring-2 focus:ring-[#FF9BAA]/30 transition-all"
    />
  );
}
