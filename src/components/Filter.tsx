import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterItemProps {
  label: string;
  placeholder: string;
  icon: string;
  options: string[];
}

function FilterDropdown({
  label,
  placeholder,
  icon,
  options,
}: FilterItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-slate-800">{label}</span>

      <Select>
        <SelectTrigger className="w-full h-10 px-4 py-2 border-slate-200 rounded-xl bg-white shadow-none hover:bg-slate-50 transition-colors focus:ring-indigo-600 [&>svg]:opacity-50">
          <div className="flex items-center gap-2 text-slate-500">
            <img src={icon} alt={label} className="w-5 h-5 shrink-0" />
            <SelectValue placeholder={placeholder} className="text-slate-700" />
          </div>
        </SelectTrigger>

        <SelectContent className="rounded-xl border-slate-200 shadow-md">
          {options.map((option, index) => (
            <SelectItem
              key={index}
              value={option}
              className="rounded-lg cursor-pointer hover:bg-slate-50 focus:bg-slate-50 focus:text-indigo-700"
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

const filterOptions = [
  {
    label: "Triggered by",
    placeholder: "All",
    icon: "/Header/Search.svg",
    options: ["All", "User Sign Up", "Product Purchase", "Inactivity"],
  },
  {
    label: "Status",
    placeholder: "Campaign status",
    icon: "/Header/Search.svg",
    options: ["Running", "Draft", "Paused", "completed"],
  },
  {
    label: "Tags",
    placeholder: "Filters by tags...",
    icon: "/Header/Search.svg",
    options: ["Marketing", "Onboarding", "Newsletter", "Retention"],
  },
  {
    label: "Sort by",
    placeholder: "All",
    icon: "/Header/Search.svg",
    options: [
      "Newest First",
      "Oldest First",
      "Highest Conversion",
      "Lowest Conversion",
    ],
  },
];

export default function Filter() {
  return (
    <div className="flex flex-col gap-6 mb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Campaigns</h1>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl gap-2 h-10 px-5 shadow-sm">
          <img src="/Header/Search.svg" alt="Create" className="w-4 h-4" />
          Create Campaign
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filterOptions.map((filter, index) => (
          <FilterDropdown
            key={index}
            label={filter.label}
            placeholder={filter.placeholder}
            icon={filter.icon}
            options={filter.options}
          />
        ))}
      </div>
    </div>
  );
}
