"use client"
import { faBagShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getWishlist } from "../services/allApi";
import Image from "next/image";


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
export default function WishProducts() {

  const [wishlistData,setWishlistData] =  useState<Product[]>([])



  
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const token = sessionStorage.getItem('token')
      if(token){
        const getWishlistitems = async()=>{
          const reqHeader = {
            "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          }
          const result = await getWishlist(reqHeader)
          setWishlistData(result.data || [])
        }

        getWishlistitems()


      }
     
    }
  })

  

  // console.log(wishlistData)
 
 
  return (
    <>
      <div className="pt-16 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-wrap justify-center gap-8">
        {wishlistData.map((wishlist) => (
            <div
              key={wishlist._id}
              className="border-2 rounded-sm border-gray-400 w-72 h-96 flex flex-col items-center justify-between p-4"
            >
              <Link
                href={`/shop/${wishlist._id}`}
                className="flex items-center justify-center w-full h-[80%] overflow-hidden"
              >
                <Image
                  src={wishlist.image}
                  alt={wishlist.title}
                  width={288}
                  height={388}
                  className="h-full max-h-full object-contain transform transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <div className="flex justify-between items-center">
                <button>
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="me-10 hover:text-cyan-600"
                  />
                </button>
                <div className="text-center w-full">
                  <h3 className="font-bold text-gray-600">{wishlist.title.substring(0,12)}</h3>
                  <h3 className="text-gray-600 text-lg">₹ {wishlist.price}</h3>
                </div>
                <button>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="ms-10 hover:text-red-700"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
