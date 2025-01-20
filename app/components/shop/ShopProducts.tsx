"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getProducts } from "../services/allApi";

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

export default function ShopProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await getProducts();
        setProducts(response.data || []); 
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }
    loadProducts();
  }, []);

  if (!products || products.length === 0) {
    
    return (
      <div className="text-center mt-20">
        <p className="text-gray-600 text-lg">Loading products...</p>
      </div>
    );
  }

  return (
    <>
      <div className="pt-16 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="border-2 rounded-sm border-gray-400 w-72 h-96 flex flex-col items-center justify-between p-4"
            >
              <Link
                href={`/shop/${product._id}`}
                className="flex items-center justify-center w-full h-[80%] overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.title}
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
                  <h3 className="font-bold text-gray-600">{product.title.substring(0,12)}</h3>
                  <h3 className="text-gray-600 text-lg">₹ {product.price}</h3>
                </div>
                <button>
                  <FontAwesomeIcon
                    icon={faHeart}
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
