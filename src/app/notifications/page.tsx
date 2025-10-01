import { BellRing, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotificationsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold font-headline">Notifications</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Here are your recent updates.
      </p>
      <div className="mt-8 space-y-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Feature</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              You can now switch to dark mode.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Welcome!</CardTitle>
            <BellRing className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Thanks for joining PastelNav.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
