'use client';
import * as React from 'react';
import { HomePageClient } from '@/components/HomePageClient';

// Wrap the client component in a Suspense boundary
export default function Home() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <HomePageClient />
    </React.Suspense>
  );
}
