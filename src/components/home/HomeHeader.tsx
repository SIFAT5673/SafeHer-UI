import { Bell } from "lucide-react";
import { Logo } from "../common/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface HomeHeaderProps {
  userName?: string;
  userAvatar?: string;
  notificationCount?: number;
  onNotificationClick?: () => void;
}

export function HomeHeader({ 
  userName = "User",
  userAvatar,
  notificationCount = 0,
  onNotificationClick 
}: HomeHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <Logo size="sm" className="h-8" />
        <div className="flex items-center gap-2">
          <span className="text-[#3B3B3B]">SafeHer Active</span>
          <div className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
        </div>
      </div>
      
      <button 
        className="relative p-2 rounded-full hover:bg-[#FFF6F7] transition-colors"
        onClick={onNotificationClick}
      >
        <Bell className="h-5 w-5 text-[#3B3B3B]" />
        {notificationCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#FF5E78] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {notificationCount}
          </span>
        )}
      </button>
    </div>
  );
}
