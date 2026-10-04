import React, { useState } from 'react';

const CENTER = 210;
const ORBIT_RADIUS = 145;
const NODE_RADIUS = 48;
const HOLDING_RADIUS = 65;

export interface EcosystemMember {
  id: string;
  name: string;
  angle: number;
  lines: string[];
  description: string;
  role: string;
  sub: string;
}

export const members: EcosystemMember[] = [
  {
    id: 'network',
    name: 'NETWORK',
    angle: -150,
    lines: ['Giải pháp', 'doanh nghiệp'],
    role: 'Giải pháp doanh nghiệp toàn diện',
    sub: 'Thành viên của Matrix Holding',
    description:
      'Đảm nhiệm vai trò xây dựng, quản lý và điều phối các đơn vị cung cấp dịch vụ cho doanh nghiệp.',
  },
  {
    id: 'community',
    name: 'COMMUNITY',
    angle: -30,
    lines: ['Cộng đồng', 'kết nối'],
    role: 'Cộng đồng kết nối kinh doanh',
    sub: 'Thành viên của Matrix Holding',
    description:
      'Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối kinh doanh cho doanh nghiệp.',
  },
  {
    id: 'capital',
    name: 'CAPITAL',
    angle: 90,
    lines: ['Kết nối', 'đầu tư'],
    role: 'Cộng đồng kết nối đầu tư',
    sub: 'Thành viên của Matrix Holding',
    description:
      'Đảm nhiệm vai trò xây dựng, quản lý và điều phối các cộng đồng kết nối đầu tư cho doanh nghiệp.',
  },
];

const nodes = members.map((member) => {
  const radians = (member.angle * Math.PI) / 180;

  return {
    ...member,
    x: CENTER + ORBIT_RADIUS * Math.cos(radians),
    y: CENTER + ORBIT_RADIUS * Math.sin(radians),
    dx: Math.cos(radians),
    dy: Math.sin(radians),
  };
});

interface EcosystemDiagramProps {
  activeId?: string;
  onSelect?: (id: string) => void;
  showRoleCard?: boolean;
}

export default function EcosystemDiagram({
  activeId: externalActiveId,
  onSelect,
  showRoleCard = true,
}: EcosystemDiagramProps) {
  const [internalActiveId, setInternalActiveId] = useState('holding');

  const activeId = externalActiveId !== undefined ? externalActiveId : internalActiveId;

  const handleSelect = (id: string) => {
    if (externalActiveId === undefined) {
      setInternalActiveId(id);
    }
    onSelect?.(id);
  };

  const selected = nodes.find((node) => node.id === activeId);

  return (
    <div className="mx-auto w-full max-w-[460px]">
      <svg
        viewBox="0 0 420 420"
        className="block h-auto w-full select-none"
        role="group"
        aria-label="Hệ sinh thái Matrix Holding"
      >
        <defs>
          {/* Radial Glow Filter cho hạt nhân Matrix Holding */}
          <radialGradient id="holding-glow" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#00c2ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00c2ff" stopOpacity="0" />
          </radialGradient>

          {/* Linear gradient xanh đen sâu thẳm cho Matrix Holding */}
          <linearGradient id="holding-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a2a4f" />
            <stop offset="60%" stopColor="#061830" />
            <stop offset="100%" stopColor="#030d1c" />
          </linearGradient>

          {/* Vàng hổ phách cho chữ M */}
          <linearGradient id="gold-accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* Quầng sáng Aura bao quanh hạt nhân trung tâm */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={HOLDING_RADIUS + 18}
          fill="url(#holding-glow)"
          className="pointer-events-none"
        />

        {/* Đường tròn nét đứt liên kết các thành viên */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={ORBIT_RADIUS}
          fill="none"
          stroke="#7dd3fc"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity="0.85"
        />

        {/* Đường nối dừng đúng tại mép các nút với tỷ lệ hình học chính xác */}
        {nodes.map((node) => (
          <line
            key={node.id}
            x1={CENTER + HOLDING_RADIUS * node.dx}
            y1={CENTER + HOLDING_RADIUS * node.dy}
            x2={node.x - NODE_RADIUS * node.dx}
            y2={node.y - NODE_RADIUS * node.dy}
            stroke="#00c2ff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}

        {/* Ba nút thành viên (đặt trước để Holding đè lên trên nếu chạm mép) */}
        {nodes.map((node) => {
          const isActive = activeId === node.id;

          return (
            <g
              key={node.id}
              role="button"
              tabIndex={0}
              aria-label={`Matrix ${node.name}`}
              aria-pressed={isActive}
              onClick={() => handleSelect(node.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleSelect(node.id);
                }
              }}
              className="group cursor-pointer focus-visible:outline-none"
            >
              {/* Bóng đổ nhẹ cho nút */}
              <circle
                cx={node.x}
                cy={node.y + 2}
                r={NODE_RADIUS}
                fill="#000000"
                opacity="0.05"
              />

              {/* Vòng tròn nút thành viên */}
              <circle
                cx={node.x}
                cy={node.y}
                r={NODE_RADIUS}
                fill={isActive ? '#F0F9FF' : '#FFFFFF'}
                stroke={isActive ? '#009fe3' : '#BAE6FD'}
                strokeWidth={isActive ? 2.5 : 1.2}
                className="transition-all duration-200 group-hover:stroke-[#00c2ff] group-hover:fill-sky-50/70"
              />

              {/* Tên thành viên */}
              <text
                x={node.x}
                y={node.y - 14}
                textAnchor="middle"
                fill="#0A192F"
                fontSize="11"
                fontWeight="800"
                letterSpacing="0.04em"
              >
                <tspan x={node.x}>MATRIX</tspan>
                <tspan x={node.x} dy="13">{node.name}</tspan>
              </text>

              {/* Vạch vàng hổ phách mảnh */}
              <line
                x1={node.x - 10}
                x2={node.x + 10}
                y1={node.y + 6}
                y2={node.y + 6}
                stroke="#C99A3C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Chú thích vai trò bên dưới vạch vàng */}
              <text
                x={node.x}
                y={node.y + 19}
                textAnchor="middle"
                fill="#475569"
                fontSize="8.5"
                fontWeight="500"
              >
                {node.lines.map((line, index) => (
                  <tspan
                    key={line}
                    x={node.x}
                    dy={index === 0 ? 0 : 11}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        {/* HẠT NHÂN MATRIX HOLDING Ở TRUNG TÂM (ĐÈ LÊN TẦNG TRÊN CÙNG) */}
        <g
          role="button"
          tabIndex={0}
          aria-label="Matrix Holding"
          aria-pressed={activeId === 'holding'}
          onClick={() => handleSelect('holding')}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleSelect('holding');
            }
          }}
          className="group cursor-pointer focus-visible:outline-none"
        >
          {/* Bóng đổ sâu cho hạt nhân */}
          <circle
            cx={CENTER}
            cy={CENTER + 3}
            r={HOLDING_RADIUS}
            fill="#000000"
            opacity="0.25"
          />

          {/* Vòng tròn chính Matrix Holding */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={HOLDING_RADIUS}
            fill="url(#holding-bg)"
            stroke={activeId === 'holding' ? '#00c2ff' : '#7dd3fc'}
            strokeWidth={activeId === 'holding' ? 2.5 : 1.5}
            className="transition-all duration-200 group-hover:stroke-[#38bdf8]"
          />

          {/* Biểu tượng chữ M 3D vector độc quyền ở giữa */}
          <g transform={`translate(${CENTER - 11}, ${CENTER - 45}) scale(0.22)`}>
            <polygon points="14,16 32,16 32,84 14,84" fill="#00b4d8" />
            <polygon points="32,16 50,56 40,66 22,26" fill="#0077b6" />
            <polygon points="46,48 54,48 50,68 46,58" fill="url(#gold-accent)" />
            <polygon points="50,56 68,16 78,26 60,66" fill="#48cae4" />
            <polygon points="68,16 86,16 86,84 68,84" fill="#00b4d8" />
          </g>

          {/* Chữ MATRIX HOLDING */}
          <text
            x={CENTER}
            y={CENTER - 11}
            textAnchor="middle"
            fill="white"
            fontSize="12.5"
            fontWeight="900"
            letterSpacing="0.08em"
          >
            <tspan x={CENTER}>MATRIX</tspan>
            <tspan x={CENTER} dy="14">HOLDING</tspan>
          </text>

          {/* Phụ đề Định hướng · Điều phối */}
          <text
            x={CENTER}
            y={CENTER + 23}
            textAnchor="middle"
            fill="#BAE6FD"
            fontSize="8"
            fontWeight="500"
          >
            <tspan x={CENTER}>Định hướng · Điều phối</tspan>
            <tspan x={CENTER} dy="11">Kết nối nguồn lực</tspan>
          </text>
        </g>
      </svg>

      {/* Dòng chú thích căn giữa thẳng trục */}
      <p className="mt-3 text-center text-xs text-slate-500 font-medium">
        Chọn một thương hiệu để tìm hiểu vai trò
      </p>

      {/* Thẻ chi tiết vai trò (hiển thị khi showRoleCard = true) */}
      {showRoleCard && (
        <div
          aria-live="polite"
          className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/60 p-5 transition-all duration-300"
        >
          <span className="text-xs font-bold text-[#009fe3] uppercase tracking-wider block mb-1">
            {selected ? selected.sub : 'Trung tâm điều phối'}
          </span>
          <h3 className="font-extrabold text-lg text-[#0A192F]">
            {selected ? `Matrix ${selected.name}` : 'Matrix Holding'}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {selected?.description ??
              'Kiến tạo chiến lược, kết nối nguồn lực và thúc đẩy sự phát triển của toàn hệ sinh thái.'}
          </p>
        </div>
      )}
    </div>
  );
}
