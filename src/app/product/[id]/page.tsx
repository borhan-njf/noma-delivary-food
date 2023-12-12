import { singleProduct } from "@/data";
import Image from "next/image";
import Price from "@/components/Price";

const SingleProductPage = () => {
  return (
    // wrapper
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4 md:flex-row md:items-center md:gap-8 md:px-20 lg:px-40">
      {/* image container */}
      <div className="relative flex-1 h-1/2 md:h-[80%]">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt="product"
            fill
            className="object-contain"
          />
        )}
      </div>
      {/* text container */}
      <div className="text-red-500 h-1/2 md:h-[70%] flex-1 flex flex-col gap-3">
        <h1 className="text-3xl md:text-5xl font-bold uppercase">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} options={singleProduct.options}/>
      </div>
    </div>
  );
};

export default SingleProductPage;
