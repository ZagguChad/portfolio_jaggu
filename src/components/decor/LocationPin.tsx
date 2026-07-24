'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const LocationPin = memo(({
  size = 28,
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
      <path d="M 21 10 c 0 7 -9 13 -9 13 s -9 -6 -9 -13 a 9 9 0 1 1 18 0 z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
});

LocationPin.displayName = 'LocationPin';

export default LocationPin;
