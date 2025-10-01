import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-transparent p-0">
        <TabsTrigger value="overview" className="rounded-full">Overview</TabsTrigger>
        <TabsTrigger value="tiktok" className="rounded-full">TikTok</TabsTrigger>
        <TabsTrigger value="instagram" className="rounded-full">Instagram</TabsTrigger>
        <TabsTrigger value="facebook" className="rounded-full">Facebook</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Here's an overview of your social media performance.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Content for Overview tab */}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tiktok">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
                  TikTok
                </div>
                <Badge variant="secondary" className="font-light">Terkait</Badge>
              </div>
            </CardTitle>
            <CardDescription>
              Your TikTok performance metrics.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src="https://picsum.photos/seed/1/100" data-ai-hint="user avatar" />
                        <AvatarFallback>TT</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">@tiktokexpert</p>
                        <p className="text-sm text-muted-foreground">Your official TikTok account.</p>
                    </div>
                </div>
                <Button variant="outline" size="sm">Lihat Akun</Button>
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
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="instagram">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  Instagram
                </div>
                <Badge variant="secondary" className="font-light">Terkait</Badge>
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
                        <AvatarImage src="https://picsum.photos/seed/2/100" data-ai-hint="user avatar" />
                        <AvatarFallback>IG</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">@insta_guru</p>
                        <p className="text-sm text-muted-foreground">Your official Instagram account.</p>
                    </div>
                </div>
                <Button variant="outline" size="sm">Lihat Akun</Button>
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
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="facebook">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  Facebook
                </div>
                <Badge variant="destructive" className="font-light">Tidak Terkait</Badge>
              </div>
            </CardTitle>
            <CardDescription>
              Your Facebook performance metrics.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Content for Facebook tab */}
          </CardContent>
          <CardFooter className="flex-col items-start gap-4">
            <Button variant="destructive" size="sm">Kaitkan Akun API</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
