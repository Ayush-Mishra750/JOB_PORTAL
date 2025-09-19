"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"; // ✅ use proper type for icons
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SidebarRouteItemProps {
  icon: LucideIcon; // ✅ icon should be a React component (from lucide-react)
  label: string;
  href: string;
}

const SidebarRouteItem = ({
  icon: Icon,
  label,
  href,
}: SidebarRouteItemProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const isActive =
    (pathName === "/" && href === "/") ||
    pathName === href ||
    pathName?.startsWith(`${href}/`);
  //  console.log(isActive)
  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex gap-x-2 text-neutral-500 items-center text-sm font-[500] pl-5 transition-all hover:text-neutral-800 hover:bg-neutral-400/20",
        isActive &&
          "text-purple-700 bg-purple-200/20 hover:text-purple-700 hover:bg-purple-700/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size={22}
        className={cn(" text-neutral-500",isActive && " text-purple-700")} />
        {label}
      </div>
      {/* highlighter color */}
      <div 
      className={cn("ml-auto opacity-0 border-2 border-purple-700 h-full transition-all", isActive &&  "opacity-100")}>

      </div>
    </button>
  );
};

export default SidebarRouteItem;
