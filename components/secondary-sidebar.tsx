"use client"

import { useNav } from "@/components/nav-context"
import { SidebarInput, useSidebar } from "@/components/ui/sidebar"

export function SecondarySidebar() {
  const { open } = useSidebar()
  const { activeItem } = useNav()

  if (!open) return null

  return (
    <div className="hidden md:flex min-w-45 shrink-0 flex-col overflow-y-auto border-r bg-background">
      <div className="flex shrink-0 flex-col   p-4">
        <div className="text-foreground text-base font-medium">
          {activeItem.title}
        </div>
        {/* <SidebarInput placeholder="Search..." /> */}
      </div>
      <div className="flex-1 overflow-y-auto">
        {activeItem.items.map((item) => (
          <a
            href={item.url}
            key={item.title}
            className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex gap-4  px-5 py-3 text-sm xl:text-base leading-tight whitespace-nowrap  items-center align-middle [&_svg]:size-5! "
          >
            {item.icon}
            <span className="font-medium">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  )
}