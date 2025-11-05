import { AlertCircle } from "lucide-react";

interface SOSFloatingButtonProps {
  onPress: () => void;
}

export function SOSFloatingButton({ onPress }: SOSFloatingButtonProps) {
  return (
    <button
      onClick={onPress}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 h-40 w-40 rounded-full gradient-primary shadow-[0_8px_24px_rgba(255,94,120,0.4)] animate-pulse-soft flex flex-col items-center justify-center gap-2 text-white"
    >
      <AlertCircle className="h-16 w-16" />
      <span className="text-xl">SOS</span>
    </button>
  );
}
