import React from 'react';

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const EngineeringRuler: React.FC<Props> = ({
  size = 48,
  color = '#141111',
  strokeWidth = 2,
  className = '',
}) => {
  return (
    <svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 72 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="4"
        y="12"
        width="64"
        height="24"
        rx="3"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="#FFFAEF"
      />
      {/* Millimeter ticks */}
      {[10, 16, 22, 28, 34, 40, 46, 52, 58, 62].map((x, idx) => (
        <line
          key={idx}
          x1={x}
          y1="12"
          x2={x}
          y2={idx % 2 === 0 ? 22 : 17}
          stroke={color}
          strokeWidth={strokeWidth * 0.8}
        />
      ))}
      <text
        x="12"
        y="30"
        fill={color}
        fontSize="7"
        fontFamily="monospace"
        fontWeight="bold"
      >
        MM / 1:1
      </text>
    </svg>
  );
};

export default EngineeringRuler;
