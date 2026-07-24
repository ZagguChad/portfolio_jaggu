'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const SlashIcon = memo(({
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
      <line x1="16" y1="3" x2="8" y2="21" />
    </svg>
  );
});

SlashIcon.displayName = 'SlashIcon';

export default SlashIcon;
