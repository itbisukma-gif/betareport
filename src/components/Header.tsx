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

  const title = getTitle();

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur-sm z-10">
      {pathname === '/' ? (
        <div className="flex items-baseline">
          <span className="text-xl font-bold">BETA</span>
          <span className="text-base font-light">report</span>
        </div>
      ) : (
        <h1 className="text-xl font-bold font-headline">{title}</h1>
      )}
    </header>
  );
}
