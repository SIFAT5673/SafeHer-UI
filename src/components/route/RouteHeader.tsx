import { Shield, ChevronLeft } from "lucide-react";

interface RouteHeaderProps {
  onBack?: () => void;
}

export function RouteHeader({ onBack }: RouteHeaderProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm px-6 py-4 flex items-center gap-3 shadow-sm">
      {onBack && (
        <button
          onClick={onBack}
          className="p-2 hover:bg-[#FFF6F7] rounded-full transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-[#3B3B3B]" />
        </button>
      )}
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-[#FF5E78]" />
        <h1 className="text-lg text-[#3B3B3B]">Plan a Safe Route</h1>
      </div>
    </div>
  );
}
