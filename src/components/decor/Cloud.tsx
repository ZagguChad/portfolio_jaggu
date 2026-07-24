'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const Cloud = memo(({
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
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 18 10 h -1.26 A 8 8 0 1 0 9 20 h 9 a 5 5 0 0 0 0 -10 z" />
    </svg>
  );
});

Cloud.displayName = 'Cloud';

export default Cloud;
