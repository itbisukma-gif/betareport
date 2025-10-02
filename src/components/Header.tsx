'use client';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LogOut, User, Settings } from 'lucide-react';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 h-20 bg-background border-b gap-4">
      <div className="flex-shrink-0">
        {pathname === '/' ? (
          <div className="flex items-baseline">
            <span className="text-xl font-bold">BETA</span>
            <span className="text-base font-light">report</span>
          </div>
        ) : (
          <h1 className="text-xl font-bold font-headline truncate">{title}</h1>
        )}
      </div>
      <Popover>
        <PopoverTrigger asChild>
            <div className="flex items-center gap-3 cursor-pointer flex-shrink min-w-0">
                <div className="text-right min-w-0">
                    <p className="text-sm font-semibold truncate">Nael Sianipar</p>
                    <p className="text-xs text-muted-foreground truncate">SPPG Yayasan Bisukma Bangun Bangsa</p>
                </div>
                <Avatar className="h-9 w-9 flex-shrink-0">
                    <AvatarFallback>
                    <User className="h-5 w-5 text-muted-foreground" />
                    </AvatarFallback>
                </Avatar>
            </div>
        </PopoverTrigger>
        <PopoverContent className="w-64 mr-4 p-2">
            <div className="flex items-center gap-3 p-2">
                 <Avatar className="h-9 w-9 flex-shrink-0">
                    <AvatarFallback>
                    <User className="h-5 w-5 text-muted-foreground" />
                    </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">Nael Sianipar</p>
                    <p className="text-xs text-muted-foreground truncate">SPPG Yayasan Bisukma Bangun Bangsa</p>
                </div>
            </div>
            <Separator className="my-2" />
            <div className="flex flex-col gap-1">
                <Button variant="ghost" className="w-full justify-start text-sm font-normal" asChild>
                    <Link href="/profile">
                        <Settings className="mr-2 h-4 w-4" />
                        Pengaturan Akun
                    </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm font-normal text-destructive hover:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Keluar
                </Button>
            </div>
        </PopoverContent>
      </Popover>
    </header>
  );
}
