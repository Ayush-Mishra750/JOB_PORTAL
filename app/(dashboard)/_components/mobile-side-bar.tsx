// "use client";
// import { Home, Briefcase, Bookmark, User } from "lucide-react";
// import { usePathname, useRouter } from "next/navigation";
// import { cn } from "@/lib/utils";

// const MobileNavbar = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   // Define routes here 👇
//   const routes = [
//     { icon: Home, label: "Home", href: "/" },
//     { icon: Briefcase, label: "Jobs", href: "/jobs" },
//     { icon: Bookmark, label: "Saved", href: "/saved" },
//     { icon: User, label: "Profile", href: "/profile" },
//   ];

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2 md:hidden">
//       {routes.map((route, idx) => {
//         const isActive =
//           (pathname === "/" && route.href === "/") ||
//           pathname === route.href ||
//           pathname?.startsWith(`${route.href}/`);

//         return (
//           <button
//             key={idx}
//             onClick={() => router.push(route.href)}
//             className="flex flex-col items-center text-xs"
//           >
//             <route.icon
//               size={22}
//               className={cn(
//                 "text-neutral-500",
//                 isActive && "text-purple-700"
//               )}
//             />
//             <span
//               className={cn(
//                 "text-neutral-500",
//                 isActive && "text-purple-700 font-bold"
//               )}
//             >
//               {route.label}
//             </span>
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default MobileNavbar;

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Sidebar } from "lucide-react";

import React from "react";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-5 transition cursor-pointer">
        <Menu />
      </SheetTrigger>

      <SheetContent className="" side="left">
        <Sidebar className="bg-white p-0 " />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
