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
              <span>TikTok</span>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
              <span>Instagram</span>
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
              <span>Facebook</span>
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
