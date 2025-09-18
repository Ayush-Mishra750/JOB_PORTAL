'use client'
import { Image } from "lucide-react";
import React from "react";
import Logo from "./logo";
import SidebarRoute from "./sidebar-route";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white">
      <div className="p-2">
        {/* Logo */}
        <Logo  />
      </div>

      {/* sidebar routes */}
<div className="flex flex-col w-full">
  <SidebarRoute/>
</div>
    </div>
  );
};

export default Sidebar;
