import { Help_Header } from "../help/Help_Header";
import { Help_CardGrid } from "../help/Help_CardGrid";
import { Help_NewBadge } from "../help/Help_NewBadge";
import { CommunityFeedCard } from "../help/CommunityFeedCard";
import { BottomNavBar } from "../home/BottomNavBar";
import { toast } from "sonner@2.0.3";

interface HelpCommunityScreenProps {
  activeTab: 'track' | 'sos' | 'profile';
  onTabChange: (tab: 'track' | 'sos' | 'profile') => void;
}

export function HelpCommunityScreen({ activeTab, onTabChange }: HelpCommunityScreenProps) {
  const handleCardClick = (cardType: string) => {
    toast.success(`Accessing ${cardType} feature...`);
  };

  const communityFeed = [
    {
      id: '1',
      type: 'help-request' as const,
      message: 'User in Banani requested company for walk home.',
      location: 'Banani',
      time: '5 mins ago'
    },
    {
      id: '2',
      type: 'incident' as const,
      message: 'Incident reported near Dhanmondi Lake.',
      location: 'Dhanmondi',
      time: '12 mins ago'
    },
    {
      id: '3',
      type: 'help-request' as const,
      message: 'Looking for someone to share a ride with.',
      location: 'Gulshan',
      time: '20 mins ago'
    }
  ];

  const handleOfferHelp = (id: string) => {
    toast.success('Your offer has been sent to the requester!');
  };

  return (
    <div className="min-h-screen bg-[#FFF6F7] pb-24">
      <Help_Header />
      <Help_NewBadge count={3} />
      
      <div className="mt-6">
        <Help_CardGrid onCardClick={handleCardClick} />
      </div>

      <div className="mt-8 px-4">
        <CommunityFeedCard items={communityFeed} onOfferHelp={handleOfferHelp} />
      </div>

      <BottomNavBar activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
