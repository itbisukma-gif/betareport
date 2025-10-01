
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { BottomNav } from '@/components/BottomNav';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'PastelNav',
  description: 'A minimalist app with pastel-themed navigation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased bg-muted/30 dark:bg-muted/10')}>
        <div className="relative w-full max-w-full sm:max-w-md mx-auto bg-background min-h-screen">
          <Header />
          <main className="pb-20">
            {children}
          </main>
          <BottomNav />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
