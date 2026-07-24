'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const CheckMark = memo(({
  size = 24,
  color = '#141111',
  fill = 'none',
  strokeWidth = 2.5,
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
});

CheckMark.displayName = 'CheckMark';

export default CheckMark;
