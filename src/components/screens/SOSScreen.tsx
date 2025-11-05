import { useState } from "react";
import { SOS_CountdownCircle } from "../sos/SOS_CountdownCircle";
import { SOS_PrimaryButton } from "../sos/SOS_PrimaryButton";
import { SOS_SecondaryButton } from "../sos/SOS_SecondaryButton";

interface SOSScreenProps {
  onCancel: () => void;
  onActivate: () => void;
}

export function SOSScreen({ onCancel, onActivate }: SOSScreenProps) {
  const [countdown, setCountdown] = useState(true);

  const handleSkip = () => {
    setCountdown(false);
    onActivate();
  };

  const handleComplete = () => {
    onActivate();
  };

  return (
    <div className="min-h-screen gradient-radial-sos flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-white mb-4">SOS Activated</h1>
        <p className="text-white/90 text-lg">
          {countdown ? "Alerting your trusted contacts and local authorities." : "Help is on the way"}
        </p>
      </div>

      {countdown && (
        <div className="mb-12">
          <SOS_CountdownCircle initialSeconds={10} onComplete={handleComplete} />
        </div>
      )}

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <SOS_PrimaryButton onClick={onCancel}>
          Cancel SOS
        </SOS_PrimaryButton>
        
        {countdown && (
          <SOS_SecondaryButton onClick={handleSkip}>
            Skip Countdown
          </SOS_SecondaryButton>
        )}
      </div>

      <div className="mt-12 text-center text-white/80 text-sm">
        <p>Your location is being shared with:</p>
        <p className="mt-2">Trusted Contacts • Local Police (999)</p>
      </div>
    </div>
  );
}
