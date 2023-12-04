import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row items-center md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* text container */}
      <div className=' flex-1 flex flex-col items-center justify-center gap-12 p-5 text-center'>
        <p className='text-white font-bold text-5xl'>Delicious Burger & French Fry</p>
        <p className='text-white '>Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</p>
        {/* <CountDown/> */}
        <button className='py-4 px-6 bg-red-500 rounded text-white text-xl'>Order Now</button>
      </div>
      {/* image container */}
      <div className='relative flex-1 w-full h-full'>
        <Image src='/offerProduct.png' alt='offerProduct' fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Offer