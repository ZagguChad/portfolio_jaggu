'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const PaperPlane = memo(({
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
      <path d="M 22,2 L 11,13" />
      <polygon points="22,2 15,22 11,13 2,9" />
    </svg>
  );
});

PaperPlane.displayName = 'PaperPlane';

export default PaperPlane;
