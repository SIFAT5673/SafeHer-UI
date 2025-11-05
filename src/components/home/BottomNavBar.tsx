// import { MapPin, AlertCircle, User } from "lucide-react";

// interface BottomNavBarProps {
//   activeTab: 'track' | 'sos' | 'profile';
//   onTabChange: (tab: 'track' | 'sos' | 'profile') => void;
// }

// export function BottomNavBar({ activeTab, onTabChange }: BottomNavBarProps) {
//   const tabs = [
//     { id: 'track' as const, icon: MapPin, label: 'Track Me' },
//     { id: 'sos' as const, icon: AlertCircle, label: 'SOS' },
//     { id: 'profile' as const, icon: User, label: 'Profile' },
//   ];

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-6 py-4">
//       <div className="flex items-end justify-around">
//         {tabs.map((tab) => {
//           const Icon = tab.icon;
//           const isActive = activeTab === tab.id;
//           const isSOS = tab.id === 'sos';

//           return (
//             <button
//               key={tab.id}
//               onClick={() => onTabChange(tab.id)}
//               className="flex flex-col items-center gap-1 transition-all"
//             >
//               <div className={`
//                 flex items-center justify-center rounded-full transition-all
//                 ${isSOS ? 'h-16 w-16 gradient-primary shadow-lg -mt-8' : 'h-10 w-10'}
//                 ${isActive && !isSOS ? 'bg-[#FFE5EE]' : ''}
//               `}>
//                 <Icon
//                   className={`
//                     ${isSOS ? 'h-8 w-8 text-white' : 'h-5 w-5'}
//                     ${isActive && !isSOS ? 'text-[#FF5E78]' : ''}
//                     ${!isActive && !isSOS ? 'text-[#9B9B9B]' : ''}
//                   `}
//                 />
//               </div>
//               {!isSOS && (
//                 <span className={`text-xs ${isActive ? 'text-[#FF5E78]' : 'text-[#9B9B9B]'}`}>
//                   {tab.label}
//                 </span>
//               )}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import {
  MapPin,
  Clipboard,
  Phone,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

interface BottomNavBarProps {
  activeTab: 'track' | 'record' | 'sos' | 'fakeCall' | 'help';
  onTabChange: (tab: 'track' | 'record' | 'sos' | 'fakeCall' | 'help') => void;
}

export function BottomNavBar({ activeTab, onTabChange }: BottomNavBarProps) {
  const tabs = [
    { id: 'track' as const, icon: MapPin, label: 'Track Me' },
    { id: 'record' as const, icon: Clipboard, label: 'Record' },
    { id: 'sos' as const, icon: AlertCircle, label: 'SOS' },
    { id: 'fakeCall' as const, icon: Phone, label: 'Fake Call' },
    { id: 'help' as const, icon: HelpCircle, label: 'Help' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-6 py-4">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const isSOS = tab.id === 'sos';

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 transition-all"
            >
              <div
                className={`
                flex items-center justify-center rounded-full transition-all
                ${isSOS ? 'h-16 w-16 bg-[#FF5E78] shadow-lg' : 'h-12 w-12'}
                ${isActive && !isSOS ? 'bg-[#FFE5EE] shadow-lg' : ''}
              `}
              >
                <Icon
                  className={`
                    ${isSOS ? 'h-8 w-8 text-white' : 'h-6 w-6'}
                    ${isActive && !isSOS ? 'text-[#FF5E78]' : ''}
                    ${!isActive && !isSOS ? 'text-[#9B9B9B]' : ''}
                  `}
                />
              </div>
              <span
                className={`text-xs ${
                  isActive && !isSOS ? 'text-[#FF5E78]' : 'text-[#9B9B9B]'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
