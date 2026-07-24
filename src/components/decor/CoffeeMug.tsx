import React from 'react';

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const CoffeeMug: React.FC<Props> = ({
  size = 40,
  color = '#141111',
  strokeWidth = 2,
  className = '',
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
      {/* Steam lines */}
      <path d="M16 8 C16 4, 20 4, 20 2" stroke={color} strokeWidth={strokeWidth * 0.8} strokeLinecap="round" />
      <path d="M24 9 C24 5, 28 5, 28 3" stroke={color} strokeWidth={strokeWidth * 0.8} strokeLinecap="round" />
      <path d="M32 8 C32 4, 36 4, 36 2" stroke={color} strokeWidth={strokeWidth * 0.8} strokeLinecap="round" />

      {/* Mug Body */}
      <rect
        x="12"
        y="14"
        width="24"
        height="26"
        rx="3"
        fill="#FFFAEF"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      {/* Mug Handle */}
      <path
        d="M36 20 C42 20, 42 32, 36 32"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Code symbol on mug */}
      <text x="17" y="30" fill={color} fontSize="9" fontFamily="monospace" fontWeight="bold">
        &lt;/&gt;
      </text>
    </svg>
  );
};

export default CoffeeMug;
