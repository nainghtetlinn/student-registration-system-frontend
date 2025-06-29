import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

export const AppSidebarGroup = ({
  label,
  items,
}: {
  label: string
  items: { name: string; url: string; icon: LucideIcon }[]
}) => {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>{label}</SidebarGroupLabel>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  )
}
