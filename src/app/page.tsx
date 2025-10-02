
import * as React from 'react';
import HomePageClient from '@/components/HomePageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Betareport Dashboard",
  description: "Dashboard untuk memonitor dan melaporkan postingan media sosial harian.",
};

// Wrap the client component in a Suspense boundary
export default function Home() {
  return (
    <React.Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <HomePageClient />
    </React.Suspense>
  );
}
