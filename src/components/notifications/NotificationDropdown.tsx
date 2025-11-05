import { motion, AnimatePresence } from "motion/react";
import { X, AlertCircle, Users, CheckCircle } from "lucide-react";

interface Notification {
  id: string;
  type: 'sos' | 'community' | 'system';
  message: string;
  timestamp: string;
  read: boolean;
}

interface NotificationDropdownProps {
  isOpen: boolean;
  notifications: Notification[];
  onClose: () => void;
  onMarkAllRead: () => void;
  onDismiss: (id: string) => void;
}

export function NotificationDropdown({ 
  isOpen, 
  notifications, 
  onClose, 
  onMarkAllRead,
  onDismiss 
}: NotificationDropdownProps) {
  const getNotificationStyle = (type: string) => {
    switch (type) {
      case 'sos':
        return { bg: '#FFF0F0', color: '#FF5252', icon: AlertCircle };
      case 'community':
        return { bg: '#FFF6F7', color: '#FF5E78', icon: Users };
      case 'system':
        return { bg: '#F0FFF4', color: '#4CAF50', icon: CheckCircle };
      default:
        return { bg: '#F5F5F5', color: '#9B9B9B', icon: CheckCircle };
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 top-16 w-80 bg-white rounded-[16px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-[#FFE5EE] flex items-center justify-between">
              <h3 className="text-lg text-[#3B3B3B]">Notifications</h3>
              <button
                onClick={onMarkAllRead}
                className="text-sm text-[#FF5E78] hover:underline"
              >
                Mark all read
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-[#9B9B9B]">
                  <p>No notifications</p>
                </div>
              ) : (
                notifications.map((notification) => {
                  const style = getNotificationStyle(notification.type);
                  const Icon = style.icon;
                  
                  return (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`p-4 border-b border-[#FFE5EE] last:border-b-0 hover:bg-[#FFF6F7] transition-colors ${
                        !notification.read ? 'bg-[#FFF6F7]/50' : ''
                      }`}
                    >
                      <div className="flex gap-3">
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: style.bg }}
                        >
                          <Icon className="h-5 w-5" style={{ color: style.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-[#3B3B3B] mb-1">{notification.message}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[#9B9B9B]">{notification.timestamp}</span>
                            <span
                              className="text-xs px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: style.bg, color: style.color }}
                            >
                              {notification.type}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => onDismiss(notification.id)}
                          className="p-1 hover:bg-[#FFE5EE] rounded-full transition-colors"
                        >
                          <X className="h-4 w-4 text-[#9B9B9B]" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
