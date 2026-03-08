import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import AdBanner from "./components/AdBanner";
import Filter from "./components/Filter";
import Toggle from "./components/Toggle";
import CampaignsList from "./components/CampaignsList";

export default function App() {
  return (
    <SidebarProvider className="bg-white overflow-hidden flex h-screen w-full">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 bg-white border-l border-slate-200">
        <TopHeader />
        <main className="flex-1 overflow-y-auto px-8 py-6">
          <AdBanner />
          <Filter />
          <Toggle />
          <CampaignsList />
        </main>
      </div>
    </SidebarProvider>
  );
}
