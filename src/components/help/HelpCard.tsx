import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { Badge } from "../ui/badge";

interface HelpCardProps {
  title: string;
  icon: LucideIcon;
  bgColor: string;
  badge?: number;
  onClick?: () => void;
}

export function HelpCard({ title, icon: Icon, bgColor, badge, onClick }: HelpCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative rounded-[12px] p-6 flex flex-col items-center justify-center gap-3 shadow-[0_4px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-all min-h-[140px]"
      style={{ backgroundColor: bgColor }}
    >
      {badge && badge > 0 && (
        <Badge className="absolute top-2 right-2 bg-[#FF5E78] text-white">
          {badge}
        </Badge>
      )}
      <div className="h-12 w-12 rounded-full bg-white/50 flex items-center justify-center">
        <Icon className="h-6 w-6 text-[#FF5E78]" />
      </div>
      <span className="text-center text-[#3B3B3B] text-sm">{title}</span>
    </motion.button>
  );
}
