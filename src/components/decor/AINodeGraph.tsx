import React from 'react';

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const AINodeGraph: React.FC<Props> = ({
  size = 44,
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
      {/* Connections */}
      <line x1="10" y1="14" x2="24" y2="8" stroke={color} strokeWidth={strokeWidth * 0.8} />
      <line x1="10" y1="14" x2="24" y2="24" stroke={color} strokeWidth={strokeWidth * 0.8} />
      <line x1="10" y1="34" x2="24" y2="24" stroke={color} strokeWidth={strokeWidth * 0.8} />
      <line x1="10" y1="34" x2="24" y2="40" stroke={color} strokeWidth={strokeWidth * 0.8} />

      <line x1="24" y1="8" x2="38" y2="16" stroke={color} strokeWidth={strokeWidth * 0.8} />
      <line x1="24" y1="24" x2="38" y2="16" stroke={color} strokeWidth={strokeWidth * 0.8} />
      <line x1="24" y1="24" x2="38" y2="32" stroke={color} strokeWidth={strokeWidth * 0.8} />
      <line x1="24" y1="40" x2="38" y2="32" stroke={color} strokeWidth={strokeWidth * 0.8} />

      {/* Input Layer Nodes */}
      <circle cx="10" cy="14" r="4" fill="#27CCF3" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="10" cy="34" r="4" fill="#27CCF3" stroke={color} strokeWidth={strokeWidth} />

      {/* Hidden Layer Nodes */}
      <circle cx="24" cy="8" r="4" fill="#FFD000" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="24" cy="24" r="4" fill="#FFD000" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="24" cy="40" r="4" fill="#FFD000" stroke={color} strokeWidth={strokeWidth} />

      {/* Output Layer Nodes */}
      <circle cx="38" cy="16" r="4" fill="#A8E66C" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="38" cy="32" r="4" fill="#A8E66C" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
};

export default AINodeGraph;
