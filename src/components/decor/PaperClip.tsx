import React from 'react';

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const PaperClip: React.FC<Props> = ({
  size = 36,
  color = '#141111',
  strokeWidth = 2.5,
  className = '',
}) => {
  return (
    <svg
      width={size * 0.6}
      height={size}
      viewBox="0 0 24 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 12 V28 C8 32.5, 16 32.5, 16 28 V8 C16 3.5, 4 3.5, 4 8 V32 C4 38, 20 38, 20 32 V12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PaperClip;
