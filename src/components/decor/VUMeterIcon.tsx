import React from 'react';

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const VUMeterIcon: React.FC<Props> = ({
  size = 48,
  color = '#141111',
  strokeWidth = 2,
  className = '',
}) => {
  return (
    <svg
      width={size * 1.3}
      height={size}
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer meter frame */}
      <rect
        x="4"
        y="6"
        width="56"
        height="36"
        rx="4"
        fill="#FFFAEF"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      {/* Meter arc */}
      <path
        d="M12 32 C20 18, 44 18, 52 32"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="3 2"
      />
      {/* dB markings */}
      <text x="14" y="24" fill={color} fontSize="5" fontFamily="monospace">-20</text>
      <text x="30" y="16" fill={color} fontSize="5" fontFamily="monospace">0dB</text>
      <text x="44" y="24" fill="#FF6B8B" fontSize="5" fontFamily="monospace" fontWeight="bold">+3</text>

      {/* Needle */}
      <line
        x1="32"
        y1="38"
        x2="42"
        y2="14"
        stroke="#FF6B8B"
        strokeWidth={strokeWidth * 1.2}
        strokeLinecap="round"
      />
      <circle cx="32" cy="38" r="3" fill={color} />
    </svg>
  );
};

export default VUMeterIcon;
