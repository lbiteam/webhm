const HoneyDrip = ({ position = "top" }: { position?: "top" | "bottom" }) => {
  const isTop = position === "top";
  
  return (
    <div className={`absolute left-0 right-0 ${isTop ? 'top-0' : 'bottom-0'} overflow-hidden pointer-events-none z-10`}>
      <svg
        viewBox="0 0 1440 120"
        className={`w-full h-auto ${isTop ? '' : 'rotate-180'}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="honeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(40 95% 60%)" />
            <stop offset="100%" stopColor="hsl(35 90% 45%)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#honeyGradient)"
          d="M0,0 L1440,0 L1440,40 
             Q1400,40 1380,60 Q1360,100 1340,60 Q1320,40 1280,40
             Q1240,40 1220,70 Q1200,120 1180,70 Q1160,40 1120,40
             Q1080,40 1060,50 Q1040,80 1020,50 Q1000,40 960,40
             Q920,40 900,65 Q880,110 860,65 Q840,40 800,40
             Q760,40 740,55 Q720,90 700,55 Q680,40 640,40
             Q600,40 580,70 Q560,120 540,70 Q520,40 480,40
             Q440,40 420,50 Q400,80 380,50 Q360,40 320,40
             Q280,40 260,60 Q240,100 220,60 Q200,40 160,40
             Q120,40 100,55 Q80,90 60,55 Q40,40 0,40 Z"
        />
        {/* Drip drops */}
        <ellipse cx="1200" cy="95" rx="8" ry="12" fill="url(#honeyGradient)" className="animate-drip" />
        <ellipse cx="560" cy="100" rx="6" ry="10" fill="url(#honeyGradient)" className="animate-drip" style={{ animationDelay: '1s' }} />
        <ellipse cx="240" cy="90" rx="7" ry="11" fill="url(#honeyGradient)" className="animate-drip" style={{ animationDelay: '2s' }} />
        <ellipse cx="880" cy="92" rx="5" ry="9" fill="url(#honeyGradient)" className="animate-drip" style={{ animationDelay: '1.5s' }} />
      </svg>
    </div>
  );
};

export default HoneyDrip;
