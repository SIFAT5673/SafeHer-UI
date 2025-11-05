import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";

interface FeedItem {
  id: string;
  type: 'help-request' | 'incident';
  message: string;
  location: string;
  time: string;
}

interface CommunityFeedCardProps {
  items: FeedItem[];
  onOfferHelp?: (id: string) => void;
}

export function CommunityFeedCard({ items, onOfferHelp }: CommunityFeedCardProps) {
  return (
    <div className="bg-white rounded-[12px] p-6 shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
      <h3 className="text-lg mb-4 text-[#3B3B3B]">Community Feed</h3>
      
      <div className="space-y-3 mb-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-[12px] bg-[#FFF6F7] border border-[#FFE5EE]"
          >
            <p className="text-sm text-[#3B3B3B] mb-2">{item.message}</p>
            <div className="flex items-center gap-4 text-xs text-[#9B9B9B]">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{item.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onOfferHelp?.(items[0]?.id)}
        className="w-full bg-gradient-primary text-white py-3 rounded-[24px] shadow-lg animate-pulse hover:shadow-xl transition-shadow"
      >
        Offer Help
      </motion.button>
    </div>
  );
}
