
import { AlertTriangle, CheckCircle2, MessageSquareWarning } from 'lucide-react';
import Link from 'next/link';

const notifications = [
    {
        id: 1,
        type: 'urgent-danger',
        icon: <AlertTriangle className="text-destructive" />,
        title: 'Akun Belum Tertaut',
        message: 'Akun Facebook Anda belum ditautkan. Segera tautkan untuk dapat memposting konten.',
        date: 'Baru saja',
        link: '/'
    },
    {
        id: 2,
        type: 'urgent-warning',
        icon: <AlertTriangle className="text-amber-600" />,
        title: 'Post Harian Belum Lengkap',
        message: 'Anda belum mengupload konten harian untuk Instagram. Jangan lupa untuk posting hari ini.',
        date: '10 menit yang lalu',
        link: '/'
    },
    {
        id: 3,
        type: 'approval',
        icon: <CheckCircle2 className="text-green-600" />,
        title: 'Konten Disetujui',
        message: 'Hai Tim MBG, konten "video_challenge_final.mp4" Anda tanggal 28 September 2024 sudah disetujui. Yuk, upload!',
        date: '1 jam yang lalu',
        link: '/'
    },
    {
        id: 4,
        type: 'revision',
        icon: <MessageSquareWarning className="text-blue-600" />,
        title: 'Perlu Revisi',
        message: 'Hai Tim MBG, konten "behind_the_scenes_dapur.mp4" Anda tanggal 26 September 2024 ada yang perlu direvisi. Tolong periksa ya.',
        date: '2 hari yang lalu',
        link: '/pengajuan'
    }
];

const NotificationItem = ({ notification }: { notification: typeof notifications[0] }) => {
    const baseClasses = "border-l-4 p-4 rounded-r-lg rounded-l-sm mb-3 flex items-start gap-4";
    const typeClasses = {
        'urgent-danger': 'bg-destructive/10 border-destructive',
        'urgent-warning': 'bg-amber-500/10 border-amber-500',
        'approval': 'bg-green-500/10 border-green-500',
        'revision': 'bg-blue-500/10 border-blue-500',
    };

    const content = (
        <div className={`${baseClasses} ${typeClasses[notification.type as keyof typeof typeClasses]}`}>
            <div className="flex-shrink-0 w-6 h-6 mt-1">
                {notification.icon}
            </div>
            <div className="flex-grow">
                <h3 className="font-bold text-sm">{notification.title}</h3>
                <p className="text-sm text-muted-foreground">{notification.message}</p>
                <p className="text-xs text-muted-foreground mt-2">{notification.date}</p>
            </div>
        </div>
    );

    if (notification.link) {
        return <Link href={notification.link}>{content}</Link>;
    }

    return content;
};

export default function NotificationsPage() {
  return (
    <div className="p-6">
        <div className="space-y-2">
            {notifications.map(notification => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </div>
    </div>
  );
}
