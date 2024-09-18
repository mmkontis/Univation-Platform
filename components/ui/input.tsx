import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 h-12 bg-gray-100 transition-shadow duration-200 ease-in-out hover:shadow-[0_0_0_4px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-0',
          'invalid:border-0 invalid:border-none invalid:shadow-[0_0_0_4px_rgba(239,68,68,0.5)] ', // Add red-500 shadow for invalid state
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
