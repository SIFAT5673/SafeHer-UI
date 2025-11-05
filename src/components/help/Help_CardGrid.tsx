import { UserX, Users, FileText, Phone } from "lucide-react";
import { HelpCard } from "./HelpCard";

interface Help_CardGridProps {
  onCardClick?: (cardType: string) => void;
}

export function Help_CardGrid({ onCardClick }: Help_CardGridProps) {
  const cards = [
    {
      id: 'anonymous',
      title: 'Connect Anonymously',
      icon: UserX,
      bgColor: '#FFE5EE',
      badge: 0,
    },
    {
      id: 'community',
      title: 'Open Help from Community',
      icon: Users,
      bgColor: '#FCE9F1',
      badge: 5,
    },
    {
      id: 'record',
      title: 'Record Incidents',
      icon: FileText,
      bgColor: '#F7E8E5',
      badge: 0,
    },
    {
      id: 'fake-call',
      title: 'Trigger Fake Call',
      icon: Phone,
      bgColor: '#FFF0F2',
      badge: 0,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 px-4">
      {cards.map((card) => (
        <HelpCard
          key={card.id}
          title={card.title}
          icon={card.icon}
          bgColor={card.bgColor}
          badge={card.badge}
          onClick={() => onCardClick?.(card.id)}
        />
      ))}
    </div>
  );
}
