'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const SmileIcon = memo(({
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
      <circle cx="12" cy="12" r="9" />
      <path d="M 8 14 q 4 4 8 0" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={strokeWidth + 1} />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={strokeWidth + 1} />
    </svg>
  );
});

SmileIcon.displayName = 'SmileIcon';

export default SmileIcon;
