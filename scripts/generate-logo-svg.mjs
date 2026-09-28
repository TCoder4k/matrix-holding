import fs from 'fs';

// Precise proportions matching the official Matrix Holding emblem from user reference:
// - Flat horizontal beveled top on outer legs (NO elongated sharp wings)
// - Balanced 1:1 aspect ratio
// - Sapphire blue 3D beveled outer M
// - 3 vertical 3D gold pillars nested in the lower opening
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <defs>
    <!-- Sapphire Blue Metallic Gradients -->
    <!-- Left Outer Pillar Front Face -->
    <linearGradient id="blueLeftLeg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#002b70" />
      <stop offset="35%" stop-color="#004099" />
      <stop offset="75%" stop-color="#014fb8" />
      <stop offset="100%" stop-color="#003580" />
    </linearGradient>

    <!-- Right Outer Pillar Front Face (Highlighted) -->
    <linearGradient id="blueRightLeg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#023b8c" />
      <stop offset="45%" stop-color="#095ec4" />
      <stop offset="85%" stop-color="#044199" />
      <stop offset="100%" stop-color="#01245e" />
    </linearGradient>

    <!-- Left Diagonal Chevron Face (Shadow/Depth) -->
    <linearGradient id="blueLeftDiag" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0052b8" />
      <stop offset="45%" stop-color="#003d91" />
      <stop offset="80%" stop-color="#002a6b" />
      <stop offset="100%" stop-color="#001a47" />
    </linearGradient>

    <!-- Right Diagonal Chevron Face (Bright Metallic Specular Sheen) -->
    <linearGradient id="blueRightDiag" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0545a3" />
      <stop offset="35%" stop-color="#1877e8" />
      <stop offset="70%" stop-color="#3b96ff" />
      <stop offset="100%" stop-color="#146cdb" />
    </linearGradient>

    <!-- Top Horizontal Bevels -->
    <linearGradient id="topBevelLeft" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1965c7" />
      <stop offset="50%" stop-color="#4a9cff" />
      <stop offset="100%" stop-color="#1e6dd9" />
    </linearGradient>
    <linearGradient id="topBevelRight" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#267de8" />
      <stop offset="50%" stop-color="#70b3ff" />
      <stop offset="100%" stop-color="#3b96ff" />
    </linearGradient>

    <!-- Inner Chevron Underside Shadow -->
    <linearGradient id="innerBlueShadow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#001842" />
      <stop offset="100%" stop-color="#000e29" />
    </linearGradient>

    <!-- Gold Metallic Gradients -->
    <!-- Gold Light Face (Left slope of pillars) -->
    <linearGradient id="goldLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff1aa" />
      <stop offset="25%" stop-color="#f8ce4e" />
      <stop offset="65%" stop-color="#d69614" />
      <stop offset="100%" stop-color="#ad7004" />
    </linearGradient>

    <!-- Gold Shaded Face (Right slope of pillars) -->
    <linearGradient id="goldShaded" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#de9c16" />
      <stop offset="40%" stop-color="#a86d05" />
      <stop offset="80%" stop-color="#734700" />
      <stop offset="100%" stop-color="#472b00" />
    </linearGradient>

    <!-- Gold Top Slant Bevel Rim -->
    <linearGradient id="goldBevelRim" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fff5bd" />
      <stop offset="50%" stop-color="#f7c545" />
      <stop offset="100%" stop-color="#c98a0c" />
    </linearGradient>

    <!-- Drop Shadow for 3D Depth on dark backgrounds -->
    <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>

  <g filter="url(#softGlow)">
    <!-- ==================== OUTER BLUE M ==================== -->
    <!-- 
      Proportions:
      Left Leg: X from 170 to 300, Top at Y=190 (FLAT), Bottom at Y=780
      Right Leg: X from 700 to 830, Top at Y=190 (FLAT), Bottom at Y=780
      Center V Diagonals: Meet at (500, 480) at top groove, and (500, 620) at bottom point
    -->

    <!-- 1. LEFT VERTICAL LEG -->
    <!-- Top Horizontal Beveled Cap -->
    <polygon points="170,190 205,160 300,160 300,190" fill="url(#topBevelLeft)" />
    <!-- Outer Side Bevel (3D Thickness) -->
    <polygon points="170,190 205,160 205,750 170,780" fill="#00173d" />
    <!-- Front Face of Left Vertical Leg -->
    <polygon points="170,190 300,190 300,780 170,780" fill="url(#blueLeftLeg)" />
    <!-- Bottom Beveled Slant -->
    <polygon points="170,780 300,780 300,805 170,795" fill="#001438" />

    <!-- 2. RIGHT VERTICAL LEG -->
    <!-- Top Horizontal Beveled Cap -->
    <polygon points="700,190 700,160 795,160 830,190" fill="url(#topBevelRight)" />
    <!-- Outer Side Bevel (3D Thickness) -->
    <polygon points="830,190 795,160 795,750 830,780" fill="#011b42" />
    <!-- Front Face of Right Vertical Leg -->
    <polygon points="700,190 830,190 830,780 700,780" fill="url(#blueRightLeg)" />
    <!-- Bottom Beveled Slant -->
    <polygon points="700,780 830,780 830,795 700,805" fill="#00102b" />

    <!-- 3. CENTER V DIAGONALS -->
    <!-- Left Diagonal Face -->
    <polygon points="300,190 500,450 500,610 300,380" fill="url(#blueLeftDiag)" />

    <!-- Right Diagonal Face (Bright Metallic Specular Sheen) -->
    <polygon points="700,190 500,450 500,610 700,380" fill="url(#blueRightDiag)" />

    <!-- Top Ridge Chamfers of the V Notch -->
    <polygon points="300,160 300,190 500,450 500,425" fill="#0d4aa6" />
    <polygon points="700,160 700,190 500,450 500,425" fill="#3d8ff5" />

    <!-- Underside Bevels of the Inner V Notch -->
    <polygon points="300,380 500,610 490,622 292,390" fill="url(#innerBlueShadow)" />
    <polygon points="700,380 500,610 510,622 708,390" fill="#001233" />

    <!-- Center Spine Crease Highlights -->
    <line x1="500" y1="450" x2="500" y2="610" stroke="#75b8ff" stroke-width="3" opacity="0.9" />
    <line x1="700" y1="190" x2="500" y2="450" stroke="#a3d1ff" stroke-width="2" opacity="0.85" />
    <line x1="300" y1="190" x2="500" y2="450" stroke="#4d9eff" stroke-width="1.5" opacity="0.6" />

    <!-- ==================== THREE INNER GOLD PILLARS ==================== -->

    <!-- COLUMN 1: LEFT GOLD PILLAR -->
    <g>
      <!-- Outer Side Shadow -->
      <polygon points="320,410 312,418 312,802 320,808" fill="#4d2f00" />
      <!-- Left Lighter Half -->
      <polygon points="320,410 372,468 372,836 320,808" fill="url(#goldLight)" />
      <!-- Right Darker Half -->
      <polygon points="372,468 424,524 424,862 372,836" fill="url(#goldShaded)" />
      <!-- Top Beveled Slant -->
      <polygon points="320,410 326,400 430,514 424,524" fill="url(#goldBevelRim)" />
      <!-- Bottom Beveled Slant -->
      <polygon points="320,808 424,862 420,872 316,818" fill="#382100" />
      <!-- Center Ridge Specular Highlight -->
      <line x1="372" y1="468" x2="372" y2="836" stroke="#fff5be" stroke-width="1.8" opacity="0.8" />
    </g>

    <!-- COLUMN 2: CENTER GOLD CHEVRON PILLAR -->
    <g>
      <!-- Left Front Face (Bright Golden Glow) -->
      <polygon points="438,540 500,606 500,904 438,870" fill="url(#goldLight)" />
      <!-- Right Front Face (Rich Amber Gold) -->
      <polygon points="500,606 562,540 562,870 500,904" fill="url(#goldShaded)" />
      <!-- Top Notch Rim Left -->
      <polygon points="438,540 446,530 500,592 500,606" fill="url(#goldBevelRim)" />
      <!-- Top Notch Rim Right -->
      <polygon points="500,606 500,592 554,530 562,540" fill="#8c5705" />
      <!-- Bottom Arrowhead Point -->
      <polygon points="438,870 500,904 500,916 434,880" fill="#3b2300" />
      <polygon points="500,904 562,870 566,880 500,916" fill="#291800" />
      <!-- Center Vertical Spine Highlight -->
      <line x1="500" y1="606" x2="500" y2="904" stroke="#fffadb" stroke-width="2.8" opacity="0.95" />
    </g>

    <!-- COLUMN 3: RIGHT GOLD PILLAR -->
    <g>
      <!-- Left Lighter Half -->
      <polygon points="576,524 628,468 628,836 576,862" fill="url(#goldLight)" />
      <!-- Right Darker Half -->
      <polygon points="628,468 680,410 680,808 628,836" fill="url(#goldShaded)" />
      <!-- Outer Side Shadow -->
      <polygon points="680,410 688,418 688,802 680,808" fill="#331f00" />
      <!-- Top Beveled Slant -->
      <polygon points="576,524 570,514 674,400 680,410" fill="url(#goldBevelRim)" />
      <!-- Bottom Beveled Slant -->
      <polygon points="576,862 680,808 684,818 580,872" fill="#2b1a00" />
      <!-- Center Ridge Specular Highlight -->
      <line x1="628" y1="468" x2="628" y2="836" stroke="#fff5be" stroke-width="1.8" opacity="0.8" />
    </g>
  </g>
</svg>`;

fs.writeFileSync('./public/images/logo-matrix-holding.svg', svgContent);
fs.writeFileSync('./public/favicon.svg', svgContent);
console.log('SVG files generated with correct proportions');
