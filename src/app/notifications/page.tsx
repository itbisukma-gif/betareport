
'use client';

import { AlertTriangle, CheckCircle2, MessageSquareWarning } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const notifications = [
    {
        id: 1,
        type: 'urgent-danger',
        icon: <AlertTriangle className="h-5 w-5 text-destructive" />,
        title: 'Akun Belum Tertaut',
        message: 'Akun Facebook Anda belum ditautkan. Segera tautkan untuk dapat memposting konten.',
        date: 'Baru saja',
        link: '/'
    },
    {
        id: 2,
        type: 'urgent-warning',
        icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
        title: 'Post Harian Belum Lengkap',
        message: 'Anda belum mengupload konten harian untuk Instagram. Jangan lupa untuk posting hari ini.',
        date: '10 menit yang lalu',
        link: '/'
    },
    {
        id: 3,
        type: 'approval',
        icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
        title: 'Konten Disetujui',
        message: 'Hai Tim MBG, konten "video_challenge_final.mp4" Anda tanggal 28 September 2024 sudah disetujui. Yuk, upload!',
        date: '1 jam yang lalu',
        link: '/pengajuan'
    },
    {
        id: 4,
        type: 'revision',
        icon: <MessageSquareWarning className="h-5 w-5 text-blue-500" />,
        title: 'Perlu Revisi',
        message: 'Hai Tim MBG, konten "behind_the_scenes_dapur.mp4" Anda tanggal 26 September 2024 ada yang perlu direvisi. Tolong periksa ya.',
        date: '2 hari yang lalu',
        link: '/pengajuan'
    }
];


const NotificationItem = ({ notification }: { notification: typeof notifications[0] }) => {
    const baseClasses = "border-l-4";
    const typeClasses = {
        'urgent-danger': 'border-destructive bg-destructive/5',
        'urgent-warning': 'border-amber-500 bg-amber-500/5',
        'approval': 'border-green-600 bg-green-500/5',
        'revision': 'border-blue-500 bg-blue-500/5',
    };
     const iconContainerClasses = {
        'urgent-danger': 'bg-destructive/10',
        'urgent-warning': 'bg-amber-500/10',
        'approval': 'bg-green-500/10',
        'revision': 'bg-blue-500/10',
    };

    return (
        <AccordionItem value={`item-${notification.id}`} className={`rounded-lg overflow-hidden my-2 shadow-sm ${typeClasses[notification.type as keyof typeof typeClasses]}`}>
            <AccordionTrigger className="p-4 hover:no-underline">
                <div className="flex items-start gap-4 w-full">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${iconContainerClasses[notification.type as keyof typeof iconContainerClasses]}`}>
                        {notification.icon}
                    </div>
                    <div className="flex-grow text-left">
                        <h3 className="font-semibold text-sm text-card-foreground">{notification.title}</h3>
                        <p className="text-xs text-muted-foreground/80 mt-1">{notification.date}</p>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
                <p className="text-sm text-muted-foreground ml-14">
                    {notification.message}
                </p>
                {notification.link && (
                    <Link href={notification.link} className="text-sm text-blue-600 hover:underline ml-14 mt-2 block">
                        Lihat Detail
                    </Link>
                )}
            </AccordionContent>
        </AccordionItem>
    );
};

export default function NotificationsPage() {
  return (
    <div className="p-4 sm:p-6">
        <Accordion type="single" collapsible className="w-full space-y-2">
            {notifications.map(notification => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </Accordion>
    </div>
  );
}
