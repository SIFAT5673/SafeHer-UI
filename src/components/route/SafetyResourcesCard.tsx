import { Shield, Hospital, MapPin } from "lucide-react";

interface SafetyResourcesCardProps {
  policeStations: number;
  hospitals: number;
  safeZones: number;
}

export function SafetyResourcesCard({ 
  policeStations, 
  hospitals, 
  safeZones 
}: SafetyResourcesCardProps) {
  const resources = [
    { icon: Shield, label: 'Police Stations', count: policeStations, color: '#4CAF50' },
    { icon: Hospital, label: 'Hospitals', count: hospitals, color: '#FF5E78' },
    { icon: MapPin, label: 'Safe Zones', count: safeZones, color: '#9B7EDE' }
  ];

  return (
    <div className="bg-white rounded-[16px] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
      <p className="text-sm text-[#9B9B9B] mb-3">Nearby Safety Resources</p>
      <div className="grid grid-cols-3 gap-3">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div key={index} className="text-center">
              <div
                className="h-12 w-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${resource.color}15` }}
              >
                <Icon className="h-5 w-5" style={{ color: resource.color }} />
              </div>
              <p className="text-xl text-[#3B3B3B] mb-0.5">{resource.count}</p>
              <p className="text-xs text-[#9B9B9B]">{resource.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
