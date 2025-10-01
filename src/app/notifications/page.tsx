
'use client';

import { AlertTriangle, CheckCircle2, MessageSquareWarning } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
        link: '/'
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const NotificationItem = ({ notification }: { notification: typeof notifications[0] }) => {
    const baseClasses = "block p-4 rounded-xl shadow-sm transition-colors duration-200 ease-in-out border";
    const typeClasses = {
        'urgent-danger': 'bg-destructive/5 border-destructive/20 hover:bg-destructive/10',
        'urgent-warning': 'bg-amber-500/5 border-amber-500/20 hover:bg-amber-500/10',
        'approval': 'bg-green-500/5 border-green-500/20 hover:bg-green-500/10',
        'revision': 'bg-blue-500/5 border-blue-500/20 hover:bg-blue-500/10',
    };
    const iconContainerClasses = {
        'urgent-danger': 'bg-destructive/10',
        'urgent-warning': 'bg-amber-500/10',
        'approval': 'bg-green-500/10',
        'revision': 'bg-blue-500/10',
    };

    const content = (
      <motion.div variants={itemVariants} className="w-full">
        <div className={`${baseClasses} ${typeClasses[notification.type as keyof typeof typeClasses]}`}>
            <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${iconContainerClasses[notification.type as keyof typeof iconContainerClasses]}`}>
                    {notification.icon}
                </div>
                <div className="flex-grow">
                    <h3 className="font-semibold text-sm text-card-foreground">{notification.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    <p className="text-xs text-muted-foreground/80 mt-2">{notification.date}</p>
                </div>
            </div>
        </div>
      </motion.div>
    );

    if (notification.link) {
        return <Link href={notification.link} passHref className="no-underline">{content}</Link>;
    }

    return content;
};

export default function NotificationsPage() {
  return (
    <div className="p-4 sm:p-6">
        <motion.div 
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            {notifications.map(notification => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </motion.div>
    </div>
  );
}
