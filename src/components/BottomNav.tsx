
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/search', icon: Search, label: 'Search' },
  { href: '/notifications', icon: Bell, label: 'Notifications' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-10 w-full bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex justify-around items-center h-16 max-w-full sm:max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 text-center py-1 px-1 transition-colors duration-200 ease-in-out rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div
                className={cn(
                  'flex items-center justify-center h-8 w-12 rounded-full transition-colors',
                  isActive ? 'bg-accent/30 animate-stretch-once' : 'hover:bg-accent/20'
                )}
              >
                <item.icon
                  className={cn(
                    'h-5 w-5 transition-colors',
                    isActive ? 'text-accent-dark animate-pulse-once' : 'text-muted-foreground'
                  )}
                  aria-hidden="true"
                />
              </div>
              <span
                className={cn(
                  'text-xs font-medium transition-colors mt-1',
                   isActive ? 'text-accent-dark' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </span>
              <span className="sr-only">{isActive ? `(Current Page)` : ''}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
