import { useState } from "react";
import { RouteHeader } from "../route/RouteHeader";
import { LocationField } from "../route/LocationField";
import { SafetyIndicator } from "../route/SafetyIndicator";
import { SafetyResourcesCard } from "../route/SafetyResourcesCard";
import { RouteMapPreview } from "../route/RouteMapPreview";
import { GradientButton } from "../common/GradientButton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface SafeRouteScreenProps {
  onBack: () => void;
}

export function SafeRouteScreen({ onBack }: SafeRouteScreenProps) {
  const [fromLocation, setFromLocation] = useState("Gulshan 2, Dhaka");
  const [toLocation, setToLocation] = useState("");
  const [safetyLevel, setSafetyLevel] = useState<'safe' | 'moderate' | 'risky'>('safe');
  const [showPreview, setShowPreview] = useState(false);
  const [showDestinationModal, setShowDestinationModal] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const destinations = [
    "Banani, Dhaka",
    "Dhanmondi, Dhaka",
    "Uttara, Dhaka",
    "Mirpur, Dhaka",
    "Mohakhali, Dhaka"
  ];

  const handleDestinationSelect = (destination: string) => {
    setToLocation(destination);
    setShowDestinationModal(false);
    
    // Simulate AI risk calculation
    const randomLevel = Math.random();
    if (randomLevel > 0.7) setSafetyLevel('safe');
    else if (randomLevel > 0.4) setSafetyLevel('moderate');
    else setSafetyLevel('risky');
  };

  const handlePreviewRoute = () => {
    if (toLocation) {
      setShowPreview(true);
    }
  };

  const handleStartNavigation = () => {
    setIsNavigating(true);
    // In a real app, this would start live tracking
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6F7] to-[#FFEDEE]">
      <RouteHeader onBack={onBack} />
      
      <div className="p-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 shadow-[0_8px_20px_rgba(0,0,0,0.08)] mb-6">
          <LocationField
            label="From"
            value={fromLocation}
            readOnly
          />
          
          <LocationField
            label="To"
            value={toLocation}
            placeholder="Select destination"
            onClick={() => setShowDestinationModal(true)}
          />

          {toLocation && (
            <SafetyIndicator level={safetyLevel} />
          )}

          <div className="flex gap-3">
            <GradientButton
              variant="purple"
              fullWidth
              onClick={handlePreviewRoute}
              disabled={!toLocation}
            >
              Preview Route
            </GradientButton>
            {showPreview && (
              <GradientButton
                variant="primary"
                fullWidth
                onClick={handleStartNavigation}
              >
                Start Navigation
              </GradientButton>
            )}
          </div>
        </div>

        {showPreview && (
          <div className="mb-6">
            <RouteMapPreview
              fromLocation={fromLocation}
              toLocation={toLocation}
              safetyLevel={safetyLevel}
            />
          </div>
        )}

        {isNavigating && (
          <div className="mb-6 bg-gradient-primary text-white rounded-[16px] p-4 shadow-lg animate-pulse">
            <p className="text-center">🔴 Live Navigation Active</p>
            <p className="text-center text-sm mt-1">ETA: 15 minutes</p>
          </div>
        )}

        <SafetyResourcesCard
          policeStations={3}
          hospitals={5}
          safeZones={8}
        />
      </div>

      {/* Destination Selection Modal */}
      <Dialog open={showDestinationModal} onOpenChange={setShowDestinationModal}>
        <DialogContent className="rounded-[24px]">
          <DialogHeader>
            <DialogTitle>Select Destination</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 mt-4">
            {destinations.map((destination, index) => (
              <button
                key={index}
                onClick={() => handleDestinationSelect(destination)}
                className="w-full text-left p-4 rounded-[12px] hover:bg-[#FFF6F7] transition-colors border border-[#FFE5EE]"
              >
                <p className="text-[#3B3B3B]">{destination}</p>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
