'use client'

import { ToggleDarkMode } from '@/components/features/theme/ToggleDarkMode'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/seperator'
import { SidebarTrigger } from '@/components/ui/sidebar'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const AppHeader = () => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  return (
    <header className='flex items-center p-2 border-b'>
      <div className='flex-1 flex items-center px-4 lg:px-6'>
        <SidebarTrigger />
        <Separator
          orientation='vertical'
          className='mx-2 data-[orientation=vertical]:h-6'
        />
        <Breadcrumb className='capitalize'>
          <BreadcrumbList>
            {pathNames.map((path, i) => {
              return (
                <React.Fragment key={i}>
                  {i + 1 == pathNames.length ? (
                    <BreadcrumbItem>
                      <BreadcrumbPage>{path}</BreadcrumbPage>
                    </BreadcrumbItem>
                  ) : (
                    <>
                      <BreadcrumbItem className='hidden md:block'>
                        <BreadcrumbLink asChild>
                          <Link
                            href={'/' + pathNames.slice(0, i + 1).join('/')}
                          >
                            {path}
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className='hidden md:block' />
                    </>
                  )}
                </React.Fragment>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ToggleDarkMode />
    </header>
  )
}
