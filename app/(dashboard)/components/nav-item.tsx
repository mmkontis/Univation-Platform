'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavItem({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={clsx(
            'flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
            {
              'bg-accent text-accent-foreground': pathname === href
            }
          )}
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}
