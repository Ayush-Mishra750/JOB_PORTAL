import { Compass, List } from "lucide-react";
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

const SidebarRoute = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isAdminPage = pathname.startsWith("/admin");
  const routes = isAdminPage ? adminRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarRouteItem key={route.href} />
      ))}
    </div>
  );
};

export default SidebarRoute;
