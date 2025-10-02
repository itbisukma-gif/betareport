
export type DailyPost = {
  id: string;
  name: string;
  posted: boolean;
  connected: boolean;
  icon: JSX.Element;
  post: {
    thumbnail: string;
    imageHint: string;
    caption: string;
    likes: string;
    views: string;
    comments: string;
  } | null;
  uploadUrl: string;
};

export type WeeklyScheduleItem = {
    day: string;
    scheduled: boolean;
}

export const initialDailyPostStatus: DailyPost[] = [
    {
      id: 'tiktok',
      name: 'TikTok',
      posted: true,
      connected: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
        </svg>
      ),
      post: {
        thumbnail: 'https://picsum.photos/seed/tiktok-post/400/600',
        imageHint: 'dance video',
        caption: 'New dance challenge! 🔥 #fyp #dance',
        likes: '1.2M',
        views: '15.3M',
        comments: '23.5K',
      },
      uploadUrl: 'https://www.tiktok.com/upload',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      posted: true,
      connected: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      ),
      post: {
        thumbnail: 'https://picsum.photos/seed/insta-post/400/600',
        imageHint: 'food photography',
        caption: 'Delicious new recipe!',
        likes: '500K',
        views: '2.1M',
        comments: '10K',
      },
      uploadUrl: 'https://www.instagram.com',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      posted: false,
      connected: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
      post: null,
      uploadUrl: 'https://www.facebook.com/creatorstudio',
    },
];

export const weeklySchedule: WeeklyScheduleItem[] = [
    { day: 'Sen', scheduled: true },
    { day: 'Sel', scheduled: true },
    { day: 'Rab', scheduled: true },
    { day: 'Kam', scheduled: true },
    { day: 'Jum', scheduled: true },
    { day: 'Sab', scheduled: false },
    { day: 'Min', scheduled: false },
];
