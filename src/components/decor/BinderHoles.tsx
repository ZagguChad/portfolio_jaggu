import React from 'react';

interface Props {
  count?: number;
  color?: string;
  className?: string;
}

export const BinderHoles: React.FC<Props> = ({
  count = 6,
  color = '#141111',
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-6 items-center ${className}`}>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="w-4 h-4 rounded-full brutal-border-sm bg-[#FFFAEF] shadow-inner relative flex items-center justify-center"
          style={{ borderColor: color }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#141111]/80" />
        </div>
      ))}
    </div>
  );
};

export default BinderHoles;
