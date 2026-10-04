import React from 'react';

export const WaveGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 700 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover transform scale-110 translate-x-4 translate-y-4"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Wave gradients matching Matrix Holding cyan-azure visual identity */}
          <linearGradient id="wave-grad-1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0077b6" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#00a8e8" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="wave-grad-2" x1="10%" y1="100%" x2="90%" y2="10%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
            <stop offset="35%" stopColor="#0ea5e9" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="wave-grad-3" x1="20%" y1="80%" x2="100%" y2="20%">
            <stop offset="0%" stopColor="#0369a1" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.5" />
            <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="wave-grad-glow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="wave-grad-soft" x1="0%" y1="100%" x2="80%" y2="0%">
            <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.15" />
            <stop offset="60%" stopColor="#90e0ef" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.1" />
          </linearGradient>

          <filter id="soft-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Ambient atmospheric glow */}
        <ellipse
          cx="480"
          cy="320"
          rx="220"
          ry="150"
          fill="#38bdf8"
          opacity="0.18"
          filter="url(#soft-blur)"
        />

        {/* Deep background broad wave ribbon */}
        <path
          d="M 50 480 C 180 430, 240 330, 360 270 C 460 220, 540 180, 680 80 L 700 500 L 50 500 Z"
          fill="url(#wave-grad-soft)"
        />

        {/* Middle translucent ribbon 1 */}
        <path
          d="M 80 500 C 160 410, 260 340, 370 290 C 480 240, 560 170, 690 90 C 670 160, 580 270, 480 340 C 370 410, 240 460, 110 500 Z"
          fill="url(#wave-grad-2)"
        />

        {/* Main prominent glowing ribbon curve */}
        <path
          d="M 120 500 C 220 400, 310 320, 410 260 C 510 200, 580 130, 680 60 C 640 120, 560 210, 460 280 C 350 360, 240 430, 140 500 Z"
          fill="url(#wave-grad-1)"
        />

        {/* Accent high-reflection wave filament */}
        <path
          d="M 170 500 C 260 410, 340 330, 440 270 C 520 220, 580 150, 660 70"
          stroke="url(#wave-grad-3)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Delicate crest lines that create the fluid 3D stream look */}
        <path
          d="M 140 490 C 240 390, 330 310, 430 250 C 520 190, 590 120, 680 50"
          stroke="#ffffff"
          strokeWidth="2.5"
          opacity="0.75"
        />
        <path
          d="M 190 495 C 280 405, 360 330, 450 275 C 530 220, 600 160, 670 100"
          stroke="#bae6fd"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M 230 500 C 310 420, 390 350, 470 295 C 540 245, 605 190, 660 140"
          stroke="#7dd3fc"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Foreground curved flowing crest in lower right */}
        <path
          d="M 190 500 C 280 440, 360 380, 450 330 C 540 280, 610 230, 700 170 L 700 500 L 220 500 Z"
          fill="url(#wave-grad-2)"
          opacity="0.65"
        />

        {/* Lowest soft ribbon */}
        <path
          d="M 280 500 C 360 450, 440 400, 520 360 C 600 320, 660 280, 700 240 L 700 500 Z"
          fill="url(#wave-grad-1)"
          opacity="0.5"
        />

        {/* Subtle luminous highlights */}
        <path
          d="M 260 480 C 350 420, 430 365, 510 325 C 585 285, 645 240, 695 190"
          stroke="#e0f2fe"
          strokeWidth="2"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};
