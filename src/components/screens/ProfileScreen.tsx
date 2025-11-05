import { useState } from "react";
import { User, Phone, MapPin, Shield, Bell, LogOut } from "lucide-react";
import { BottomNavBar } from "../home/BottomNavBar";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog";
import { toast } from "sonner@2.0.3";

interface ProfileScreenProps {
  activeTab: 'track' | 'sos' | 'profile';
  onTabChange: (tab: 'track' | 'sos' | 'profile') => void;
}

export function ProfileScreen({ activeTab, onTabChange }: ProfileScreenProps) {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [autoShareRoute, setAutoShareRoute] = useState(true);
  const [voiceCommandSOS, setVoiceCommandSOS] = useState(false);

  const menuItems = [
    { icon: User, label: "Personal Information", onClick: () => toast.info("Opening personal information...") },
    { icon: Phone, label: "Emergency Contacts", badge: 3, onClick: () => toast.info("Managing emergency contacts...") },
    { icon: MapPin, label: "Location Sharing", onClick: () => toast.info("Configuring location sharing...") },
    { icon: Shield, label: "Privacy & Security", onClick: () => toast.info("Opening privacy settings...") },
    { icon: Bell, label: "Notifications", badge: 2, onClick: () => toast.info("Managing notifications...") },
  ];

  const handleLogout = () => {
    toast.success("Logged out successfully");
    setShowLogoutDialog(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF6F7] pb-24">
      <div className="bg-gradient-primary pt-12 pb-24 px-6 text-white">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarFallback className="bg-white text-[#FF5E78] text-3xl">
              A
            </AvatarFallback>
          </Avatar>
          <h2 className="text-2xl mb-1">Alice Johnson</h2>
          <p className="text-white/80">alice@example.com</p>
        </div>
      </div>

      <div className="px-4 -mt-16">
        <div className="bg-white rounded-[12px] shadow-lg overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.onClick}
                className="w-full flex items-center justify-between p-4 hover:bg-[#FFF6F7] transition-colors border-b border-[#FFE5EE] last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#FFE5EE] flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#FF5E78]" />
                  </div>
                  <span className="text-[#3B3B3B]">{item.label}</span>
                </div>
                {item.badge && item.badge > 0 && (
                  <Badge className="bg-[#FF5E78] text-white">
                    {item.badge}
                  </Badge>
                )}
              </button>
            );
          })}
        </div>

        {/* Safety Preferences */}
        <div className="mt-6 bg-white rounded-[12px] p-6 shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
          <h3 className="text-lg mb-4 text-[#3B3B3B]">Safety Preferences</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-[#3B3B3B]">Auto-share route after 10 PM</p>
                <p className="text-sm text-[#9B9B9B]">Automatically share your location with trusted contacts</p>
              </div>
              <Switch 
                checked={autoShareRoute} 
                onCheckedChange={setAutoShareRoute}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-[#3B3B3B]">Enable SOS voice command</p>
                <p className="text-sm text-[#9B9B9B]">Say "SafeHer Emergency" to activate SOS</p>
              </div>
              <Switch 
                checked={voiceCommandSOS} 
                onCheckedChange={setVoiceCommandSOS}
              />
            </div>
          </div>
        </div>

        <button 
          onClick={() => setShowLogoutDialog(true)}
          className="w-full mt-6 bg-white rounded-[12px] p-4 flex items-center justify-center gap-3 shadow-[0_4px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-all text-[#FF5252]"
        >
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </button>
      </div>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent className="rounded-[24px]">
          <AlertDialogHeader>
            <AlertDialogTitle>Log Out?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to log out? Your safety settings will be preserved.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-[24px]">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleLogout}
              className="rounded-[24px] bg-[#FF5252] hover:bg-[#FF5252]/90"
            >
              Log Out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <BottomNavBar activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
