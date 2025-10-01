import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchPage() {
  return (
    <>
      <h1 className="text-4xl font-bold font-headline">Search</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Find what you're looking for.
      </p>
      <div className="relative mt-8">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search..." className="pl-10 text-base" />
      </div>
    </>
  );
}
