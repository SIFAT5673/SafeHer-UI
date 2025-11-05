import { MapPin, Navigation } from "lucide-react";
import { CardContainer } from "../common/CardContainer";

interface MapCardProps {
  currentLocation?: string;
  onViewMap?: () => void;
}

export function MapCard({ 
  currentLocation = "Dhaka, Bangladesh",
  onViewMap 
}: MapCardProps) {
  return (
    <CardContainer className="mt-20 mx-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-[#FFE5EE] flex items-center justify-center">
            <MapPin className="h-5 w-5 text-[#FF5E78]" />
          </div>
          <div>
            <p className="text-sm text-[#9B9B9B]">Current Location</p>
            <p className="text-[#3B3B3B]">{currentLocation}</p>
          </div>
        </div>
        <button 
          onClick={onViewMap}
          className="p-2 rounded-full hover:bg-[#FFF6F7] transition-colors"
        >
          <Navigation className="h-5 w-5 text-[#9B7EDE]" />
        </button>
      </div>
      
      <div 
        onClick={onViewMap}
        className="h-40 bg-gradient-to-br from-[#E8E0FF] to-[#FFE5EE] rounded-[12px] flex items-center justify-center relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      >
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-full bg-white"
              style={{ top: `${(i + 1) * 16.66}%` }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-full bg-white"
              style={{ left: `${(i + 1) * 16.66}%` }}
            />
          ))}
        </div>
        <div className="text-center z-10">
          <MapPin className="h-12 w-12 text-[#FF5E78] mx-auto mb-2" />
          <p className="text-sm text-[#9B7EDE]">Tap to plan safe route</p>
        </div>
      </div>
    </CardContainer>
  );
}
