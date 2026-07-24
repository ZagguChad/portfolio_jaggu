import React from 'react';

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const OrigamiCrane: React.FC<Props> = ({
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
      {/* Polyhedral Origami Crane outline */}
      <path
        d="M24 4L34 20L44 14L32 30L24 44L16 30L4 14L14 20L24 4Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 4L24 44"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="2 2"
      />
      <path
        d="M14 20L34 20"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
      />
      <path
        d="M16 30L32 30"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
      />
    </svg>
  );
};

export default OrigamiCrane;
