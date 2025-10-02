'use client';
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AnimatedTabs, AnimatedTabsContent } from '@/components/AnimatedTabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Heart,
  Eye,
  MessageSquare,
  Video,
  Upload,
  CalendarDays,
  PlayCircle,
  Download,
  CircleAlert,
} from 'lucide-react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { VideoPlayer } from '@/components/VideoPlayer';

export function HomePageClient() {
  const searchParams = useSearchParams();
  const initialTabId = searchParams.get('tab') || 'overview';

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'tiktok', label: 'TikTok' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'facebook', label: 'Facebook' },
  ];

  const { toast } = useToast();
  const [reportPlatformId, setReportPlatformId] = React.useState<string | null>(
    null
  );

  const [dailyPostStatus, setDailyPostStatus] = React.useState([
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
  ]);

  const weeklySchedule = [
    { day: 'Sen', scheduled: true },
    { day: 'Sel', scheduled: true },
    { day: 'Rab', scheduled: true },
    { day: 'Kam', scheduled: true },
    { day: 'Jum', scheduled: true },
    { day: 'Sab', scheduled: false },
    { day: 'Min', scheduled: false },
  ];

  const handleReportPost = async (platformId: string, postUrl: string) => {
    try {
      const res = await fetch(`/api/preview?url=${encodeURIComponent(postUrl)}`);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.details || 'Failed to fetch preview');
      }
      const details = await res.json();

      setDailyPostStatus((prevStatus) =>
        prevStatus.map((p) =>
          p.id === platformId
            ? {
                ...p,
                posted: true,
                post: {
                  ...(p.post ?? {}),
                  caption:
                    details.caption ||
                    p.post?.caption ||
                    'Konten berhasil diunggah!',
                  thumbnail:
                    details.image ||
                    `https://picsum.photos/seed/${Math.random()}/400/600`,
                  imageHint: 'social media post',
                  likes: p.post?.likes || '0',
                  views: p.post?.views || '0',
                  comments: p.post?.comments || '0',
                },
              }
            : p
        )
      );
      toast({
        title: 'Laporan Terkirim',
        description: 'Status postingan telah diperbarui.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Gagal Menganalisis URL',
        description:
          'Tidak dapat mengambil detail dari URL yang diberikan. Status tetap diperbarui.',
      });
      // Even if API fails, mark as posted but with default/existing content
      setDailyPostStatus((prevStatus) =>
        prevStatus.map((p) =>
          p.id === platformId
            ? {
                ...p,
                posted: true,
                post: p.post || {
                  caption: 'Konten berhasil diunggah!',
                  thumbnail: `https://picsum.photos/seed/${Math.random()}/400/600`,
                  imageHint: 'social media post',
                  likes: '0',
                  views: '0',
                  comments: '0',
                },
              }
            : p
        )
      );
    }
  };

  const postedToday = dailyPostStatus.filter((p) => p.posted && p.connected);

  const VideoPostDialog = ({
    children,
    appName,
    uploadUrl,
    platformId,
  }: {
    children: React.ReactNode;
    appName: string;
    uploadUrl: string;
    platformId: string;
  }) => {
    const guidelines = {
      hygieneStandards: `•   Selalu cuci tangan dengan sabun dan air mengalir sebelum dan sesudah menangani makanan.
•   Gunakan penutup kepala (hairnet) dan celemek bersih selama berada di area dapur.
•   Lepaskan semua perhiasan (cincin, gelang, jam tangan) sebelum memulai pekerjaan.
•   Jaga kebersihan kuku, pastikan pendek dan tidak menggunakan cat kuku.
•   Gunakan sarung tangan sekali pakai saat menangani makanan siap saji.
•   Pastikan area kerja selalu bersih dan kering.
•   Jangan pernah bekerja saat sakit, terutama jika mengalami gejala flu, diare, atau infeksi kulit.
•   Laporkan setiap luka atau goresan kepada atasan dan tutup dengan perban tahan air.`,
      contentRules: `•   Fokus pada citra positif: Tunjukkan proses memasak yang bersih, bahan-bahan segar, dan semangat tim.
•   Dilarang mengganggu staf: Jangan mewawancarai atau mengarahkan staf yang sedang sibuk bekerja di jam sibuk.
•   Minta izin sebelum merekam wajah: Selalu minta persetujuan lisan sebelum merekam wajah seseorang secara close-up.
•   Hanya rekam area bersih: Hindari merekam area cuci piring yang kotor, tempat sampah, atau area yang berantakan.
•   Tidak ada drama: Konten harus profesional dan tidak menciptakan konflik atau gosip.
•   Gunakan pencahayaan yang baik, hindari area yang terlalu gelap atau terlalu terang.
•   Suara harus jernih, hindari kebisingan latar belakang yang berlebihan.
•   Durasi video idealnya antara 15-60 detik untuk menjaga perhatian penonton.`,
    };
    const [isScrolledToEnd, setIsScrolledToEnd] = React.useState(false);
    const [isGuidelinesOpen, setIsGuidelinesOpen] = React.useState(false);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
      if (scrollHeight - scrollTop <= clientHeight + 1) {
        setIsScrolledToEnd(true);
      }
    };

    const onOpenChange = (open: boolean) => {
      setIsGuidelinesOpen(open);
      if (!open) {
        setIsScrolledToEnd(false);
      }
    };

    const handleUploadClick = () => {
      setIsGuidelinesOpen(false); // Close this dialog
      setReportPlatformId(platformId); // Set which platform to report for
    };

    return (
      <Dialog open={isGuidelinesOpen} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Panduan Konten Video</DialogTitle>
            <DialogDescription>
              Aturan dan standar untuk pembuatan konten di dapur MBG. Baca hingga
              akhir untuk melanjutkan.
            </DialogDescription>
          </DialogHeader>
          <div
            className="flex-grow overflow-y-auto pr-4 -mr-4"
            onScroll={handleScroll}
          >
            <div className="py-4 space-y-4 text-sm ">
              <div>
                <h3 className="font-semibold mb-2">
                  Standar Higienis Dapur MBG
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {guidelines.hygieneStandards}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Peraturan Pengambilan Konten
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {guidelines.contentRules}
                </p>
              </div>
            </div>
          </div>
          {isScrolledToEnd && (
            <DialogFooter className="pt-4 border-t mt-0">
              <Button asChild className="w-full" onClick={handleUploadClick}>
                <a href={uploadUrl} target="_blank" rel="noopener noreferrer">
                  <Upload className="mr-2 h-4 w-4" /> Upload ke {appName}
                </a>
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    );
  };

  const ReportPostDialog = ({
    platformId,
    onReport,
  }: {
    platformId: string | null;
    onReport: (platformId: string, postUrl: string) => void;
  }) => {
    const [url, setUrl] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const isOpen = !!platformId;

    const handleClose = () => {
      setReportPlatformId(null);
      setUrl('');
    };

    const handleSubmit = async () => {
      if (!url) {
        toast({
          variant: 'destructive',
          title: 'URL tidak boleh kosong',
          description: 'Silakan masukkan URL postingan.',
        });
        return;
      }
      if (!platformId) return;

      setIsLoading(true);
      await onReport(platformId, url);
      setIsLoading(false);
      handleClose();
    };

    return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Lapor Postingan</DialogTitle>
            <DialogDescription>
              Masukkan URL postingan yang sudah diunggah untuk menandainya
              sebagai selesai.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="post-url" className="text-right">
                URL
              </Label>
              <Input
                id="post-url"
                placeholder="https://tiktok.com/..."
                className="col-span-3"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Menganalisis...' : 'Kirim'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="p-4 sm:p-6">
      <AnimatedTabs tabs={tabs} initialTab={initialTabId} className="w-full">
        <AnimatedTabsContent value="overview">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium mb-3 px-1">Today's Posts</h3>
              {dailyPostStatus.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-card border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6">{platform.icon}</div>
                    <span className="font-medium">{platform.name}</span>
                  </div>
                  {!platform.connected ? (
                    <Badge variant="secondary" className="font-normal">
                      <XCircle className="mr-1 h-3 w-3" />
                      Not Connected
                    </Badge>
                  ) : platform.posted ? (
                    <Badge className="bg-green-600 hover:bg-green-700 font-normal">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Posted
                    </Badge>
                  ) : (
                    <Badge
                      variant="destructive"
                      className="bg-amber-600 hover:bg-amber-700 font-normal"
                    >
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      Not Posted
                    </Badge>
                  )}
                </div>
              ))}
            </div>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Jadwal Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {weeklySchedule.map((item) => (
                    <div key={item.day} className="flex-1 text-center">
                      <p className="text-xs text-muted-foreground mb-2">
                        {item.day}
                      </p>
                      <Badge
                        variant={item.scheduled ? 'default' : 'secondary'}
                        className="w-full h-2 p-0"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {postedToday.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Today's Post Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {postedToday.map(
                      (platform) =>
                        platform.post && (
                          <div
                            key={platform.name}
                            className="bg-muted/50 rounded-lg p-3"
                          >
                            <div className="flex items-start gap-4">
                              <Image
                                src={platform.post.thumbnail}
                                alt={`Thumbnail for ${platform.name} post`}
                                width={100}
                                height={150}
                                data-ai-hint={platform.post.imageHint}
                                className="rounded-md object-cover aspect-[2/3]"
                              />
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  {platform.icon}
                                  <span className="font-semibold text-foreground">
                                    {platform.name}
                                  </span>
                                </div>
                                <p className="text-sm line-clamp-3">
                                  {platform.post.caption}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                                  <div className="flex items-center gap-1">
                                    <Heart className="h-3 w-3" />
                                    <span>{platform.post.likes}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Eye className="h-3 w-3" />
                                    <span>{platform.post.views}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="h-3 w-3" />
                                    <span>{platform.post.comments}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </AnimatedTabsContent>
        <AnimatedTabsContent value="tiktok">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                      </svg>
                    </div>
                    <span>TikTok</span>
                    {dailyPostStatus.find((p) => p.id === 'tiktok')?.posted && (
                      <Badge className="bg-green-600 hover:bg-green-700 font-normal ml-2">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Posted
                      </Badge>
                    )}
                  </div>
                  <Badge variant="secondary" className="font-light">
                    Terkait
                  </Badge>
                </div>
              </CardTitle>
              <CardDescription>Your TikTok performance metrics.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src="https://picsum.photos/seed/1/100"
                      data-ai-hint="user avatar"
                    />
                    <AvatarFallback>TT</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">@tiktokexpert</p>
                    <p className="text-sm text-muted-foreground">
                      Your official TikTok account.
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Lihat Akun
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-bold text-2xl">1.2M</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">542</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>
              <div className="flex gap-2">
                <VideoPostDialog
                  appName="TikTok"
                  uploadUrl={
                    dailyPostStatus.find((p) => p.name === 'TikTok')?.uploadUrl ??
                    ''
                  }
                  platformId="tiktok"
                >
                  <Button className="w-full">
                    <Video className="mr-2 h-4 w-4" /> Post Video
                  </Button>
                </VideoPostDialog>
              </div>
            </CardContent>
          </Card>
        </AnimatedTabsContent>
        <AnimatedTabsContent value="instagram">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6">
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
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </div>
                    <span>Instagram</span>
                    {dailyPostStatus.find((p) => p.id === 'instagram')
                      ?.posted && (
                      <Badge className="bg-green-600 hover:bg-green-700 font-normal ml-2">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Posted
                      </Badge>
                    )}
                  </div>
                  <Badge variant="secondary" className="font-light">
                    Terkait
                  </Badge>
                </div>
              </CardTitle>
              <CardDescription>
                Your Instagram performance metrics.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src="https://picsum.photos/seed/2/100"
                      data-ai-hint="user avatar"
                    />
                    <AvatarFallback>IG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">@insta_guru</p>
                    <p className="text-sm text-muted-foreground">
                      Your official Instagram account.
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Lihat Akun
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-bold text-2xl">850K</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">1,203</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>
              <div className="flex gap-2">
                <VideoPostDialog
                  appName="Instagram"
                  uploadUrl={
                    dailyPostStatus.find((p) => p.name === 'Instagram')
                      ?.uploadUrl ?? ''
                  }
                  platformId="instagram"
                >
                  <Button className="w-full">
                    <Video className="mr-2 h-4 w-4" /> Post Video
                  </Button>
                </VideoPostDialog>
              </div>
            </CardContent>
          </Card>
        </AnimatedTabsContent>
        <AnimatedTabsContent value="facebook">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <span>Facebook</span>
                  </div>
                  <Badge variant="destructive" className="font-light">
                    Tidak Terkait
                  </Badge>
                </div>
              </CardTitle>
              <CardDescription>
                Your Facebook performance metrics.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center text-center p-8">
              <p className="text-muted-foreground mb-4">
                Kaitkan akun Facebook Anda untuk melihat data.
              </p>
              <Button variant="destructive">Kaitkan Akun API</Button>
            </CardContent>
          </Card>
        </AnimatedTabsContent>
      </AnimatedTabs>
      <ReportPostDialog platformId={reportPlatformId} onReport={handleReportPost} />
    </div>
  );
}
