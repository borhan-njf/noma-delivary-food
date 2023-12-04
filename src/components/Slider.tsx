"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const initialSlides = [
  {
    id: 1,
    decs: "always fresh & always crispy & always hot",
    img: "slide1.png",
  },
  {
    id: 2,
    decs: "we deliver your order wherever you are in NY",
    img: "slide2.png",
  },
  {
    id: 3,
    decs: "the best pizza to share with your family",
    img: "slide3.jpg",
  },
];

const Slider = () => {
  const [slides, setSlides] = useState(initialSlides);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(()=>{
    const interVal=setInterval(()=>{
      setCurrentSlide(prev=>prev===slides.length-1 ? 0 : prev+1)
    },2000)

    return ()=> clearInterval(interVal)
  },[])
  return (
    <div className="flex flex-col items-center justify-center md:flex-row text-red-500 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      <div className="flex-1 h-1/2 flex flex-col items-center justify-center gap-8 font-bold md:h-full">
        <h1 className="text-center text-4xl sm:text-5xl md:text-7xl p-3 uppercase">{slides[currentSlide].decs}</h1>
        <button className="bg-red-500 text-white rounded py-4 px-8  md:text-xl hover:bg-red-700">Order Now</button>
      </div>
      <div className="flex-1 h-1/2 relative w-full md:h-full">
        <Image
          src={`/${slides[currentSlide].img}`}
          alt="slide"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
