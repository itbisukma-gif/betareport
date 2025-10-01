
'use client';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';

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
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 h-20 bg-background z-10">
      <div className="flex items-center">
        {pathname === '/' ? (
          <div className="flex items-baseline">
            <span className="text-xl font-bold">BETA</span>
            <span className="text-base font-light">report</span>
          </div>
        ) : (
          <h1 className="text-xl font-bold font-headline">{title}</h1>
        )}
      </div>
      <Avatar className="h-8 w-8">
        <AvatarFallback>
          <User className="h-5 w-5 text-muted-foreground" />
        </AvatarFallback>
      </Avatar>
    </header>
  );
}
