// import { AlertCircle } from "lucide-react";

// interface SOSFloatingButtonProps {
//   onPress: () => void;
// }

// export function SOSFloatingButton({ onPress }: SOSFloatingButtonProps) {
//   return (
//     <button
//       onClick={onPress}
//       className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 h-40 w-40 rounded-full gradient-primary shadow-[0_8px_24px_rgba(255,94,120,0.4)] animate-pulse-soft flex flex-col items-center justify-center gap-2 text-white"
//     >
//       <AlertCircle className="h-16 w-16" />
//       <span className="text-xl">SOS</span>
//     </button>
//   );
// }
import { AlertCircle } from 'lucide-react';

interface SOSFloatingButtonProps {
  onPress: () => void;
}

export function SOSFloatingButton({ onPress }: SOSFloatingButtonProps) {
  return (
    <button
      onClick={onPress}
      className="relative fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 h-24 w-24 rounded-full bg-gradient-to-r from-pink-400 to-red-500 shadow-xl flex items-center justify-center"
    >
      {/* Concentric Circle Animations */}
      <div className="absolute inset-0 rounded-full bg-[#FF5E78] opacity-20 animate-ping-slow"></div>
      <div className="absolute inset-0 rounded-full border-4 border-[#FF5E78] opacity-20 animate-ping-slow"></div>

      {/* SOS Icon and Text */}
      <div className="flex flex-col items-center justify-center z-10">
        <AlertCircle className="h-10 w-10 text-white animate-pulse" />
        <span className="text-xl font-semibold text-white">SOS</span>
      </div>
    </button>
  );
}
