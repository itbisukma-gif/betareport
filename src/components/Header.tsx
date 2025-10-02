
'use client';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const pathname = usePathname();
  const getTitle = () => {
    switch (pathname) {
      case '/':
        return '';
      case '/pengajuan':
        return 'Pengajuan';
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
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 h-20 bg-background border-b">
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
      <Link href="/profile" className="flex items-center gap-3 min-w-0">
        <div className="text-right min-w-0">
            <p className="text-sm font-semibold truncate">Nael Sianipar</p>
            <p className="text-xs text-muted-foreground truncate">SPPG Yayasan Bisukma Bangun Bangsa</p>
        </div>
        <Avatar className="h-9 w-9 flex-shrink-0">
            <AvatarFallback>
            <User className="h-5 w-5 text-muted-foreground" />
            </AvatarFallback>
        </Avatar>
      </Link>
    </header>
  );
}
