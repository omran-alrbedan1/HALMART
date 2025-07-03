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

type Role = "admin" | "manager" | "user";

interface NavItem {
  name: string;
  url: string;
  icon: string;
  activeIcon: string;
}

interface UserData {
  name: string;
  email: string;
  avatar: string;
  role: Role;
}

const roleBasedNavItems: Record<Role, NavItem[]> = {
  admin: [
    {
      name: "الشركات",
      url: "/admin/companies",
      icon: icons.building,
      activeIcon: activeIcons.activeBuilding,
    },
    {
      name: "المستخدمين",
      url: "/users",
      icon: icons.users,
      activeIcon: activeIcons.activeUsers,
    },
    {
      name: "الإعدادات",
      url: "/settings",
      icon: icons.settings,
      activeIcon: activeIcons.activeSettings,
    },
  ],
  manager: [
    {
      name: "التقارير",
      url: "/reports",
      icon: icons.pieChart,
      activeIcon: activeIcons.activePieChart,
    },
  ],
  user: [
    {
      name: "الرئيسية",
      url: "/home",
      icon: icons.home,
      activeIcon: activeIcons.activeHome,
    },
  ],
};

const data = {
  user: {
    name: "Omran Alrbedan",
    email: "Omran@example.com",
    avatar: "/images/HAL MART.png",
    role: "admin" as Role,
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { theme } = useTheme();

  const navItemsForCurrentRole = roleBasedNavItems[data.user.role];

  const navItemsWithActiveState = navItemsForCurrentRole.map((item) => ({
    ...item,
    isActive: pathname === item.url,
    icon: pathname === item.url ? item.activeIcon : item.icon,
  }));

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
