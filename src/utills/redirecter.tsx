// app/category/CategoryPageClient.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Redirector = ({target}:{target:string}) => {
  const router = useRouter();

  useEffect(() => {
    // Navigate after component mounts
    router.push(target);
  }, [router]);

  return null; // Or a loading indicator
};

export default Redirector;