'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const Bracket = memo(({
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
      <path d="M 8,3 Q 4,3 4,7 Q 4,10 2,12 Q 4,14 4,17 Q 4,21 8,21" />
      <path d="M 16,3 Q 20,3 20,7 Q 20,10 22,12 Q 20,14 20,17 Q 20,21 16,21" />
    </svg>
  );
});

Bracket.displayName = 'Bracket';

export default Bracket;
