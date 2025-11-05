import { Input } from "../ui/input";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function TextField({ label, error, className = '', ...props }: TextFieldProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm text-[#3B3B3B]">
          {label}
        </label>
      )}
      <Input
        className={`rounded-[12px] border-[#FFD2D9] bg-white focus:border-[#FF5E78] transition-all ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-[#FF5252]">{error}</p>
      )}
    </div>
  );
}
