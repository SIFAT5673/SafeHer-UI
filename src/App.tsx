import { useState } from "react";
import { PhoneVerificationScreen } from "./components/screens/PhoneVerificationScreen";
import { OTPScreen } from "./components/screens/OTPScreen";
import { ProfileSetupScreen } from "./components/screens/ProfileSetupScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import { SOSScreen } from "./components/screens/SOSScreen";
import { SafetyConfirmationScreen } from "./components/screens/SafetyConfirmationScreen";
import { HelpCommunityScreen } from "./components/screens/HelpCommunityScreen";
import { ProfileScreen } from "./components/screens/ProfileScreen";
import { SafeRouteScreen } from "./components/screens/SafeRouteScreen";
import { NotificationDropdown } from "./components/notifications/NotificationDropdown";
import { Toaster } from "./components/ui/sonner";

type Screen = 
  | 'phone-verification'
  | 'otp'
  | 'profile-setup'
  | 'home'
  | 'sos'
  | 'safety-confirmation'
  | 'help'
  | 'profile'
  | 'safe-route';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('phone-verification');
  const [activeTab, setActiveTab] = useState<'track' | 'sos' | 'profile'>('track');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'sos' as const,
      message: 'SOS Alert received from Ayesha',
      timestamp: '2 mins ago',
      read: false
    },
    {
      id: '2',
      type: 'community' as const,
      message: 'New Community Request near Gulshan',
      timestamp: '5 mins ago',
      read: false
    },
    {
      id: '3',
      type: 'system' as const,
      message: 'Your safe route is active.',
      timestamp: '10 mins ago',
      read: true
    }
  ]);

  const handleCodeSent = () => {
    setCurrentScreen('otp');
  };

  const handleOTPVerified = () => {
    setCurrentScreen('profile-setup');
  };

  const handleProfileComplete = () => {
    setCurrentScreen('home');
  };

  const handleSOSPress = () => {
    setCurrentScreen('sos');
  };

  const handleSOSCancel = () => {
    setCurrentScreen('home');
  };

  const handleSOSActivate = () => {
    setTimeout(() => {
      setCurrentScreen('safety-confirmation');
    }, 2000);
  };

  const handleSafetyContinue = () => {
    setCurrentScreen('home');
  };

  const handleTabChange = (tab: 'track' | 'sos' | 'profile') => {
    setActiveTab(tab);
    
    if (tab === 'track') {
      setCurrentScreen('home');
    } else if (tab === 'sos') {
      setCurrentScreen('help');
    } else if (tab === 'profile') {
      setCurrentScreen('profile');
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleDismissNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handlePlanRoute = () => {
    setCurrentScreen('safe-route');
  };

  const handleBackFromRoute = () => {
    setCurrentScreen('home');
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <div className="max-w-[430px] mx-auto shadow-2xl min-h-screen bg-white relative">
        {currentScreen === 'phone-verification' && (
          <PhoneVerificationScreen onCodeSent={handleCodeSent} />
        )}
        
        {currentScreen === 'otp' && (
          <OTPScreen onVerified={handleOTPVerified} />
        )}
        
        {currentScreen === 'profile-setup' && (
          <ProfileSetupScreen onComplete={handleProfileComplete} />
        )}
        
        {currentScreen === 'home' && (
          <>
            <HomeScreen 
              activeTab={activeTab}
              onTabChange={handleTabChange}
              onSOSPress={handleSOSPress}
              onNotificationClick={handleNotificationClick}
              onPlanRoute={handlePlanRoute}
              notificationCount={unreadCount}
            />
            <NotificationDropdown
              isOpen={showNotifications}
              notifications={notifications}
              onClose={() => setShowNotifications(false)}
              onMarkAllRead={handleMarkAllRead}
              onDismiss={handleDismissNotification}
            />
          </>
        )}
        
        {currentScreen === 'safe-route' && (
          <SafeRouteScreen onBack={handleBackFromRoute} />
        )}
        
        {currentScreen === 'sos' && (
          <SOSScreen 
            onCancel={handleSOSCancel}
            onActivate={handleSOSActivate}
          />
        )}
        
        {currentScreen === 'safety-confirmation' && (
          <SafetyConfirmationScreen onContinue={handleSafetyContinue} />
        )}
        
        {currentScreen === 'help' && (
          <HelpCommunityScreen 
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        )}
        
        {currentScreen === 'profile' && (
          <ProfileScreen 
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        )}
      </div>
      <Toaster />
    </>
  );
}

export default App;
