interface TechBadgeProps {
  iconSrc: string;
  label: string;
  type?: 'language' | 'framework' | 'library' | 'tool' | 'database';
}

const typeColorMap: Record<string, string> = {
  language: '#f97316', 
  framework: '#22c55e', 
  library: '#3b82f6',   
  tool: '#9ca3af',  
  database: '#f59e0b',    
};

export default function TechBadge({ iconSrc, label, type }: TechBadgeProps) {
  const dotColor = type ? typeColorMap[type] : undefined;

  return (
    <span className="relative inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 font-semibold align-middle text-xs border-gray-300">
      {dotColor && (
        <span
          className="absolute -top-1 -right-1 h-2 w-2 rounded-full"
          style={{ backgroundColor: dotColor }}
        />
      )}
      <img src={iconSrc} alt={`${label} icon`} className="w-4 h-4" />
      {label}
    </span>
  );
}
