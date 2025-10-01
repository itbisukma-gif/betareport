'use client';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const getTitle = () => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/search':
        return 'Search';
      case '/notifications':
        return 'Notifications';
      case '/profile':
        return 'Profile';
      default:
        return 'Home';
    }
  };

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-xl font-bold font-headline">{getTitle()}</h1>
    </header>
  );
}
