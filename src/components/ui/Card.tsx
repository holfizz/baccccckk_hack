import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  onClick
}: CardProps) => {
  const baseClasses = 'bg-white rounded-2xl border border-accent shadow-sm';
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-primary/20 transition-all duration-300' : '';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;