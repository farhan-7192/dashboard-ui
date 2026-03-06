import { Badge } from "@/components/ui/badge";

const tabs = [
  { label: "Active", count: 24, isActive: true },
  { label: "Completed", count: 179, isActive: false },
  { label: "Draft", count: 3, isActive: false },
];

export default function Toggle() {
  return (
    <div className="flex items-center gap-8 border-b border-slate-200 mb-6">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`flex items-center gap-2 pb-3 mb-px border-b-2 text-sm font-medium transition-colors ${
            tab.isActive
              ? "border-indigo-600 text-indigo-700"
              : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
          }`}
        >
          {tab.label}
          <Badge
            variant="secondary"
            className="bg-slate-100 hover:bg-slate-100 text-slate-500 text-xs py-0.5 px-2 rounded-md font-medium border-none shadow-none"
          >
            {tab.count}
          </Badge>
        </button>
      ))}
    </div>
  );
}