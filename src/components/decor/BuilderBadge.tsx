import React from 'react';

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const BuilderBadge: React.FC<Props> = ({
  size = 44,
  color = '#141111',
  strokeWidth = 2,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 48 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Badge Clip Slot */}
      <rect x="18" y="2" width="12" height="4" rx="2" fill={color} />
      <rect x="22" y="6" width="4" height="6" fill={color} />

      {/* Main Badge Card */}
      <rect
        x="6"
        y="12"
        width="36"
        height="44"
        rx="3"
        fill="#FFFAEF"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      {/* Header bar */}
      <rect x="6" y="12" width="36" height="10" fill="#FFD000" stroke={color} strokeWidth={strokeWidth * 0.7} />
      <text x="24" y="19" fill={color} fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        BUILDER ID
      </text>

      {/* Photo frame */}
      <rect x="10" y="26" width="14" height="16" fill="#141111" />
      <circle cx="17" cy="31" r="3" fill="#FFFAEF" />
      <path d="M12 40 C12 36, 22 36, 22 40" fill="#FFFAEF" />

      {/* Details text lines */}
      <line x1="28" y1="28" x2="38" y2="28" stroke={color} strokeWidth="1.5" />
      <line x1="28" y1="33" x2="36" y2="33" stroke={color} strokeWidth="1.5" />
      <line x1="28" y1="38" x2="38" y2="38" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

export default BuilderBadge;
