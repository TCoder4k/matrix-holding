import { useEffect, useRef, useState } from "react";
import {
  Network,
  Link2,
  TrendingUp,
  GraduationCap,
} from "lucide-react";
import matrixLogo from "../../assets/logo-matrix-holding.svg";

const units = [
  { id: "network", name: "Matrix Network", Icon: Network },
  { id: "connect", name: "Matrix Connect", Icon: Link2 },
  { id: "academy", name: "Matrix Academy", Icon: GraduationCap },
  { id: "ventures", name: "Matrix Ventures", Icon: TrendingUp },
];

const CX = 400;
const CY = 250;
const RX = 250;
const RY = 150;
const NODE_RADIUS = 54;
const HUB_RADIUS = 70;
const TAU = Math.PI * 2;

type Props = {
  selectedId?: string;
  onSelect?: (id: string) => void;
};

export default function EcosystemOrbit({ selectedId = "connect", onSelect }: Props) {
  const [time, setTime] = useState(0);
  const [selected, setSelected] = useState(selectedId);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(selectedId);
  }, [selectedId]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let frame = 0;
    let previous = 0;
    let elapsed = 0;
    let visible = true;

    const tick = (now: number) => {
      const delta = previous ? Math.min(now - previous, 50) : 0;
      previous = now;

      if (
        visible &&
        !document.hidden &&
        !paused &&
        !reducedMotion
      ) {
        elapsed += delta / 1000;
        setTime(elapsed);
      }

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      previous = 0;
    });

    observer.observe(host);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [paused, reducedMotion]);

  const selectUnit = (id: string) => {
    setSelected(id);
    onSelect?.(id);
  };

  return (
    <div ref={hostRef} className="ecosystem-orbit">
      <svg
        viewBox="0 0 800 500"
        role="group"
        aria-label="Hệ sinh thái Matrix Holding"
      >
        {/* Quỹ đạo */}
        <ellipse
          cx={CX}
          cy={CY}
          rx={RX}
          ry={RY}
          fill="none"
          stroke="#DCE6EF"
          strokeWidth="1.5"
        />

        {/* Đường nối và hạt nằm phía sau các node */}
        {units.map((unit, index) => {
          // Một vòng trong 40 giây.
          const angle = -Math.PI * 0.75 + index * TAU / 4
            + time * TAU / 40;

          const x = CX + RX * Math.cos(angle);
          const y = CY + RY * Math.sin(angle);
          const dx = x - CX;
          const dy = y - CY;
          const length = Math.hypot(dx, dy);
          const ux = dx / length;
          const uy = dy / length;

          // Đường bắt đầu ở mép tâm và dừng ở mép node.
          const startX = CX + ux * HUB_RADIUS;
          const startY = CY + uy * HUB_RADIUS;
          const endX = x - ux * NODE_RADIUS;
          const endY = y - uy * NODE_RADIUS;

          const active = selected === unit.id;

          return (
            <g key={unit.id}>
              <line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={active ? "#00BFEA" : "#9DE7F7"}
                strokeWidth={active ? 2 : 1.2}
              />

              {!reducedMotion &&
                [0, 1, 2].map((particle) => {
                  // Ba hạt mỗi nhánh, chạy liên tục từ tâm ra.
                  const progress =
                    (time / 2.8 + particle / 3 + index * 0.12) % 1;

                  const px = startX + (endX - startX) * progress;
                  const py = startY + (endY - startY) * progress;

                  // Mờ ở hai đầu để không bị "nhảy" khi lặp.
                  const opacity = Math.min(
                    1,
                    progress * 8,
                    (1 - progress) * 8
                  );

                  return (
                    <g key={particle} opacity={opacity}>
                      <circle
                        cx={px}
                        cy={py}
                        r="7"
                        fill="#00C8F4"
                        opacity="0.12"
                      />
                      <circle
                        cx={px}
                        cy={py}
                        r="2.8"
                        fill="#00BFEA"
                      />
                    </g>
                  );
                })}
            </g>
          );
        })}

        {/* Tâm đứng yên */}
        <circle
          cx={CX}
          cy={CY}
          r={HUB_RADIUS}
          fill="#0A192F"
          stroke="#00BFEA"
          strokeWidth="2"
        />

        <image
          href={matrixLogo}
          x={CX - 23}
          y={CY - 30}
          width="46"
          height="46"
          preserveAspectRatio="xMidYMid meet"
        />

        <text
          x={CX}
          y={CY + 35}
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="700"
        >
          MATRIX HOLDING
        </text>

        {/* Các node chỉ đổi vị trí, không xoay chữ */}
        {units.map((unit, index) => {
          const angle = -Math.PI * 0.75 + index * TAU / 4
            + time * TAU / 40;

          const x = CX + RX * Math.cos(angle);
          const y = CY + RY * Math.sin(angle);
          const active = selected === unit.id;
          const Icon = unit.Icon;

          return (
            <g
              key={unit.id}
              transform={`translate(${x}, ${y})`}
              className="orbit-node"
              role="button"
              tabIndex={0}
              aria-label={`Chọn ${unit.name}`}
              aria-pressed={active}
              onClick={() => selectUnit(unit.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  selectUnit(unit.id);
                }
              }}
            >
              <circle
                className="node-background"
                r={NODE_RADIUS}
                fill={active ? "#ECFAFF" : "#FFFFFF"}
                stroke={active ? "#00BFEA" : "#E2E8F0"}
                strokeWidth={active ? 2 : 1.3}
              />

              <circle cy="-15" r="19" fill="#EFF9FD" />

              <Icon
                x={-11}
                y={-26}
                width={22}
                height={22}
                stroke="#009FCB"
                strokeWidth={1.8}
                pointerEvents="none"
              />

              <text
                y="24"
                textAnchor="middle"
                fill="#0A192F"
                fontSize="11.5"
                fontWeight="600"
                pointerEvents="none"
              >
                {unit.name}
              </text>
            </g>
          );
        })}
      </svg>

      <button
        type="button"
        className="orbit-toggle"
        onClick={() => setPaused((value) => !value)}
        disabled={reducedMotion}
      >
        {reducedMotion
          ? "Chế độ giảm chuyển động"
          : paused
            ? "Tiếp tục chuyển động"
            : "Tạm dừng chuyển động"}
      </button>
    </div>
  );
}
