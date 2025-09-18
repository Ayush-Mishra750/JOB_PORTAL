'use client'
import { icons } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'
import { Interface } from 'readline'


type Interface={
    icons:string,
    label:string,
    href:string
}
const SidebarRouteItem = ({icon:Icon,label,href}:SideBarRouteItemProps) => {
    const pathName=usePathname();
    const router=useRouter();
    const isActive=pathName==='/'
  return (
    <div>
        
      hello
    </div>
  )
}

export default SidebarRouteItem
