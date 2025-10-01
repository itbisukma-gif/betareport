import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Settings, LogOut } from "lucide-react";

export default function ProfilePage() {
  return (
    <>
      <h1 className="text-4xl font-bold font-headline">Profile</h1>
      <div className="flex flex-col items-center mt-8">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://picsum.photos/seed/10/200" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-2xl font-semibold">User Name</h2>
        <p className="text-muted-foreground">user@email.com</p>
      </div>

      <Separator className="my-8" />
      
      <div className="space-y-2">
         <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
         </Button>
         <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
         </Button>
      </div>
    </>
  );
}
