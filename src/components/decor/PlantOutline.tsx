'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const PlantOutline = memo(({
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
      <path d="M 12 22 V 10" />
      <path d="M 12 14 C 7 14 4 10 4 5 C 9 5 12 8 12 14" />
      <path d="M 12 10 C 17 10 20 6 20 1 C 15 1 12 4 12 10" />
    </svg>
  );
});

PlantOutline.displayName = 'PlantOutline';

export default PlantOutline;
