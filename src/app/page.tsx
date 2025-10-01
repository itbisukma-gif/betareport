import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

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
            <CardTitle className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20,6.5a4.23,4.23,0,0,0-4.14-4.23,4,4,0,0,0-3.52,2.09,10.2,10.2,0,0,0-2.34-.33v9.52a2.8,2.8,0,1,1-2.79-2.8h2.14v-2.3H5.38a4.92,4.92,0,1,0,5,4.89V6.66a8.21,8.21,0,0,1,2.23.33A4.27,4.27,0,0,0,20,6.5Z"/></svg>
              TikTok
            </CardTitle>
            <CardDescription>
              Your TikTok performance metrics.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Content for TikTok tab */}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="instagram">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram
            </CardTitle>
            <CardDescription>
              Your Instagram performance metrics.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Content for Instagram tab */}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="facebook">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </CardTitle>
            <CardDescription>
              Your Facebook performance metrics.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Content for Facebook tab */}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}