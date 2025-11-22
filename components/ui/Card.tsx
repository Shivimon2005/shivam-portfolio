import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = "", 
  noPadding = false, 
  hoverEffect = true,
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-card-bg border border-ink-black rounded-2xl overflow-hidden
        ${noPadding ? '' : 'p-6'}
        ${hoverEffect ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;