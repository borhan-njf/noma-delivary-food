import Link from 'next/link'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <Link href='/cart' className='flex items-center justify-center gap-4'>
        <div className='relative w-8 h-8 md:w-5 h-5'>
           <Image src='/cart.png' alt='cart' fill/> 
        </div>
        <span>CART (3)</span>
    </Link>
  )
}

export default CartIcon