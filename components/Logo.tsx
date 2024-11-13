import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link 
        href={"/"}
        className='flex items-center justify-center font-bold text-2xl hover:cursor-pointer hover:bg-gradient-to-r from-indigo-400 to-cyan-400 hover:bg-clip-text hover:text-transparent'
    >
        Formice
    </Link>
  )
}

export default Logo