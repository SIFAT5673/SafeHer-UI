import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";

interface RouteMapPreviewProps {
  fromLocation: string;
  toLocation: string;
  safetyLevel: 'safe' | 'moderate' | 'risky';
}

export function RouteMapPreview({ fromLocation, toLocation, safetyLevel }: RouteMapPreviewProps) {
  const routeColor = {
    safe: '#4CAF50',
    moderate: '#FFA726',
    risky: '#FF5252'
  }[safetyLevel];

  return (
    <div className="relative h-64 bg-gradient-to-br from-[#E8E0FF] to-[#FFE5EE] rounded-[16px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px w-full bg-white"
            style={{ top: `${(i + 1) * 12.5}%` }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px h-full bg-white"
            style={{ left: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>

      {/* Route path */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <motion.path
          d="M 50 200 Q 100 150, 150 120 T 300 50"
          stroke={routeColor}
          strokeWidth="4"
          fill="none"
          strokeDasharray="10,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>

      {/* Start marker */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-8 left-12 z-10"
      >
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-[#4CAF50] flex items-center justify-center shadow-lg">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-[#3B3B3B] bg-white px-2 py-1 rounded shadow">
            Start
          </div>
        </div>
      </motion.div>

      {/* End marker */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute top-8 right-12 z-10"
      >
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-[#FF5E78] flex items-center justify-center shadow-lg">
            <Navigation className="h-5 w-5 text-white" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-[#3B3B3B] bg-white px-2 py-1 rounded shadow">
            Destination
          </div>
        </div>
      </motion.div>

      {/* Safety zones (dots along route) */}
      {[30, 50, 70].map((percent, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 + i * 0.2 }}
          className="absolute z-10"
          style={{
            left: `${25 + percent * 0.7}%`,
            top: `${80 - percent * 1.2}%`
          }}
        >
          <div className="h-3 w-3 rounded-full bg-white border-2 border-[#9B7EDE] animate-pulse" />
        </motion.div>
      ))}
    </div>
  );
}
