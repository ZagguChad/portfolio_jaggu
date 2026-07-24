'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const WavyLine = memo(({
  size = 80,
  color = '#141111',
  fill = 'none',
  strokeWidth = 2,
  className = '',
  ...props
}: DecorProps) => {
  return (
    <svg
      width={size}
      height={typeof size === 'number' ? size / 4 : 'auto'}
      viewBox="0 0 120 30"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 0,15 Q 15,0 30,15 T 60,15 T 90,15 T 120,15" />
    </svg>
  );
});

WavyLine.displayName = 'WavyLine';

export default WavyLine;
