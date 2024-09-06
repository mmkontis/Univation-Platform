'use client';

import { useEffect } from 'react';

export default function ClientComponent({ mentorId }: { mentorId: string }) {
  useEffect(() => {
    // Client-side effects here
    console.log('Client-side effect for mentor:', mentorId);
  }, [mentorId]);

  return (
    // Client-side rendered content
    <div>Client-side component for mentor {mentorId}</div>
  );
}