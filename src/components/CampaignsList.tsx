import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CampaignProps {
  title: string;
  subtitle: string;
  iconBg: string;
  icon: string;
  inboxCount: number;
  clockCount: number;
  status: string;
  stats: {
    delivered: string;
    opened: string;
    clicked: string;
    converted: string;
  };
}

function CampaignCard({
  title,
  subtitle,
  iconBg,
  icon,
  inboxCount,
  clockCount,
  status,
  stats,
}: CampaignProps) {
  return (
    <Card className="rounded-xl p-5 shadow-sm border-slate-200">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}
          >
            <img src={icon} alt="Campaign Icon" className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500 truncate w-75 md:w-112.5">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-500 text-sm">
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

          <Badge
            variant="outline"
            className="flex items-center gap-1.5 border-emerald-200 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium shadow-none hover:bg-emerald-50"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            {status}
          </Badge>

          <img
            src="/body/dots.svg"
            alt="Menu"
            className="w-4 h-4 opacity-40 cursor-pointer"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 divide-x divide-slate-200 border-t border-slate-100 pt-5">
        <div className="flex flex-col items-center justify-center">
          <span className="font-semibold text-slate-900">
            {stats.delivered}
          </span>
          <span className="text-xs text-slate-500 mt-1">Delivered</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-semibold text-slate-900">{stats.opened}</span>
          <span className="text-xs text-slate-500 mt-1">Opened</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-semibold text-slate-900">{stats.clicked}</span>
          <span className="text-xs text-slate-500 mt-1">Clicked</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-semibold text-slate-900">
            {stats.converted}
          </span>
          <span className="text-xs text-slate-500 mt-1">Converted</span>
        </div>
      </div>
    </Card>
  );
}

const campaignsData: CampaignProps[] = [
  {
    title: "Special Offers for Loyal Customers",
    subtitle:
      "Thank you for being our loyal customer! As a token of our appreciation, we...",
    iconBg: "bg-indigo-600",
    icon: "/body/bookmark.svg",
    inboxCount: 2,
    clockCount: 4,
    status: "Running",
    stats: {
      delivered: "5.72K",
      opened: "60.5%",
      clicked: "17.7%",
      converted: "1.2%",
    },
  },
  {
    title: "Customer Feedback Request",
    subtitle:
      "We would love to hear your thoughts! Please take a moment to complete o...",
    iconBg: "bg-pink-500",
    icon: "/body/message.svg",
    inboxCount: 2,
    clockCount: 2,
    status: "Running",
    stats: {
      delivered: "4.82K",
      opened: "34.5%",
      clicked: "6.9%",
      converted: "2.3%",
    },
  },
  {
    title: "Product Launch Announcement",
    subtitle:
      "We are excited to introduce our latest product, Masterclass level! Enjoy inn...",
    iconBg: "bg-teal-400",
    icon: "/body/flame.svg",
    inboxCount: 3,
    clockCount: 3,
    status: "Running",
    stats: {
      delivered: "8.65K",
      opened: "72.5%",
      clicked: "17.7%",
      converted: "1.2%",
    },
  },
  {
    title: "Weekly Newsletter",
    subtitle:
      "Hi mate! Here is your weekly newsletter with the latest news, interesting art...",
    iconBg: "bg-blue-500",
    icon: "/body/mail2.svg",
    inboxCount: 5,
    clockCount: 5,
    status: "Running",
    stats: {
      delivered: "7.98K",
      opened: "81.3%",
      clicked: "19.2%",
      converted: "1.8%",
    },
  },
];

export default function CampaignsList() {
  return (
    <div className="flex flex-col gap-4 pb-10">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-slate-900">24 Campaigns</h2>

        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            className="flex items-center gap-1 px-3 py-1.5 text-sm text-slate-700 shadow-none font-normal h-auto"
          >
            Metric Definition
            <img
              src="/body/question.svg"
              alt="question"
              className="w-4 h-4 opacity-60"
            />
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-none font-normal h-auto"
          >
            <img
              src="/body/calendar.svg"
              alt="Calendar"
              className="w-4 h-4 opacity-60"
            />
            19 June 2024 - 27 June 2024
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {campaignsData.map((campaign, index) => (
          <CampaignCard
            key={index}
            title={campaign.title}
            subtitle={campaign.subtitle}
            iconBg={campaign.iconBg}
            icon={campaign.icon}
            inboxCount={campaign.inboxCount}
            clockCount={campaign.clockCount}
            status={campaign.status}
            stats={campaign.stats}
          />
        ))}
      </div>
    </div>
  );
}
