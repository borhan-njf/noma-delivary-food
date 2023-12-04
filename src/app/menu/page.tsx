import { menu } from "@/data";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center h-[calc(100vh-6rem)] p-4 lg:px-20 xl:px-32">
      {menu.map((category) => (
        <Link
          key={category.id}
          href={`/menu/${category.slug}`}
          style={{ backgroundImage: `url(${category.img})` }}
          className="h-1/3 md:h-1/2 bg-cover p-8"
        >
          <div className={`text-${category.color} w-1/2`}>
          <h4 className="uppercase font-bold text-3xl">{category.title}</h4>
          <p className="text-sm my-8">{category.desc}</p>
          <button className={`hidden 2xl:block rounded py-2 px-4 bg-${category.color==='white'?'red':'black'} text-${category.color==='white'? 'black' : 'white'}`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
