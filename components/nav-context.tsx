"use client"

import * as React from "react"
import {
  RiTerminalBoxLine,
  RiRobotLine,
  RiBookOpenLine,
  RiCropLine,
  RiSettingsLine,
} from "@remixicon/react"
import { HomeIcon } from "lucide-react"
import {
  
  RiHome4Line,
  RiUser3Line,
  
  RiCodeBoxLine,
  RiArticleLine,
  RiMailLine,
} from "@remixicon/react";
export type NavItem = {
  title: string
  url: string
  icon: React.ReactNode
  items: { title: string; url: string ,icon: React.ReactNode }[]
}

export const navMain: NavItem[] = [
  {
    title: "Home",
    url: "#",
    icon: <RiTerminalBoxLine />,
items: [
  {
    title: "Home",
    url: "/",
    icon: <RiHome4Line />,
  },
  {
    title: "About",
    url: "/about",
    icon: <RiUser3Line />,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: <RiUser3Line />,
  },
  {
    title: "Skills",
    url: "/skills",
    icon: <RiCodeBoxLine />,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: <RiArticleLine />,
  },
  {
    title: "Contacts",
    url: "/contact",
    icon: <RiMailLine />,
  },
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
    title: "Upcoming Features",
    url: "#",
    icon: <RiCropLine />,
    items: [
      { title: "Design Engineering", url: "#" },
      { title: "Sales & Marketing", url: "#" },
      { title: "Travel", url: "#" },
    ],
  },
]

export const navFooter: NavItem[] = [
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: <RiSettingsLine />,
  //   items: [
  //     { title: "General", url: "#" },
  //     { title: "Team", url: "#" },
  //     { title: "Billing", url: "#" },
  //     { title: "Limits", url: "#" },
  //   ],
  // },
]

type NavContextValue = {
  activeItem: NavItem
  setActiveItem: (item: NavItem) => void
}

const NavContext = React.createContext<NavContextValue | null>(null)

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = React.useState<NavItem>(navMain[0])
  return (
    <NavContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </NavContext.Provider>
  )
}

export function useNav() {
  const ctx = React.useContext(NavContext)
  if (!ctx) throw new Error("useNav must be used inside a <NavProvider>")
  return ctx
}