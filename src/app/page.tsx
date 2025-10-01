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
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="tiktok">TikTok</TabsTrigger>
        <TabsTrigger value="instagram">Instagram</TabsTrigger>
        <TabsTrigger value="facebook">Facebook</TabsTrigger>
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
            <CardTitle>TikTok</CardTitle>
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
            <CardTitle>Instagram</CardTitle>
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
            <CardTitle>Facebook</CardTitle>
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
