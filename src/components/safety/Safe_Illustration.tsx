import { CheckCircle } from "lucide-react";

export function Safe_Illustration() {
  return (
    <div className="relative animate-float">
      <div className="h-48 w-48 rounded-full bg-gradient-to-br from-[#E8E0FF] to-[#FFE5EE] flex items-center justify-center">
        <CheckCircle className="h-24 w-24 text-[#4CAF50]" strokeWidth={2} />
      </div>
      <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-[#FFD2D9] opacity-50 animate-pulse" />
      <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-[#E8E0FF] opacity-50 animate-pulse delay-150" />
    </div>
  );
}
