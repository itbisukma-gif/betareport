import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-start h-full">
      <h1 className="text-4xl font-bold font-headline text-foreground">
        Welcome to PastelNav
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a minimalist application demonstrating a native-style bottom
        navigation with a soothing pastel color palette.
      </p>
      <p className="mt-2 text-muted-foreground">
        Navigate using the icons below.
      </p>
      <div className="mt-8 space-y-4">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Heart className="mr-2 h-5 w-5" />
          Get Started
        </Button>
      </div>

      <div className="mt-auto pt-8">
        <h2 className="text-xl font-bold font-headline">Features</h2>
        <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
          <li>Minimalist, clean user interface</li>
          <li>Soothing pastel color scheme</li>
          <li>Native Android-style bottom navigation</li>
          <li>Ample whitespace for a calm experience</li>
        </ul>
      </div>
    </div>
  );
}
