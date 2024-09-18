'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import MentorsLoading from './loading';

export default function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    window.addEventListener('routeChangeStart', handleStart);
    window.addEventListener('routeChangeComplete', handleComplete);
    window.addEventListener('routeChangeError', handleComplete);

    return () => {
      window.removeEventListener('routeChangeStart', handleStart);
      window.removeEventListener('routeChangeComplete', handleComplete);
      window.removeEventListener('routeChangeError', handleComplete);
    };
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return <MentorsLoading />;
}