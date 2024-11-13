"use client"

import Logo from '@/components/Logo'
import ThemeToggle from '@/components/ThemeToggle'
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

function Navbar() {

  return (
    <div className='flex items-center justify-between border-b border-border h-[60px] px-[2.5rem] py-3'>
        <Logo />
        <div className='flex gap-4 items-center'>
          <ThemeToggle />
          <Auth />
        </div>
      </div>
  )
}

export default Navbar

function Auth() {
    const {isSignedIn} = useAuth()
    const router = useRouter()

    return(
        <div className='flex item-center justify-center gap-2'>
            {isSignedIn ? <UserButton /> : <Button onClick={() => router.push("/sign-in")}>Signed In</Button>}
        </div>
    )
}