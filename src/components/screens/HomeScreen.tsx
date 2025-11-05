import { HomeHeader } from "../home/HomeHeader";
import { MapCard } from "../home/MapCard";
import { SOSFloatingButton } from "../home/SOSFloatingButton";
import { BottomNavBar } from "../home/BottomNavBar";

interface HomeScreenProps {
  activeTab: 'track' | 'sos' | 'profile';
  onTabChange: (tab: 'track' | 'sos' | 'profile') => void;
  onSOSPress: () => void;
  onNotificationClick?: () => void;
  onPlanRoute?: () => void;
  notificationCount?: number;
}

export function HomeScreen({ 
  activeTab, 
  onTabChange, 
  onSOSPress, 
  onNotificationClick,
  onPlanRoute,
  notificationCount = 2
}: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-[#FFF6F7] pb-24">
      <HomeHeader 
        userName="Alice" 
        notificationCount={notificationCount} 
        onNotificationClick={onNotificationClick}
      />
      
      <MapCard 
        currentLocation="Dhaka, Bangladesh" 
        onViewMap={onPlanRoute}
      />
      
      <SOSFloatingButton onPress={onSOSPress} />
      
      <BottomNavBar activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
