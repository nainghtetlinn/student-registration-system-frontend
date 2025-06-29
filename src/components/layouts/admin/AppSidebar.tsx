import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { User2, SquareSlash, ChartPie, UserPlus } from 'lucide-react'
import { AppSidebarGroup } from './AppSidebarGroup'
import { AppSidebarFooter } from './AppSidebarFooter'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/shadcn.jpg',
  },
  register: [
    {
      name: 'Employee',
      url: '/admin/register/employee',
      icon: UserPlus,
    },
    {
      name: 'Student',
      url: '/admin/register/student',
      icon: UserPlus,
    },
  ],
  management: [
    {
      name: 'Reports',
      url: '/admin/reports',
      icon: ChartPie,
    },
  ],
  documents: [
    {
      name: 'Shortcuts',
      url: '/admin/shortcuts',
      icon: SquareSlash,
    },
  ],
}

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar
      collapsible='offcanvas'
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:!p-1.5'
            >
              <a href='/admin'>
                <User2 className='!size-5' />
                <span className='text-base font-semibold'>TUT Admin</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <AppSidebarGroup
          label='Register'
          items={data.register}
        />
        <AppSidebarGroup
          label='Management'
          items={data.management}
        />
        <AppSidebarGroup
          label='Documents'
          items={data.documents}
        />
      </SidebarContent>

      <SidebarFooter>
        <AppSidebarFooter user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
