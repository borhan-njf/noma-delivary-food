import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='uppercase flex items-center justify-between h-12 md:h-24 px-4 lg:px-20 xl:px-32 text-red-500' >
      
      <div className='text-xl md:text-5xl md:font-mono font-bold'>
      <Link href='/'>NOMA</Link>
      </div>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer