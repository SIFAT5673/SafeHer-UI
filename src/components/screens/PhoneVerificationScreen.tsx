import { useState } from "react";
import { GradientButton } from "../common/GradientButton";
import { TextField } from "../common/TextField";
import { Logo } from "../common/Logo";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface PhoneVerificationScreenProps {
  onCodeSent: () => void;
}

export function PhoneVerificationScreen({ onCodeSent }: PhoneVerificationScreenProps) {
  const [countryCode, setCountryCode] = useState("+880");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendCode = () => {
    if (phoneNumber.length >= 10) {
      onCodeSent();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6F7] to-[#FFE5EE] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo size="xl" className="mx-auto mb-4" />
          <p className="text-[#9B9B9B]">Empowering Women to Move Freely and Safely.</p>
          <p className="text-[#9B9B9B] text-sm mt-2">Enter your phone number to continue</p>
        </div>

        <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <div className="mb-6">
            <label className="block mb-2 text-sm text-[#3B3B3B]">Country Code</label>
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="rounded-[12px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+880">🇧🇩 +880 (Bangladesh)</SelectItem>
                <SelectItem value="+1">🇺🇸 +1 (USA)</SelectItem>
                <SelectItem value="+44">🇬🇧 +44 (UK)</SelectItem>
                <SelectItem value="+91">🇮🇳 +91 (India)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TextField
            label="Phone Number"
            type="tel"
            placeholder="1712 345 678"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <GradientButton
            variant="purple"
            fullWidth
            className="mt-6"
            onClick={handleSendCode}
            disabled={phoneNumber.length < 10}
          >
            Send Code
          </GradientButton>
        </div>

        <p className="text-center text-sm text-[#9B9B9B] mt-6">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}
