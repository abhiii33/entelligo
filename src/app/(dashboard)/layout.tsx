import { AppSidebar } from "@/components/app-sidebar"
import { SecondarySidebar } from "@/components/secondary-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { NavProvider } from "@/components/nav-context"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavProvider>
    <SidebarProvider className="flex h-screen flex-col overflow-hidden">
      <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-2" />
        <h2 className ="text-lg font-semibold">Portfolio</h2>
        {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
        {/* <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Portfolio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
            
              <BreadcrumbPage>
                <ActiveNavLabel />
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      </header>

      <div className="flex flex-1 min-h-0">
        <AppSidebar />
        <SidebarInset className="flex flex-row min-h-0 overflow-hidden">
          <SecondarySidebar />
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
    </NavProvider>
  )
}