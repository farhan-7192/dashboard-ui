import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

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
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-900">{label}</span>

      <Select>
        <SelectTrigger className="w-full h-10 px-3 py-2 border-slate-200 rounded-lg bg-white shadow-none hover:bg-slate-50 transition-colors focus:ring-indigo-600 text-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <img
              src={icon}
              alt={label}
              className="w-4 h-4 shrink-0 opacity-50"
            />
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>

        <SelectContent className="rounded-lg border-slate-200 shadow-md">
          {options.map((option, index) => (
            <SelectItem
              key={index}
              value={option}
              className="rounded-md cursor-pointer hover:bg-slate-50 focus:bg-slate-50 focus:text-indigo-700 text-sm"
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
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateCampaign = async () => {
    if (!title) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, subtitle }),
      });

      if (response.ok) {
        setIsOpen(false);
        setTitle("");
        setSubtitle("");
        window.location.reload();
      } else {
        console.error("Failed to create campaign");
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Campaigns</h1>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg gap-2 h-10 px-4 shadow-sm font-medium transition-colors">
              <span className="text-lg leading-none">+</span> Create Campaign
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-106.25 bg-white rounded-xl border-slate-200 shadow-lg p-6">
            <DialogHeader className="mb-2">
              <DialogTitle className="text-xl font-bold text-slate-900">
                Create New Campaign
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-5 py-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Campaign Title
                </label>
                <Input
                  placeholder="e.g. Summer Flash Sale"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded-lg border-slate-200 focus-visible:ring-indigo-600 focus-visible:ring-offset-0 placeholder:text-slate-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">
                  Subtitle / Description
                </label>
                <Input
                  placeholder="Describe your campaign objective..."
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="rounded-lg border-slate-200 focus-visible:ring-indigo-600 focus-visible:ring-offset-0 placeholder:text-slate-400"
                />
              </div>
            </div>

            <DialogFooter className="mt-6 gap-2 sm:gap-0">
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border-slate-200 text-slate-700 hover:bg-slate-50 font-medium cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateCampaign}
                disabled={isSubmitting || !title}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
              >
                {isSubmitting ? "Saving..." : "Save Campaign"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-4 gap-6">
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
