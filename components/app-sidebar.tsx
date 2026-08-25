// "use client"

// import * as React from "react"

// import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
// import { NavUser } from "@/components/nav-user"
// import { TeamSwitcher } from "@/components/team-switcher"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarRail,
// } from "@/components/ui/sidebar"
// import { RiGalleryLine, RiPulseLine, RiCommandLine, RiTerminalBoxLine, RiRobotLine, RiBookOpenLine, RiSettingsLine, RiCropLine, RiPieChartLine, RiMapLine } from "@remixicon/react"

// // This is sample data.
// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   icons:{
//     gallery: <RiGalleryLine />,
//     pulse: <RiPulseLine />,
//     command: <RiCommandLine />,
//     terminal: <RiTerminalBoxLine />,
//     robot: <RiRobotLine />,
//     book: <RiBookOpenLine />,
//     settings: <RiSettingsLine />,
//     crop: <RiCropLine />,
//     pie: <RiPieChartLine />,
//     map: <RiMapLine />
//   },
//   teams: [
//     {
//       name: "Acme Inc",
//       logo: (
//         <RiGalleryLine
//         />
//       ),
//       plan: "Enterprise",
//     },
//     {
//       name: "Acme Corp.",
//       logo: (
//         <RiPulseLine
//         />
//       ),
//       plan: "Startup",
//     },
//     {
//       name: "Evil Corp.",
//       logo: (
//         <RiCommandLine
//         />
//       ),
//       plan: "Free",
//     },
//   ],
//   navMain: [
//     {
//       title: "Playground",
//       url: "#",
//       icon: (
//         <RiTerminalBoxLine
//         />
//       ),
//       isActive: true,
//       items: [
//         {
//           title: "History",
//           url: "#",
//         },
//         {
//           title: "Starred",
//           url: "#",
//         },
//         {
//           title: "Settings",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Models",
//       url: "#",
//       icon: (
//         <RiRobotLine
//         />
//       ),
//       items: [
//         {
//           title: "Genesis",
//           url: "#",
//         },
//         {
//           title: "Explorer",
//           url: "#",
//         },
//         {
//           title: "Quantum",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Documentation",
//       url: "#",
//       icon: (
//         <RiBookOpenLine
//         />
//       ),
//       items: [
//         {
//           title: "Introduction",
//           url: "#",
//         },
//         {
//           title: "Get Started",
//           url: "#",
//         },
//         {
//           title: "Tutorials",
//           url: "#",
//         },
//         {
//           title: "Changelog",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Settings",
//       url: "#",
//       icon: (
//         <RiSettingsLine
//         />
//       ),
//       items: [
//         {
//           title: "General",
//           url: "#",
//         },
//         {
//           title: "Team",
//           url: "#",
//         },
//         {
//           title: "Billing",
//           url: "#",
//         },
//         {
//           title: "Limits",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   projects: [
//     {
//       name: "Design Engineering",
//       url: "#",
//       icon: (
//         <RiCropLine
//         />
//       ),
//     },
//     {
//       name: "Sales & Marketing",
//       url: "#",
//       icon: (
//         <RiPieChartLine
//         />
//       ),
//     },
//     {
//       name: "Travel",
//       url: "#",
//       icon: (
//         <RiMapLine
//         />
//       ),
//     },
//   ],
// }

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar collapsible="icon" {...props}>
//       <SidebarHeader>
//         <TeamSwitcher teams={data.teams} />
//       </SidebarHeader>
//       <SidebarContent>
//         <NavMain items={data.icons} />
//         {/* <NavProjects projects={data.projects} /> */}
//       </SidebarContent>
//       <SidebarFooter>
//         <NavUser user={data.user} />
//       </SidebarFooter>
//       <SidebarRail />
//     </Sidebar>
//   )
// }

"use client"

import * as React from "react"
import {
  RiGalleryLine,
  RiPulseLine,
  RiCommandLine,
  RiTerminalBoxLine,
  RiRobotLine,
  RiBookOpenLine,
  RiSettingsLine,
  RiCropLine,
  RiPieChartLine,
  RiMapLine,
  RiSearchLine,
} from "@remixicon/react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { RiArrowRightSLine } from "@remixicon/react"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarHeader,
  SidebarFooter,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"

// ---- sample data -----------------------------------------------------

type NavItem = {
  title: string
  url: string
  icon: React.ReactNode
  items: { title: string; url: string }[]
}

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: <RiTerminalBoxLine />,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: <RiRobotLine />,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: <RiBookOpenLine />,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: <RiCropLine />,
      items: [
        { title: "Design Engineering", url: "#" },
        { title: "Sales & Marketing", url: "#" },
        { title: "Travel", url: "#" },
      ],
    },
  ] satisfies NavItem[],
  // pinned to the bottom of the activity bar, like Settings/Accounts in VS Code
  navFooter: [
    {
      title: "Settings",
      url: "#",
      icon: <RiSettingsLine />,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ] satisfies NavItem[],
}

// ---- component ---------------------------------------------------------

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpen } = useSidebar()
  const allNav = [...data.navMain, ...data.navFooter]
  const [activeItem, setActiveItem] = React.useState<NavItem>(allNav[0])

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      {/* ACTIVITY BAR — icon-only rail, always visible, never collapses */}
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
      >
        <SidebarHeader>
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
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{ children: item.title, hidden: false }}
                      onClick={() => {
                        setActiveItem(item)
                        setOpen(true)
                      }}
                      isActive={activeItem.title === item.title}
                      className="px-2.5 md:px-2"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            {data.navFooter.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={{ children: item.title, hidden: false }}
                  onClick={() => {
                    setActiveItem(item)
                    setOpen(true)
                  }}
                  isActive={activeItem.title === item.title}
                  className="px-2.5 md:px-2"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* SIDE BAR — content panel, swaps based on the active activity-bar item */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex border-none ">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">
              {activeItem.title}
            </div>
          </div>
          <SidebarInput placeholder="Search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {activeItem.items.map((item) => (
                <a
                  href={item.url}
                  key={item.title}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
                >
                  <span className="font-medium">{item.title}</span>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}