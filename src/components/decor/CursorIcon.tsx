'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const CursorIcon = memo(({
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
      <polygon points="3 3 10 21 13 13 21 10 3 3" />
    </svg>
  );
});

CursorIcon.displayName = 'CursorIcon';

export default CursorIcon;
