const WaveAnimation = () => {
  return (
    <div className="relative h-24 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(156, 163, 175, 0.3)" />
            <stop offset="50%" stopColor="rgba(156, 163, 175, 0.5)" />
            <stop offset="100%" stopColor="rgba(156, 163, 175, 0.3)" />
          </linearGradient>
        </defs>

        <path
          className="wave-path"
          fill="url(#waveGradient)"
          d="M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z"
        >
          <animate
            attributeName="d"
            dur="7s"
            repeatCount="indefinite"
            values="
              M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z;
              M0,50 Q360,80 720,50 T1440,50 L1440,100 L0,100 Z;
              M0,50 Q360,50 720,80 T1440,50 L1440,100 L0,100 Z;
              M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z
            "
          />
        </path>

        {/* Second wave for depth */}
        <path
          className="wave-path"
          fill="rgba(156, 163, 175, 0.2)"
          d="M0,60 Q360,30 720,60 T1440,60 L1440,100 L0,100 Z"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
              M0,60 Q360,30 720,60 T1440,60 L1440,100 L0,100 Z;
              M0,60 Q360,90 720,60 T1440,60 L1440,100 L0,100 Z;
              M0,60 Q360,60 720,30 T1440,60 L1440,100 L0,100 Z;
              M0,60 Q360,30 720,60 T1440,60 L1440,100 L0,100 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveAnimation;
