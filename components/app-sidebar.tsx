"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { activeIcons, icons } from "@/constants/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { images } from "@/constants/images";
import { useTheme } from "next-themes";

const data = {
  user: {
    name: "Omran Alrbedan",
    email: "Omran@example.com",
    avatar: "/images/HAL MART.png",
  },

  navItems: [
    {
      name: "الرئيسية",
      url: "/home",
      icon: icons.home,
      activeIcon: activeIcons.activeHome,
    },
    {
      name: "المعاملات",
      url: "/payments",
      icon: icons.payments,
      activeIcon: activeIcons.activePayments,
    },
    {
      name: "الموردون",
      url: "/suppliers",
      icon: icons.suppliers,
      activeIcon: activeIcons.activeSuppliers,
    },
    {
      name: "الزبائن",
      url: "/customers",
      icon: icons.users,
      activeIcon: activeIcons.activeUsers,
    },
    {
      name: "سجل الإجراءات",
      url: "/history",
      icon: icons.clock,
      activeIcon: activeIcons.activeClock,
    },
    {
      name: "المنتجات",
      url: "/products",
      icon: icons.packages,
      activeIcon: activeIcons.activePackages,
    },
    {
      name: "التقارير",
      url: "/reports",
      icon: icons.pieChart,
      activeIcon: activeIcons.activePieChart,
    },
    {
      name: "الإعدادات",
      url: "/settings",
      icon: icons.settings,
      activeIcon: activeIcons.activeSettings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { theme } = useTheme(); // Get current theme

  const navItemsWithActiveState = data.navItems.map((item) => ({
    ...item,
    isActive: pathname === item.url,
    icon: pathname === item.url ? item.activeIcon : item.icon,
  }));

  // Choose logo based on theme
  const logo = theme === "dark" ? images.logo2 : images.logo;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader
        className={cn(
          "mx-auto w-full text-center mt-32 my-2 text-3xl font-extrabold text-primary"
        )}
      >
        <Image
          src={logo}
          height={100}
          width={200}
          alt="logo"
          className="mt-3"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects navItems={navItemsWithActiveState} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
