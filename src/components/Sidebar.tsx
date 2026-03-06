import React from "react";
import {
  Sidebar as ShadcnSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";

interface MenuItem {
  label: string;
  icon: string;
  rightIcon?: string;
  status?: string;
}

const menuGroups: MenuItem[][] = [
  [
    { label: "Dashboard", icon: "/SideBar/dashboard.svg" },
    { label: "Analysis", icon: "/SideBar/analysis.svg" },
  ],
  [
    { label: "Campaigns", status: "active", icon: "/SideBar/campaigns.svg" },
    { label: "Broadcasts", icon: "/SideBar/broadcasts.svg" },
    { label: "Transactional", icon: "/SideBar/transactional.svg" },
    { label: "Deliveries & Drafts", icon: "/SideBar/deliveries.svg" },
  ],
  [
    { label: "People", icon: "/SideBar/people.svg" },
    { label: "Custom Objects", icon: "/SideBar/custom.svg" },
    { label: "Segments", icon: "/SideBar/segments.svg" },
    { label: "Activity Logs", icon: "/SideBar/activity.svg" },
    {
      label: "Data & Integrations",
      rightIcon: "/SideBar/down-arrow.svg",
      icon: "/SideBar/data.svg",
    },
  ],
  [
    {
      label: "Content",
      rightIcon: "/SideBar/down-arrow.svg",
      icon: "/SideBar/content.svg",
    },
  ],
];

export default function Sidebar() {
  return (
    <ShadcnSidebar
      className="bg-slate-50 border-r border-slate-200 h-screen flex flex-col"
      collapsible="none"
    >
      <SidebarHeader className="h-20 flex flex-row items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <img
            src="/SideBar/logo.svg"
            alt="Level Up Logo"
            className="w-8 h-8"
          />
          <span className="font-semibold text-slate-900 text-lg">Level Up</span>
        </div>
        <img
          src="/SideBar/down-arrow.svg"
          alt="menu"
          className="w-4 h-4 opacity-40"
        />
      </SidebarHeader>

      <SidebarContent className="px-4 py-2 gap-0 flex-1 overflow-y-auto">
        {menuGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <SidebarGroup className="p-0">
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.map((item, itemIndex) => (
                    <SidebarMenuItem key={itemIndex}>
                      <SidebarMenuButton
                        isActive={item.status === "active"}
                        className={`py-1.5 px-3 h-auto ${
                          item.status === "active"
                            ? "bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 hover:text-indigo-800"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <img
                          src={item.icon}
                          alt={item.label}
                          className={`w-5 h-5 ${item.status === "active" ? "" : "opacity-50"}`}
                        />
                        <span className="text-sm ml-1">{item.label}</span>
                        {item.rightIcon && (
                          <img
                            src={item.rightIcon}
                            alt="arrow"
                            className="w-4 h-4 ml-auto opacity-40"
                          />
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {groupIndex < menuGroups.length - 1 && (
              <SidebarSeparator className="my-2 bg-slate-200 mx-0" />
            )}
          </React.Fragment>
        ))}
      </SidebarContent>

      <SidebarFooter className="mt-auto p-4 shrink-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="py-1.5 px-3 h-auto text-slate-600 hover:bg-slate-100">
              <img
                src="/SideBar/settings.svg"
                alt="Settings"
                className="w-5 h-5 opacity-50"
              />
              <span className="text-sm ml-1">Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </ShadcnSidebar>
  );
}
