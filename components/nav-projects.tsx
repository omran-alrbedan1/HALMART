"use client";

import Image from "next/image";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavProjects({
  navItems,
}: {
  navItems: {
    name: string;
    url: string;
    icon: string;
    isActive?: boolean;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu>
        {navItems.map((item) => (
          <SidebarMenuItem key={item.name} className="p-1">
            <SidebarMenuButton
              asChild
              className={
                item.isActive
                  ? "bg-secondary  dark:bg-gray-300 text-primary p-2"
                  : ""
              }
            >
              <Link href={item.url} className="p-6 hover:!text-primary">
                <Image src={item.icon} alt={item.name} width={24} height={24} />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
