const BigHoneyDrip = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 300"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bigHoneyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(42 95% 60%)" />
            <stop offset="30%" stopColor="hsl(40 95% 55%)" />
            <stop offset="70%" stopColor="hsl(38 90% 50%)" />
            <stop offset="100%" stopColor="hsl(35 85% 40%)" />
          </linearGradient>
          <linearGradient id="honeyHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45 100% 75%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(40 95% 55%)" stopOpacity="0" />
          </linearGradient>
          <filter id="honeyGlow">
            <feGaussianBlur stdDeviation="4" result="glow"/>
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main honey drip shape */}
        <path
          fill="url(#bigHoneyGradient)"
          filter="url(#honeyGlow)"
          d="M0,0 L1440,0 L1440,80 
             Q1380,80 1360,120 Q1340,180 1320,240 Q1300,300 1280,240 Q1260,160 1220,80
             Q1180,80 1160,100 Q1140,140 1120,200 Q1100,280 1080,200 Q1060,120 1020,80
             Q980,80 960,110 Q940,160 920,220 Q900,300 880,220 Q860,140 820,80
             Q780,80 760,95 Q740,130 720,180 Q700,250 680,180 Q660,110 620,80
             Q580,80 560,130 Q540,200 520,280 Q500,300 480,280 Q460,200 440,130 Q420,80 380,80
             Q340,80 320,100 Q300,150 280,210 Q260,290 240,210 Q220,130 180,80
             Q140,80 120,110 Q100,160 80,220 Q60,300 40,220 Q20,120 0,80 Z"
        />

        {/* Highlight overlay for 3D effect */}
        <path
          fill="url(#honeyHighlight)"
          d="M0,0 L1440,0 L1440,60 
             Q1380,60 1360,90 Q1340,130 1320,170 Q1300,200 1280,170 Q1260,120 1220,60
             Q1180,60 1160,75 Q1140,100 1120,140 Q1100,180 1080,140 Q1060,90 1020,60
             Q980,60 960,80 Q940,110 920,150 Q900,190 880,150 Q860,100 820,60
             Q780,60 760,72 Q740,95 720,130 Q700,165 680,130 Q660,85 620,60
             Q580,60 560,95 Q540,140 520,180 Q500,195 480,180 Q460,140 440,95 Q420,60 380,60
             Q340,60 320,75 Q300,105 280,145 Q260,185 240,145 Q220,95 180,60
             Q140,60 120,80 Q100,115 80,155 Q60,195 40,155 Q20,90 0,60 Z"
        />

        {/* Drip drops with animation */}
        <ellipse cx="520" cy="290" rx="12" ry="18" fill="url(#bigHoneyGradient)" className="animate-drip-big" />
        <ellipse cx="900" cy="295" rx="10" ry="15" fill="url(#bigHoneyGradient)" className="animate-drip-big" style={{ animationDelay: '1.5s' }} />
        <ellipse cx="280" cy="285" rx="11" ry="16" fill="url(#bigHoneyGradient)" className="animate-drip-big" style={{ animationDelay: '2.5s' }} />
        <ellipse cx="1100" cy="280" rx="9" ry="14" fill="url(#bigHoneyGradient)" className="animate-drip-big" style={{ animationDelay: '0.8s' }} />
        <ellipse cx="680" cy="250" rx="8" ry="12" fill="url(#bigHoneyGradient)" className="animate-drip-big" style={{ animationDelay: '3s' }} />
        <ellipse cx="60" cy="290" rx="10" ry="16" fill="url(#bigHoneyGradient)" className="animate-drip-big" style={{ animationDelay: '1.2s' }} />
        <ellipse cx="1300" cy="285" rx="11" ry="17" fill="url(#bigHoneyGradient)" className="animate-drip-big" style={{ animationDelay: '2s' }} />

        {/* Bubble highlights */}
        <circle cx="200" cy="120" r="6" fill="hsl(45 100% 85%)" opacity="0.4" />
        <circle cx="450" cy="150" r="4" fill="hsl(45 100% 85%)" opacity="0.3" />
        <circle cx="700" cy="100" r="5" fill="hsl(45 100% 85%)" opacity="0.35" />
        <circle cx="950" cy="130" r="4" fill="hsl(45 100% 85%)" opacity="0.4" />
        <circle cx="1200" cy="110" r="5" fill="hsl(45 100% 85%)" opacity="0.3" />
      </svg>
    </div>
  );
};

export default BigHoneyDrip;
