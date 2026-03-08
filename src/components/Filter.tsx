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
    <div
      className={`
        flex
        flex-col
        gap-1.5
      `}
    >
      <span
        className={`
          text-xs
          font-medium
          text-slate-900
        `}
      >
        {label}
      </span>

      <Select>
        <SelectTrigger
          className={`
            w-full
            h-10
            px-3
            py-2
            border-slate-200
            rounded-lg
            bg-white
            shadow-none
            hover:bg-slate-50
            transition-colors
            focus:ring-indigo-600
            text-sm
          `}
        >
          <div
            className={`
              flex
              items-center
              gap-2
              text-slate-600
            `}
          >
            <img
              src={icon}
              alt={label}
              className="w-4 h-4 shrink-0 opacity-50"
            />
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>

        <SelectContent
          className={`
            rounded-lg
            border-slate-200
            shadow-md
          `}
        >
          {options.map((option, index) => (
            <SelectItem
              key={index}
              value={option}
              className={`
                rounded-md
                cursor-pointer
                hover:bg-slate-50
                focus:bg-slate-50
                focus:text-indigo-700
                text-sm
              `}
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
    <div
      className={`
        flex
        flex-col
        gap-6
        mb-8
      `}
    >
      <div
        className={`
          flex
          items-center
          justify-between
        `}
      >
        <h1
          className={`
            text-2xl
            font-bold
            text-slate-900
          `}
        >
          Campaigns
        </h1>
        <Button
          className={`
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            rounded-lg
            gap-2
            h-10
            px-4
            shadow-sm
            font-medium
          `}
        >
          <span className="text-lg leading-none">+</span> Create Campaign
        </Button>
      </div>

      <div
        className={`
          grid
          grid-cols-4
          gap-6
        `}
      >
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
