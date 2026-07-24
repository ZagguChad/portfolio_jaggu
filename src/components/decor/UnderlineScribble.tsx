'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const UnderlineScribble = memo(({
  size = 60,
  color = '#141111',
  fill = 'none',
  strokeWidth = 2.5,
  className = '',
  ...props
}: DecorProps) => {
  return (
    <svg
      width={size}
      height={typeof size === 'number' ? size / 3 : 'auto'}
      viewBox="0 0 100 20"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 5,12 Q 25,4 50,14 Q 75,18 95,8" />
    </svg>
  );
});

UnderlineScribble.displayName = 'UnderlineScribble';

export default UnderlineScribble;
