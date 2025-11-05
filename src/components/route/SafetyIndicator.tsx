import { Shield, AlertTriangle, AlertCircle } from "lucide-react";

interface SafetyIndicatorProps {
  level: 'safe' | 'moderate' | 'risky';
}

export function SafetyIndicator({ level }: SafetyIndicatorProps) {
  const config = {
    safe: {
      color: '#4CAF50',
      bg: '#F0FFF4',
      label: 'Safe Route',
      icon: Shield,
      description: 'Well-lit areas with active community presence'
    },
    moderate: {
      color: '#FFA726',
      bg: '#FFF8E1',
      label: 'Moderate Risk',
      icon: AlertTriangle,
      description: 'Some areas may require extra caution'
    },
    risky: {
      color: '#FF5252',
      bg: '#FFF0F0',
      label: 'High Risk',
      icon: AlertCircle,
      description: 'Consider alternative routes or travel with company'
    }
  };

  const { color, bg, label, icon: Icon, description } = config[level];

  return (
    <div className="mb-6">
      <div
        className="rounded-[16px] p-4 border-2 transition-all"
        style={{ backgroundColor: bg, borderColor: color }}
      >
        <div className="flex items-center gap-3 mb-2">
          <Icon className="h-5 w-5" style={{ color }} />
          <span className="text-[#3B3B3B]">{label}</span>
        </div>
        <p className="text-sm text-[#9B9B9B]">{description}</p>
        
        <div className="mt-3 h-2 bg-white/50 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ 
              backgroundColor: color,
              width: level === 'safe' ? '90%' : level === 'moderate' ? '60%' : '30%'
            }}
          />
        </div>
      </div>
    </div>
  );
}
