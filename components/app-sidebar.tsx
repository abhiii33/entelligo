"use client"

import * as React from "react"
import { RiGalleryLine } from "@remixicon/react"

import { NavUser } from "@/components/nav-user"
import { navMain, navFooter, useNav } from "@/components/nav-context"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpen, toggleSidebar } = useSidebar()
  const { activeItem, setActiveItem } = useNav()

  const handleClick = (item: (typeof navMain)[number]) => {
    if (activeItem.title === item.title) {
      // same icon clicked again — collapse/expand like VS Code
      toggleSidebar()
    } else {
      // different icon — switch panel content and force it open
      setActiveItem(item)
      setOpen(true)
    }
  }

  return (
    <Sidebar
      collapsible="icon"
      className=" border-r bg-background! shrink-0 w-14!  "
      {...props}
    >
     
      {/* <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <RiGalleryLine className="size-4" />
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader> */}

     <SidebarContent>
  <SidebarGroup>
    <SidebarGroupContent className="px-0">
      {/* gap-1 + items-center gives you the evenly-spaced, centered
          rail from your reference mockup instead of edge-to-edge buttons */}
      <SidebarMenu className="items-center gap-1">
        {navMain.map((item) => (
          <SidebarMenuItem key={item.title} className="w-full">
            <SidebarMenuButton
  size="icon"
  tooltip={{ children: item.title, hidden: false }}
  onClick={() => handleClick(item)}
  isActive={activeItem?.title === item.title}
  aria-label={item.title}
  className="
    relative
    mx-auto
    size-10
    rounded-md
    text-slate-500
    transition-all
    duration-200

    hover:bg-[#0F1C2E]
    hover:text-[#00D4FF]

    data-[active=true]:bg-[#0F1C2E]
    data-[active=true]:text-[#00D4FF]

    data-[active=true]:shadow-[inset_0_0_12px_rgba(0,212,255,0.08)]
  "
>
  {item.icon}

  <span className="sr-only">
    {item.title}
  </span>

  {/* Active indicator */}
  {activeItem?.title === item.title && (
    <span
      className="
        absolute
        left-0
        top-1/2
        h-6
        w-[2px]
        -translate-y-1/2
        rounded-r
        bg-[#00D4FF]
        shadow-[0_0_8px_rgba(0,212,255,0.7)]
      "
    />
  )}
</SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          {navFooter.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={{ children: item.title, hidden: false }}
                onClick={() => handleClick(item)}
                isActive={activeItem.title === item.title}
                className="px-2.5 md:px-2"
              >
                {item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}