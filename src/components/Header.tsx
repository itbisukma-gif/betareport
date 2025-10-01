'use client';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const getTitle = () => {
    switch (pathname) {
      case '/':
        return '';
      case '/search':
        return 'Search';
      case '/notifications':
        return 'Notifications';
      case '/profile':
        return 'Profile';
      default:
        return '';
    }
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur-sm z-10">
      <h1 className="text-xl font-bold font-headline">{getTitle()}</h1>
    </header>
  );
}
