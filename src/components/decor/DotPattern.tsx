'use client';

import React, { memo } from 'react';
import { DecorProps } from './BatmanLogo';

const DotPattern = memo(({
  size = 40,
  color = '#141111',
  className = '',
  ...props
}: DecorProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill={color}
      className={className}
      {...props}
    >
      <circle cx="6" cy="6" r="2" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="34" cy="6" r="2" />
      <circle cx="6" cy="20" r="2" />
      <circle cx="20" cy="20" r="2" />
      <circle cx="34" cy="20" r="2" />
      <circle cx="6" cy="34" r="2" />
      <circle cx="20" cy="34" r="2" />
      <circle cx="34" cy="34" r="2" />
    </svg>
  );
});

DotPattern.displayName = 'DotPattern';

export default DotPattern;
