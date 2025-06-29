import { AppHeader } from '@/components/layouts/admin/AppHeader'
import { AppSidebar } from '@/components/layouts/admin/AppSidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'

import { cookies } from 'next/headers'

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true'

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar variant='inset' />

      <SidebarInset>
        <AppHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AdminLayout
