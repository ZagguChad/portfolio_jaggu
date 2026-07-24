'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const AngleBracket = memo(({
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
      <polyline points="8,5 2,12 8,19" />
      <polyline points="16,5 22,12 16,19" />
    </svg>
  );
});

AngleBracket.displayName = 'AngleBracket';

export default AngleBracket;
