import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CampaignCard from "./CampaignCard";

interface CampaignData {
  id: number;
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
}

export default function CampaignsList() {
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/campaigns")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          theme: item.theme,
          type: item.type,
          inboxCount: item.inboxCount,
          clockCount: item.clockCount,
          status: item.status,
          stats: {
            delivered: item.delivered,
            opened: item.opened,
            clicked: item.clicked,
            converted: item.converted,
          },
        }));

        setCampaigns(formattedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
        setIsLoading(false);
      });
  }, []);

  const handleUpdateStatus = async (id: number, newStatus: string) => {
    try {
      setCampaigns((prev) =>
        prev.map((campaign) =>
          campaign.id === id ? { ...campaign, status: newStatus } : campaign,
        ),
      );

      await fetch(`http://localhost:5000/api/campaigns/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (error) {
      console.error("Failed to update campaign status:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 pb-10">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold text-base text-slate-900">
          {campaigns.length} Campaigns
        </h2>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-500 shadow-none font-normal h-auto hover:bg-transparent"
          >
            Metrics definitions
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
        {isLoading ? (
          <div className="text-slate-500 text-sm py-4">
            Please Wait. Loading Campaigns...
          </div>
        ) : (
          campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              {...campaign}
              onUpdateStatus={handleUpdateStatus}
            />
          ))
        )}
      </div>
    </div>
  );
}
