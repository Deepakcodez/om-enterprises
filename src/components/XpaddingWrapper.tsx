import React from 'react';
import { cn } from '@/utills/cn';

interface XpaddingWrapperProps {
  children: React.ReactNode;
  className?: string; // Use `className` instead of `class`
}

const XpaddingWrapper: React.FC<XpaddingWrapperProps> = ({ children, className }) => {
  return (
    <div className={ cn(`ps-4 pe-4 lg:ps-24 lg:pe-24 `, className)}>
      {children}
    </div>
  );
};

export default XpaddingWrapper;