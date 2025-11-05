import { useState } from "react";
import { Camera } from "lucide-react";
import { GradientButton } from "../common/GradientButton";
import { TextField } from "../common/TextField";
import { Logo } from "../common/Logo";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface ProfileSetupScreenProps {
  onComplete: () => void;
}

export function ProfileSetupScreen({ onComplete }: ProfileSetupScreenProps) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("female");

  const handleSubmit = () => {
    if (name.trim()) {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6F7] to-[#FFE5EE] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo size="lg" className="mx-auto mb-4" />
          <h2 className="text-2xl mb-2 text-[#3B3B3B]">Complete Your Profile</h2>
          <p className="text-[#9B9B9B]">Help us personalize your experience</p>
        </div>

        <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#FF9BAA] to-[#9B7EDE] flex items-center justify-center">
                <span className="text-4xl text-white">👤</span>
              </div>
              <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-[#FF5E78] flex items-center justify-center shadow-lg">
                <Camera className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>

          <TextField
            label="Full Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-6"
          />

          <div className="mb-6">
            <label className="block mb-3 text-sm text-[#3B3B3B]">Gender</label>
            <RadioGroup value={gender} onValueChange={setGender} className="space-y-3">
              <div className="flex items-center space-x-2 p-3 rounded-[12px] border-2 border-[#FFD2D9] bg-[#FFE5EE]">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="flex-1 cursor-pointer">Female</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-[12px] border-2 border-[#FFD2D9]">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="flex-1 cursor-pointer">Male</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-[12px] border-2 border-[#FFD2D9]">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="flex-1 cursor-pointer">Other</Label>
              </div>
            </RadioGroup>
          </div>

          <GradientButton
            variant="purple"
            fullWidth
            onClick={handleSubmit}
            disabled={!name.trim()}
          >
            Submit
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
