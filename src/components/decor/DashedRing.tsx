'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const DashedRing = memo(({
  size = 36,
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
      viewBox="0 0 32 32"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray="4 4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="13" />
    </svg>
  );
});

DashedRing.displayName = 'DashedRing';

export default DashedRing;
