import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TopHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="relative flex-1 max-w-3xl">
        <img
          src="/Header/Search.svg"
          alt="Search"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60"
        />
        <Input
          type="text"
          placeholder="Filter by name or description..."
          className="w-full pl-12 h-11 rounded-xl border-slate-200 bg-white text-sm shadow-sm focus-visible:ring-indigo-600 focus-visible:ring-offset-0"
        />
      </div>

      <Button
        variant="outline"
        size="icon"
        className="rounded-xl h-11 w-11 ml-4 border-slate-200 bg-white hover:bg-slate-50 shrink-0 shadow-sm"
      >
        <img src="/Header/Bell.svg" alt="Notification" className="w-5 h-5" />
      </Button>
    </div>
  );
}
