'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const Sparkle = memo(({
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
      <path d="M12 2 Q12 12 2 12 Q12 12 12 22 Q12 12 22 12 Q12 12 12 2" />
    </svg>
  );
});

Sparkle.displayName = 'Sparkle';

export default Sparkle;
