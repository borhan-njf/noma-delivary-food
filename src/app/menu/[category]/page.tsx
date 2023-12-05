import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  return (
    // wrapper
    <div className="flex flex-col md:flex-row flex-wrap">
      {/* product */}
      {pizzas.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="text-red-500 border border-red-500 border-b-2 border-r-2 h-[60vh] flex flex-col group justify-between p-4 w-full md:w-1/2 lg:w-1/3 odd:bg-fuchsia-50"
        >
          {/* image container */}
          <div className="relative h-[80%]">
            {item.img && (
              <Image
                src={item.img}
                fill
                alt="product"
                className="object-contain"
              />
            )}
          </div>
          {/* details */}
          <div className="flex justify-between items-center font-bold">
            {/* title */}
            <p className="text-2xl uppercase p-2">{item.title}</p>
            {/* price && action */}
            <span className="text-xl group-hover:hidden ">${item.price}</span>
            <button className="hidden group-hover:block bg-red-500 text-white rounded uppercase py-2 px-3">
              add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
