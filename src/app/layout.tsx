
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { BottomNav } from '@/components/BottomNav';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'PastelNav',
  description: 'A minimalist app with pastel-themed navigation.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M3 3v18h18%22/><path d=%22M18.7 8a5 5 0 0 1-5.7-4.3%22/><path d=%22M13 18.7a5 5 0 0 1-4.3-5.7%22/><path d=%22M8 13a5 5 0 0 1-5.7-4.3%22/></svg>",
  }
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
