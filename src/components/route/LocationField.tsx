import { MapPin } from "lucide-react";

interface LocationFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  readOnly?: boolean;
  onClick?: () => void;
}

export function LocationField({ 
  label, 
  value, 
  placeholder = "Select location",
  readOnly = false,
  onClick 
}: LocationFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-[#9B9B9B] mb-2">{label}</label>
      <div
        onClick={onClick}
        className={`flex items-center gap-3 bg-white rounded-[16px] px-4 py-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] ${
          onClick ? 'cursor-pointer hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)]' : ''
        } transition-shadow`}
      >
        <MapPin className="h-5 w-5 text-[#FF5E78]" />
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          readOnly={readOnly || !!onClick}
          className="flex-1 bg-transparent text-[#3B3B3B] outline-none placeholder:text-[#9B9B9B]"
        />
      </div>
    </div>
  );
}
