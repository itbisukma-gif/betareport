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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.92-2.3-4.45-2.2-6.87.09-1.88.81-3.75 2.14-5.02 1.32-1.27 3.1-1.92 4.86-1.96.11 1.23.04 2.47.01 3.71-.64.01-1.28.02-1.93.02-.21 1.49-.56 2.99-.92 4.48-.95.12-1.92.3-2.8.69.19-4.32.29-8.65.48-12.98.01-.22.01-.45.02-.67.13-1.4.79-2.77 1.88-3.66.99-.86 2.34-1.34 3.71-1.35.01.02.01.02.01.02Z"/></svg>
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
