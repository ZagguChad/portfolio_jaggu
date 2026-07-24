'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const CircleShape = memo(({
  size = 32,
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
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
});

CircleShape.displayName = 'CircleShape';

export default CircleShape;
