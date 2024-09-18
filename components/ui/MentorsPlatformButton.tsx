import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "px-4 py-2 rounded-lg flex items-center gap-1 min-w-[140px] text-sm font-semibold transition-all duration-200",
  {
    variants: {
      variant: {
        blue: "bg-[#0066FF] text-white shadow-[rgba(18,25,38,0.05)_0px_0px_2px_0px] hover:shadow-[0_0_0_4px_rgba(0,102,255,0.35)] active:shadow-none active:bg-[#0052CC]",
        black: "bg-black text-white shadow-[rgba(18,25,38,0.05)_0px_0px_2px_0px] hover:shadow-[0_0_0_4px_rgba(0,0,0,0.35)] active:shadow-none active:bg-[#333333]",
        primary: "bg-[#0066FF] text-white shadow-[rgba(18,25,38,0.05)_0px_0px_2px_0px] hover:shadow-[0_0_0_4px_rgba(0,102,255,0.35)] active:shadow-none active:bg-[#0052CC]",
      },
      size: {
        default: "h-[40px]",
        sm: "h-[32px] px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className="mr-1">{leftIcon}</span>}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };