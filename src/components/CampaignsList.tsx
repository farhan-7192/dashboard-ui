import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <Card className="rounded-xl p-0 shadow-none border border-slate-200 overflow-hidden bg-white">
      <div className="flex justify-between items-start p-5">
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}
          >
            <img src={icon} alt="Campaign Icon" className="w-6 h-6 invert" />
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

          <div className="flex items-center gap-1.5 border border-emerald-200 bg-white text-emerald-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            {status}
          </div>

          <img
            src="/body/dots.svg"
            alt="Menu"
            className="w-4 h-4 opacity-40 cursor-pointer ml-1"
          />
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
        <h2 className="font-semibold text-base text-slate-900">24 Campaigns</h2>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-500 shadow-none font-normal h-auto hover:bg-transparent"
          >
            Matrics definitions
            <img
              src="/body/question.svg"
              alt="question"
              className="w-3.5 h-3.5 opacity-60"
            />
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-none font-medium h-auto"
          >
            <img
              src="/body/calendar.svg"
              alt="Calendar"
              className="w-3.5 h-3.5 opacity-60"
            />
            19 June 2024 - 27 June 2024
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {campaignsData.map((campaign, index) => (
          <CampaignCard key={index} {...campaign} />
        ))}
      </div>
    </div>
  );
}
