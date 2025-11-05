import { Safe_Illustration } from "../safety/Safe_Illustration";
import { GradientButton } from "../common/GradientButton";

interface SafetyConfirmationScreenProps {
  onContinue: () => void;
}

export function SafetyConfirmationScreen({ onContinue }: SafetyConfirmationScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6F7] via-[#FFE5EE] to-[#E8E0FF] flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Safe_Illustration />
        </div>

        <h1 className="text-4xl mb-4 text-[#3B3B3B]">You're Safe Now</h1>
        <p className="text-lg text-[#9B9B9B] mb-12 max-w-sm mx-auto">
          We've notified your emergency contacts that you're safe
        </p>

        <GradientButton variant="primary" onClick={onContinue} className="px-12">
          Continue
        </GradientButton>
      </div>
    </div>
  );
}
