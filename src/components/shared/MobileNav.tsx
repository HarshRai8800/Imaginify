"use client"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {   Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger } from '../ui/sheet'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

function MobileNav() {
    const pathname = usePathname()
  return (
    <header className='header '>
<Link href={"/"}
className='flex items-centre gap-2 md:py-2'>
    <Image
    src="/assets/images/logo-text.svg"
    alt="logo"
    width={180}
    height={28}
    />
    
    <nav className='flex absolute right-8 gap-2'>
    <SignedIn>
        <UserButton afterSignOutUrl='/'/>
        <Sheet>
  <SheetTrigger>
<Image
src={"/assets/icons/menu.svg"}
alt='menu'
width={32}
height={32}
className='cursor-pointer'
/>
  </SheetTrigger>
  <SheetContent className="sheet-content sm:w-64">
    <SheetTitle></SheetTitle>
    <>
    <Image
    src={"/assets/images/logo-text.svg"}
    alt='logo'
    width={152}
    height={23}
    />
    <ul className='header-nav_elements'>
{navLinks.slice(0,6).map((link)=>{
const isActive = link.route===pathname
return (
    <li key={link.route} className={`${isActive&&'gradient-text'}p-18 flex whitespace-nowrap w-full hover:bg-gray-200 rounded-full text-dark-700 `}>
<Link className='sidebar-link cursor-pointer' href={link.route}>
<Image
src={link.icon}
alt='logo'
width={24}
height={24}
/>
{link.label}
</Link>
    </li>
)
    })}


<li className='flex-centre cursor-pointer gap-2 p-4'>
    <UserButton afterSignOutUrl='/' showName/>
</li>
</ul>
    </>
  </SheetContent>
</Sheet>
    </SignedIn>
    <SignedOut>
        <Button asChild className='button bg-purple-gradient bg-cover'>
            <Link href={"/sign-in"}>Login</Link>
        </Button>
    </SignedOut>
    </nav>
</Link>

</header>
  )
}

export default MobileNav