interface BeeProps {
  className?: string;
  size?: number;
}

const Bee = ({ className = "", size = 40 }: BeeProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`animate-bee ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wings */}
      <ellipse cx="22" cy="24" rx="10" ry="6" fill="hsl(200 30% 90%)" fillOpacity="0.7" />
      <ellipse cx="42" cy="24" rx="10" ry="6" fill="hsl(200 30% 90%)" fillOpacity="0.7" />
      
      {/* Body */}
      <ellipse cx="32" cy="36" rx="14" ry="10" fill="hsl(45 100% 50%)" />
      
      {/* Stripes */}
      <rect x="24" y="30" width="16" height="3" rx="1.5" fill="hsl(30 30% 15%)" />
      <rect x="24" y="36" width="16" height="3" rx="1.5" fill="hsl(30 30% 15%)" />
      <rect x="24" y="42" width="16" height="3" rx="1.5" fill="hsl(30 30% 15%)" />
      
      {/* Head */}
      <circle cx="32" cy="22" r="8" fill="hsl(30 30% 20%)" />
      
      {/* Eyes */}
      <circle cx="28" cy="20" r="2" fill="hsl(0 0% 100%)" />
      <circle cx="36" cy="20" r="2" fill="hsl(0 0% 100%)" />
      
      {/* Antennae */}
      <path d="M28 14 Q26 8 22 6" stroke="hsl(30 30% 20%)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M36 14 Q38 8 42 6" stroke="hsl(30 30% 20%)" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* Stinger */}
      <path d="M32 46 L32 50" stroke="hsl(30 30% 20%)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default Bee;
