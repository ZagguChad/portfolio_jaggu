'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const SpeechBubble = memo(({
  size = 32,
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
      <path d="M 21 15 a 2 2 0 0 1 -2 2 H 7 l -4 4 V 5 a 2 2 0 0 1 2 -2 h 14 a 2 2 0 0 1 2 2 z" />
    </svg>
  );
});

SpeechBubble.displayName = 'SpeechBubble';

export default SpeechBubble;
