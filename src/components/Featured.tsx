import Image from "next/image";
import { featuredProducts } from "@/data";

const Featured = () => {
  return (
    <div className="w-screen h-screen text-red-500 overflow-auto my-8">
      {/* wrapper */}
      <div className="h-full flex w-max">
        {/* single item */}
        {featuredProducts.map((item) => (
          <div key={item.id} className="w-screen md:w-[50vw] xl:w-[33vw] flex flex-col p-3">
            {/* image container */}
            {item.img && (
              <div className="relative flex-1 hover:rotate-[60deg] transition-all duration-300">
                <Image
                  src={item.img}
                  alt="featured"
                  fill
                  className="
                   object-contain"

                />
              </div>
            )}
            {/* text container */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-9">
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <p className="text-xl  2xl:p-8">{item.desc}</p>
              <span className="font-bold text-2xl">{item.price}</span>
              <button className="bg-red-500 text-white py-4 px-6 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
