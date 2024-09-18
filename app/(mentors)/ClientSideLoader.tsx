'use client';

import { useEffect, useState } from 'react';
import MentorsLoading from './loading';

export default function ClientSideLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <MentorsLoading />;
  }

  return <>{children}</>;
}