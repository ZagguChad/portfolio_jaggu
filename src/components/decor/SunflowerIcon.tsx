'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const SunflowerIcon = memo(({
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
      <circle cx="16" cy="16" r="5" fill="#FFD000" />
      {/* 8 petals */}
      <path d="M 16 3 C 14 7 14 7 16 11 C 18 7 18 7 16 3 Z" fill={fill} />
      <path d="M 16 29 C 14 25 14 25 16 21 C 18 25 18 25 16 29 Z" fill={fill} />
      <path d="M 3 16 C 7 14 7 14 11 16 C 7 18 7 18 3 16 Z" fill={fill} />
      <path d="M 29 16 C 25 14 25 14 21 16 C 25 18 25 18 29 16 Z" fill={fill} />
      <path d="M 6.8 6.8 C 9.6 11 9.6 11 12.5 12.5 C 11 9.6 11 9.6 6.8 6.8 Z" fill={fill} />
      <path d="M 25.2 25.2 C 22.4 21 22.4 21 19.5 19.5 C 21 22.4 21 22.4 25.2 25.2 Z" fill={fill} />
      <path d="M 6.8 25.2 C 11 22.4 11 22.4 12.5 19.5 C 9.6 21 9.6 21 6.8 25.2 Z" fill={fill} />
      <path d="M 25.2 6.8 C 21 9.6 21 9.6 19.5 12.5 C 22.4 11 22.4 11 25.2 6.8 Z" fill={fill} />
    </svg>
  );
});

SunflowerIcon.displayName = 'SunflowerIcon';

export default SunflowerIcon;
