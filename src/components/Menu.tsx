'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CartIcon from "./CartIcon"

const links=[
  {
    id:1,
    title:'homepage',
    url:'/'
  },
  {
    id:2,
    title:'menu',
    url:'/menu'
  },
  {
    id:3,
    title:'working hours',
    url:'/'
  },
  {
    id:4,
    title:'contact',
    url:'/'
  },
]

const Menu = () => {
  const [open , setOpen]=useState(false);
  //temporary
  const user = false;
  return (
    <div>
      {
      !open ? 
      (<Image src='/open.png' width={20} height={20} alt="open" onClick={()=>setOpen(true)} className="cursor-pionter"/>)
      :
      (<Image src='/close.png' width={20} height={20} alt="close" onClick={()=>setOpen(false)}/>)
      }
      {
        open && (
          <div className="bg-red-500 text-white flex flex-col items-center justify-center gap-8 text-3xl absolute z-10 left-0 right-0 top-24 w-full h-[calc(100vh-6rem)]">
        {
          links.map(item=>(
            <Link key={item.id} href={item.url}>{item.title.toUpperCase()}</Link>
          ))
        }
        {
          !user ? (
            <Link href='/login'>LOGIN</Link>
          ) :
          (
            <Link href='/orders'>ORDERS</Link>
          )
        } 
        <CartIcon/>
      </div>
        )
      }
    </div>
  )
}

export default Menu