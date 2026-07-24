'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const CurvedArrow = memo(({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 4,24 Q 16,4 28,16" />
      <polyline points="20,16 28,16 26,8" />
    </svg>
  );
});

CurvedArrow.displayName = 'CurvedArrow';

export default CurvedArrow;
