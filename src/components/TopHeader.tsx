import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TopHeader() {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b border-slate-200 bg-white shrink-0">
      <div className="relative w-full max-w-md">
        <img
          src="/Header/Search.svg"
          alt="Search"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"
        />
        <Input
          type="text"
          placeholder="Filter by name or description..."
          className="w-full pl-10 h-10 rounded-lg border-slate-200 bg-white text-sm shadow-none focus-visible:ring-indigo-600 focus-visible:ring-offset-0"
        />
      </div>

      <Button
        variant="outline"
        size="icon"
        className="rounded-xl h-10 w-10 ml-4 border-slate-200 bg-white hover:bg-slate-50 shrink-0 shadow-none"
      >
        <img
          src="/Header/Bell.svg"
          alt="Notification"
          className="w-5 h-5 opacity-60"
        />
      </Button>
    </div>
  );
}
