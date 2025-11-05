import { useState } from "react";
import { OTP_InputBox } from "../otp/OTP_InputBox";
import { GradientButton } from "../common/GradientButton";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface OTPScreenProps {
  onVerified: () => void;
}

export function OTPScreen({ onVerified }: OTPScreenProps) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement;
      prevInput?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.every(digit => digit !== "")) {
      onVerified();
    }
  };

  const isComplete = otp.every(digit => digit !== "");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6F7] to-[#E8E0FF] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-float">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559425309-661f8467eb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjMzNTM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Confident woman"
            className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
          />
        </div>

        <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <h2 className="text-2xl text-center mb-2 text-[#3B3B3B]">Enter Access Code</h2>
          <p className="text-center text-sm text-[#9B9B9B] mb-6">
            We sent a 4-digit code to your number
          </p>

          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, index) => (
              <OTP_InputBox
                key={index}
                value={digit}
                index={index}
                onChange={(value) => handleOtpChange(value, index)}
                onKeyDown={handleKeyDown}
              />
            ))}
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-[#9B9B9B]">
              Resend code in <span className="text-[#FF5E78]">{timer}s</span>
            </p>
          </div>

          <GradientButton
            variant="purple"
            fullWidth
            onClick={handleVerify}
            disabled={!isComplete}
          >
            Verify Code
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
