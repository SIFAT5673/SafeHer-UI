interface Help_NewBadgeProps {
  count: number;
}

export function Help_NewBadge({ count }: Help_NewBadgeProps) {
  if (count === 0) return null;
  
  return (
    <div className="fixed top-24 right-4 z-50 bg-[#FF5E78] text-white px-4 py-2 rounded-full shadow-lg animate-bounce-subtle">
      <span className="text-sm">{count} New Request{count > 1 ? 's' : ''}</span>
    </div>
  );
}
