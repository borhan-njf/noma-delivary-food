import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'
const Navbar = () => {
  const user=false;
  return (
    <div className='uppercase flex items-center justify-between h-12 md:h-24 px-4 lg:px-20 xl:px-32 text-red-500 border-b-2 border-b-red-500'>
      {/* left links */}
      <div className='hidden md:flex gap-4  flex-1 '>
        <Link href='/' className='hover:text-red-600'>HOMEPAGE</Link>
        <Link href='/menu' className='hover:text-red-600'>MENU</Link>
        <Link href='/' className='hover:text-red-600'>CONTACT</Link>
      </div>
      {/* logo */}
      <div className='logo text-xl md:text-5xl md:font-mono font-bold flex-1 md:text-center'>
        <Link href='/'>Noma</Link>
      </div>
      {/* mobile menu */}
      <div className='md:hidden'>
        <Menu/>
      </div>
      {/* right links */}
      <div className='hidden md:flex items-center justify-end gap-4 flex-1'>
        <div className='md:absolute top-2 right-2 lg:static flex items-center justify-center gap-2 p-1 bg-orange-300 rounded'>
          <Image src='/phone.png' alt='phone' width={20} height={20}/>
          <span>+989024246937</span>
        </div>
        {
          !user ? (
            <Link href='/login' className='hover:text-red-600'>LOGIN</Link>
          ) :
          (
            <Link href='/orders' className='hover:text-red-600'>ORDERS</Link>
          )
        }
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar