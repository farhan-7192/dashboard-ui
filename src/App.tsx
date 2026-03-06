import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import AdBanner from "./components/AdBanner";
import Filter from "./components/Filter";
import Toggle from "./components/Toggle";
import CampaignsList from "./components/CampaignsList";

export default function App() {
  return (
    <SidebarProvider className="bg-slate-50 overflow-hidden">
      <Sidebar />

      <main className="flex-1 h-screen overflow-y-auto px-8 py-6 bg-white rounded-tl-3xl border-t border-l border-slate-200 shadow-sm">
        <TopHeader />
        <AdBanner />
        <Filter />
        <Toggle />
        <CampaignsList />
      </main>
    </SidebarProvider>
  );
}
