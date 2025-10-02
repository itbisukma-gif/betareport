
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BarChart3, Eye, Handshake, KeyRound, Link as LinkIcon, LogOut, Mail, PenLine, Phone, User, Video } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { type ChartConfig } from "@/components/ui/chart"

const analyticsData = [
    {
        title: 'Total Postingan',
        value: '1.2K',
        icon: <Video className="h-6 w-6 text-muted-foreground" />,
    },
    {
        title: 'Total Penayangan',
        value: '2.5M',
        icon: <Eye className="h-6 w-6 text-muted-foreground" />,
    },
    {
        title: 'Engagement',
        value: '12.5%',
        icon: <Handshake className="h-6 w-6 text-muted-foreground" />,
    },
];

const socialAccounts = [
    {
      id: "tiktok",
      name: "TikTok", 
      connected: true,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>,
      username: "@tiktokexpert"
    },
    { 
      id: "instagram",
      name: "Instagram", 
      connected: true,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>,
      username: "@insta_guru"
    },
    { 
      id: "facebook",
      name: "Facebook", 
      connected: false,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
      username: null
    },
];

const chartData = [
  { day: 'Sen', views: 25000 },
  { day: 'Sel', views: 32000 },
  { day: 'Rab', views: 28000 },
  { day: 'Kam', views: 45000 },
  { day: 'Jum', views: 41000 },
  { day: 'Sab', views: 68000 },
  { day: 'Min', views: 62000 },
]

const chartConfig = {
  views: {
    label: "Penayangan",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

const ProfileItem = ({ icon, label, value, type = 'text' }: { icon: React.ReactNode, label: string, value: string, type?: string }) => (
    <div className="flex flex-col gap-2">
        <Label htmlFor={label.toLowerCase()} className="text-muted-foreground flex items-center gap-2">
            {icon}
            {label}
        </Label>
        <div className="flex items-center gap-2">
            <Input id={label.toLowerCase()} value={value} readOnly type={type} className="bg-muted/50 border-0" />
            <Button variant="ghost" size="icon" className="h-9 w-9">
                <PenLine className="h-4 w-4" />
            </Button>
        </div>
    </div>
);


export default function ProfilePage() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
        <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
                <AvatarImage src="https://picsum.photos/seed/profile-avatar/200" data-ai-hint="user avatar" />
                <AvatarFallback>
                    <User className="h-8 w-8 text-muted-foreground" />
                </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">Nael Sianipar</h2>
              <p className="text-sm text-muted-foreground">SPPG Yayasan Bisukma Bangun Bangsa</p>
            </div>
        </div>

        <Dialog>
            <DialogTrigger asChild>
                 <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="text-base font-medium flex items-center gap-2">
                            <BarChart3 className="h-4 w-4" />
                            Analitik Konten
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 gap-4 text-center">
                        {analyticsData.map((item) => (
                            <div key={item.title} className="p-3 bg-muted/50 rounded-lg flex flex-col items-center justify-center gap-1">
                                {item.icon}
                                <p className="text-xl font-bold">{item.value}</p>
                                <p className="text-xs text-muted-foreground">{item.title}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Analitik Konten Mingguan</DialogTitle>
                <DialogDescription>
                    Grafik ini menunjukkan total penayangan konten Anda selama seminggu terakhir.
                </DialogDescription>
                </DialogHeader>
                <div className="w-full h-[250px] pt-4">
                     <ChartContainer config={chartConfig} className="w-full h-full">
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                top: 5,
                                right: 10,
                                left: -20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="day"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tick={{ fontSize: 12 }}
                            />
                             <YAxis
                                tickFormatter={(value) => `${value / 1000}K`}
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tick={{ fontSize: 12 }}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line" />}
                            />
                            <Line
                                dataKey="views"
                                type="monotone"
                                stroke="hsl(var(--primary))"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                </div>
            </DialogContent>
        </Dialog>


        <Card>
            <CardHeader>
                <CardTitle className="text-base font-medium">Pengaturan Akun</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <ProfileItem icon={<User className="h-4 w-4" />} label="Nama" value="Tim MBG" />
                <ProfileItem icon={<Phone className="h-4 w-4" />} label="No. Telp" value="081234567890" />
                <ProfileItem icon={<Mail className="h-4 w-4" />} label="Email" value="tim.mbg@example.com" />
                <ProfileItem icon={<KeyRound className="h-4 w-4" />} label="Sandi" value="********" type="password" />
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="text-base font-medium">Akun Terkait</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                 {socialAccounts.map((account) => (
                    <div key={account.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6">{account.icon}</div>
                            <div>
                                <span className="font-medium">{account.name}</span>
                                {account.connected && account.username && (
                                    <p className="text-xs text-muted-foreground">{account.username}</p>
                                )}
                            </div>
                        </div>
                        <Button variant={account.connected ? 'secondary' : 'destructive'} size="sm">
                             <LinkIcon className="h-4 w-4 mr-2" />
                            {account.connected ? 'Tautkan Ulang' : 'Tautkan'}
                        </Button>
                    </div>
                ))}
            </CardContent>
        </Card>

        <div className="pt-4">
             <Button variant="outline" className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                Keluar
            </Button>
        </div>
    </div>
  );
}

    