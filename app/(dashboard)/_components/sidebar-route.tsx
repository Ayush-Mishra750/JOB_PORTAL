'use client'
import { Bookmark, Compass, List, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import React from "react";
import SidebarRouteItem from "./sidebar-route-item";

const adminRoutes = [
  {
    icon: List,
    label: "Jobs",
    href: "/admin/jobs",
  },
  {
    icon: List,
    label: "companies",
    href: "/admin/companies",
  },
  {
    icon: Compass,
    label: "Analytics",
    href: "/admin/analytics",
  },
];
const guestRoutes = [
  {
    icon: List,
    label: "Home",
    href: "/",
  },
  {
    icon: Search,
    label: "Search",
    href: "/search",
  },
  {
    icon: Compass,
    label: "Profile",
    href: "/profile",
  },
   {
    icon: Bookmark,
    label: "Saved Jobs",
    href: "/savedjobs",
  },
  
];

const SidebarRoute = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isAdminPage = pathname?.startsWith("/admin");
  console.log(isAdminPage)
  const routes = isAdminPage ? adminRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarRouteItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
      ))}
    </div>
  );
};

export default SidebarRoute;
