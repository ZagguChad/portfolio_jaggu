import React from 'react';

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  label?: string;
}

export const MicrochipIC: React.FC<Props> = ({
  size = 44,
  color = '#141111',
  strokeWidth = 2,
  className = '',
  label = 'AI-2026',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* IC Main Body */}
      <rect
        x="12"
        y="8"
        width="24"
        height="32"
        rx="2"
        fill="#141111"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      {/* Pin 1 notch */}
      <circle cx="16" cy="12" r="1.5" fill="#FFD000" />

      {/* Pins Left */}
      {[12, 18, 24, 30, 36].map((y, idx) => (
        <line
          key={`l-${idx}`}
          x1="5"
          y1={y}
          x2="12"
          y2={y}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      ))}

      {/* Pins Right */}
      {[12, 18, 24, 30, 36].map((y, idx) => (
        <line
          key={`r-${idx}`}
          x1="36"
          y1={y}
          x2="43"
          y2={y}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      ))}

      <text
        x="24"
        y="26"
        fill="#FFFAEF"
        fontSize="6"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        {label}
      </text>
    </svg>
  );
};

export default MicrochipIC;
