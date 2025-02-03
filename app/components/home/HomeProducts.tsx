"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getHomes } from "../services/allApi";
import Aos from "aos";
import "aos/dist/aos.css";


type Product = {
  _id: string;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
export default function HomeProduct() {
  const [product, setProducts] = useState<Product[]>([]);

  const getting = async () => {
    const respocne = await getHomes();
    // console.log(respocne)
    setProducts(respocne.data);
  };

  useEffect(() => {
    getting();
    Aos.init({duration:1000})
  }, []);
  return (
    <>
      <div className="py-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cyan-600 font-thin">
            Explore the Collection
          </h2>
        </div>

        <div className="pt-16 px-4 sm:px-8 lg:px-16">
          <div className="flex flex-wrap justify-center gap-8">
            {
              product.map((item)=>(
                <div key={item._id} className="border-2 rounded-sm border-gray-400 w-72 h-96 flex flex-col items-center justify-between p-4" data-aos="fade-up">
              <Link
                href={`/shop/${item._id}`}
                className="flex items-center justify-center w-full h-[80%] overflow-hidden "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={288}
                  height={388}
                  className="h-full max-h-full object-contain transform transition-transform duration-300 hover:scale-110 "
                />
              </Link>
              <div className="text-center w-full">
                <h3 className="font-bold text-gray-600">{item.title.substring(0,12)}</h3>
                <h3 className="text-gray-600 text-lg">₹ {item.price}</h3>
              </div>
            </div>

              ))
            }
            
          </div>
        </div>

        <div className="flex items-center justify-center mt-5">
          <Link
            href={"/shop"}
            className=" px-6 sm:px-8 py-2 bg-black text-white rounded-sm hover:bg-white border-black border-2 hover:text-black border-solid"
          >
            EXPLORE MORE
          </Link>
        </div>
      </div>
    </>
  );
}
