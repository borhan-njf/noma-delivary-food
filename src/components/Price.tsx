"use client";

import { useState , useEffect, Fragment} from "react";

type props = {
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, options }: props) => {
  const [total, setTotal] = useState(price);
  const [quantity , setQuantity]=useState(1);
  const [selected , setSelected] = useState(0)


useEffect(()=>{
  setTotal(
    quantity * (options ? options[selected].additionalPrice + price : price)
  )
},[quantity,price,selected,options])


  return (
    <div className="flex flex-col gap-3">
      <p className="text-2xl font-bold my-3">${total.toFixed(2)}</p>
     <div>
     {options?.map((option, index) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          className="border border-red-500 rounded-md py-2 px-4 mr-3 min-w-[6rem]"
          style={{
            backgroundColor:selected === index ? 'rgb(248 113 113)' : 'white',
            color: selected ===index ? 'white' : 'rgb(248 113 113)'
          }}
        >
          {option.title}
        </button>
      ))}
     </div>
      {/* quantity section */}
      <div className="flex items-center justify-between h-12 my-4 border border-red-500">
        <div className="flex items-center justify-between px-3 flex-1 h-full">
          <span>Quantity</span>
          <div className="flex items-center">
            <button onClick={()=>setQuantity(prev=>prev>1 ? prev - 1 : 1)}>{'<'}</button>
            <span className="px-3">{quantity}</span>
            <button onClick={()=>setQuantity(prev=>prev<9 ? prev +1 : 9)}>{'>'}</button>
          </div>
        </div>
        <button className="uppercase text-white w-40 bg-red-500 h-full ">add to cart</button>
      </div>
    </div>
  );
};

export default Price;
