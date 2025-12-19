interface HoneycombCellProps {
  className?: string;
  filled?: boolean;
  delay?: number;
}

const HoneycombCell = ({ className = "", filled = false, delay = 0 }: HoneycombCellProps) => (
  <div
    className={`relative ${className}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <svg viewBox="0 0 100 115" className="w-full h-full">
      <defs>
        <linearGradient id={`honeycombGrad-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(40 95% 65%)" />
          <stop offset="50%" stopColor="hsl(38 90% 55%)" />
          <stop offset="100%" stopColor="hsl(35 85% 45%)" />
        </linearGradient>
        <filter id={`glow-${delay}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <polygon
        points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
        fill={filled ? `url(#honeycombGrad-${delay})` : "hsl(45 80% 92%)"}
        stroke="hsl(40 60% 50%)"
        strokeWidth="2"
        className="transition-all duration-500 hover:fill-[hsl(40_95%_60%)]"
        filter={filled ? `url(#glow-${delay})` : ""}
      />
      {/* Inner highlight for 3D effect */}
      {filled && (
        <polygon
          points="50,15 80,32 80,68 50,85 20,68 20,32"
          fill="none"
          stroke="hsl(45 100% 75%)"
          strokeWidth="1"
          opacity="0.6"
        />
      )}
    </svg>
  </div>
);

const HoneycombGrid = () => {
  const rows = [
    [true, false, true, true, false, true, false],
    [false, true, false, true, true, false, true],
    [true, true, true, false, true, true, false],
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex justify-center gap-1 ${rowIndex % 2 === 1 ? "ml-8" : ""}`}
          style={{ marginTop: rowIndex > 0 ? "-28px" : "0" }}
        >
          {row.map((filled, cellIndex) => (
            <HoneycombCell
              key={cellIndex}
              filled={filled}
              delay={(rowIndex * 100) + (cellIndex * 50)}
              className="w-16 h-[72px] md:w-20 md:h-[90px] lg:w-24 lg:h-[108px] animate-pulse-slow"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HoneycombGrid;
