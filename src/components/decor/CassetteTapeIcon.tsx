import React from 'react';

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const CassetteTapeIcon: React.FC<Props> = ({
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
      {/* Cassette Shell */}
      <rect
        x="4"
        y="6"
        width="64"
        height="36"
        rx="4"
        fill="#FFFAEF"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      {/* Label Area */}
      <rect
        x="10"
        y="10"
        width="52"
        height="18"
        rx="2"
        fill="#FFD000"
        stroke={color}
        strokeWidth={strokeWidth * 0.7}
      />
      {/* Spool window */}
      <rect
        x="18"
        y="14"
        width="36"
        height="10"
        rx="5"
        fill="#141111"
      />
      {/* Left & Right Reels */}
      <circle cx="26" cy="19" r="3.5" fill="#FFFAEF" stroke={color} strokeWidth="1" />
      <circle cx="46" cy="19" r="3.5" fill="#FFFAEF" stroke={color} strokeWidth="1" />

      {/* Bottom trapezoid tape access window */}
      <path
        d="M18 42 L24 32 L48 32 L54 42 Z"
        fill="#141111"
        stroke={color}
        strokeWidth={strokeWidth * 0.7}
      />
      <circle cx="26" cy="37" r="1.5" fill="#FFFAEF" />
      <circle cx="46" cy="37" r="1.5" fill="#FFFAEF" />
    </svg>
  );
};

export default CassetteTapeIcon;
