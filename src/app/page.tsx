
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AnimatedTabs, AnimatedTabsContent } from "@/components/AnimatedTabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2, AlertTriangle, XCircle, Heart, Eye, MessageSquare, Video } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "tiktok", label: "TikTok" },
    { id: "instagram", label: "Instagram" },
    { id: "facebook", label: "Facebook" },
  ];

  const dailyPostStatus = [
    { 
      name: "TikTok", 
      posted: true,
      connected: true,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>,
      post: {
        thumbnail: "https://picsum.photos/seed/tiktok-post/400/600",
        imageHint: "dance video",
        caption: "New dance challenge! 🔥 #fyp #dance",
        likes: "1.2M",
        views: "15.3M",
        comments: "23.5K"
      }
    },
    { 
      name: "Instagram", 
      posted: false,
      connected: true,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
    },
    { 
      name: "Facebook", 
      posted: false,
      connected: false,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    },
  ];

  const postedToday = dailyPostStatus.filter(p => p.posted && p.connected);

  return (
    <>
      <AnimatedTabs tabs={tabs} initialTab="overview" className="w-full">
        <AnimatedTabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                Here's an overview of your social media performance.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Today's Posts</h3>
                <div className="space-y-3">
                  {dailyPostStatus.map((platform) => (
                    <div key={platform.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6">{platform.icon}</div>
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      {!platform.connected ? (
                         <div className="flex items-center gap-2 text-sm text-muted-foreground">
                           <XCircle className="h-4 w-4" />
                           <span>Not Connected</span>
                         </div>
                      ) : platform.posted ? (
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Posted today</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-amber-600">
                          <AlertTriangle className="h-4 w-4" />
                          <span>No post yet today</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {postedToday.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-4">Today's Post Preview</h3>
                  <div className="space-y-4">
                    {postedToday.map((platform) => platform.post && (
                      <div key={platform.name} className="bg-muted/50 rounded-lg p-3">
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
                              <span className="font-semibold text-foreground">{platform.name}</span>
                            </div>
                            <p className="text-sm line-clamp-3">{platform.post.caption}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                              <div className="flex items-center gap-1">
                                <Heart className="h-3 w-3"/>
                                <span>{platform.post.likes}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3"/>
                                <span>{platform.post.views}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-3 w-3"/>
                                <span>{platform.post.comments}</span>
                              </div>
                            </div>
                          </div>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedTabsContent>
        <AnimatedTabsContent value="tiktok">
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
              <Button>
                <Video className="mr-2 h-4 w-4" /> Post Video
              </Button>
            </CardContent>
          </Card>
        </AnimatedTabsContent>
        <AnimatedTabsContent value="instagram">
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
              <Button>
                <Video className="mr-2 h-4 w-4" /> Post Video
              </Button>
            </CardContent>
          </Card>
        </AnimatedTabsContent>
        <AnimatedTabsContent value="facebook">
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
            <CardContent className="flex flex-col items-center justify-center text-center p-8">
              <p className="text-muted-foreground mb-4">
                Kaitkan akun Facebook Anda untuk melihat data.
              </p>
              <Button variant="destructive">Kaitkan Akun API</Button>
            </CardContent>
          </Card>
        </AnimatedTabsContent>
      </AnimatedTabs>
    </>
  );
}
