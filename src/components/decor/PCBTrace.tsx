import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const PCBTrace: React.FC<Props> = ({
  width = 120,
  height = 40,
  color = '#A8E66C',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 20 L30 20 L45 8 L80 8 L95 30 L120 30"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="20" r="3" fill={color} />
      <circle cx="80" cy="8" r="3" fill={color} />
      <circle cx="95" cy="30" r="3" fill={color} />
    </svg>
  );
};

export default PCBTrace;
