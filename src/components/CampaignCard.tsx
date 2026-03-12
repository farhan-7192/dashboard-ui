import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface CampaignCardProps {
  id?: number;
  title: string;
  subtitle: string;
  theme: string;
  type: string;
  inboxCount: number;
  clockCount: number;
  status: string;
  stats: {
    delivered: string;
    opened: string;
    clicked: string;
    converted: string;
  };
  onUpdateStatus: (id: number, newStatus: string) => void;
}

const renderIcon = (type: string) => {
  switch (type) {
    case "bookmark":
      return (
        <img src="/body/bookmark.svg" alt="Bookmark" className="w-6 h-6" />
      );
    case "message":
      return <img src="/body/message.svg" alt="Message" className="w-6 h-6" />;
    default:
      return (
        <img src="/body/bookmark.svg" alt="Campaign Icon" className="w-6 h-6" />
      );
  }
};

const getBgColor = (theme: string) => {
  switch (theme) {
    case "indigo":
      return "bg-indigo-600";
    case "pink":
      return "bg-pink-500";
    case "teal":
      return "bg-teal-400";
    default:
      return "bg-slate-800";
  }
};

const getStatusStyles = (status: string) => {
  if (status === "Running") {
    return {
      wrapper: "border-emerald-200 text-emerald-600",
      dot: "bg-emerald-500",
    };
  }
  if (status === "Pending") {
    return {
      wrapper: "border-orange-200 text-orange-600",
      dot: "bg-orange-500",
    };
  }
  return {
    wrapper: "border-slate-200 text-slate-600",
    dot: "bg-slate-400",
  };
};

export default function CampaignCard({
  id,
  title,
  subtitle,
  theme,
  type,
  inboxCount,
  clockCount,
  status,
  stats,
  onUpdateStatus,
}: CampaignCardProps) {
  const statusStyles = getStatusStyles(status);

  return (
    <Card className="rounded-xl p-0 shadow-none border border-slate-200 overflow-hidden bg-white">
      <div className="flex justify-between items-start p-5">
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getBgColor(theme)}`}
          >
            {renderIcon(type)}
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <h3 className="font-semibold text-base text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500 truncate w-80 md:w-96">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-slate-500 text-sm mt-1">
          <div className="flex items-center gap-1.5">
            <img
              src="/body/mail.svg"
              alt="Inbox"
              className="w-4 h-4 opacity-60"
            />
            {inboxCount}
          </div>
          <div className="flex items-center gap-1.5">
            <img
              src="/body/clock.svg"
              alt="Clock"
              className="w-4 h-4 opacity-60"
            />
            {clockCount}
          </div>

          <div
            className={`flex items-center gap-1.5 border bg-white px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles.wrapper}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${statusStyles.dot}`}
            ></span>
            {status}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <img
                src="/body/dots.svg"
                alt="Menu"
                className="w-4 h-4 opacity-40 cursor-pointer ml-1 hover:opacity-80 transition-opacity"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-36 rounded-xl shadow-md border-slate-200 p-1"
            >
              <DropdownMenuItem
                onClick={() => id && onUpdateStatus(id, "Running")}
                className="cursor-pointer rounded-lg text-sm text-slate-700 hover:bg-slate-50 focus:bg-slate-50 focus:text-emerald-600"
              >
                Set to Running
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => id && onUpdateStatus(id, "Pending")}
                className="cursor-pointer rounded-lg text-sm text-slate-700 hover:bg-slate-50 focus:bg-slate-50 focus:text-orange-600"
              >
                Set to Pending
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-4 border-t border-slate-100 py-4 px-5">
        {[
          { label: "Delivered", value: stats.delivered },
          { label: "Opened", value: stats.opened },
          { label: "Clicked", value: stats.clicked },
          { label: "Converted", value: stats.converted },
        ].map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center ${index !== 0 ? "border-l border-slate-100" : ""}`}
          >
            <span className="text-lg font-semibold text-slate-900">
              {stat.value}
            </span>
            <span className="text-xs text-slate-500 mt-0.5">{stat.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
