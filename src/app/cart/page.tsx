import Image from "next/image"
const CartPage = ()=>{
  return (
    // cart wrapper
    <div className="text-red-500 flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/* products container */}
      <div className="h-1/2 lg:h-full lg:w-2/3 2xl:w-1/2 flex flex-col justify-center p-4 lg:p-8 2xl:p-32 overflow-scroll">
        {/* single item */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <div className="">
            <h1 className="text-2xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <span className="text-xl font-bold">$79.90</span>
          <span className="cursor-pointer">X</span>
        </div>
        {/* single item */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <div className="">
            <h1 className="text-2xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <span className="text-xl font-bold">$79.90</span>
          <span className="cursor-pointer">X</span>
        </div>
        {/* single item */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <div className="">
            <h1 className="text-2xl font-bold">sicilian</h1>
            <span>Large</span>
          </div>
          <span className="text-xl font-bold">$79.90</span>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* payment container */}
      <div className="h-1/2 lg:h-full lg:w-1/3 2xl:w-1/2  flex flex-col justify-center gap-4  p-4 lg:p-8 2xl:p-32 xl:text-xl bg-fuchsia-50">
        <div className="flex justify-between items-center">
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className=""/>
        <div className="flex justify-between items-center">
          <span>TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="p-3 rounded-md mt-2 hover:bg-red-400 bg-red-500 text-white w-1/2 self-end">CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage