'use client';

import React, { memo } from 'react';

export interface DecorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  fill?: string;
  strokeWidth?: number;
  className?: string;
}

const BatmanLogo = memo(({
  size = 40,
  color = '#141111',
  fill = 'none',
  strokeWidth = 2,
  className = '',
  ...props
}: DecorProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 60"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 50,15 Q 47,8 43,15 Q 35,5 20,20 Q 5,35 15,48 Q 28,58 50,58 Q 72,58 85,48 Q 95,35 80,20 Q 65,5 57,15 Q 53,8 50,15 Z" />
    </svg>
  );
});

BatmanLogo.displayName = 'BatmanLogo';

export default BatmanLogo;
