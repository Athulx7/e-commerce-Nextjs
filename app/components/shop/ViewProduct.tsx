"use client";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSpecific } from "../services/allApi";
import Image from "next/image";
import Aos from 'aos'
import "aos/dist/aos.css";


interface ProductDetails {
  image: string;
  title: string;
  price: number;
  category: string;
  description: string;
}

export default function ViewProduct() {
  const { id } = useParams();
  // console.log("this is from the front end", id);


  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);

  useEffect(() => {
    if (id) {
      async function loadPro() {
        try {
          const getting = await getSpecific(id);
          // console.log(id);
          // console.log(getting);
          setProductDetails(getting.data);
        } catch (err) {
          console.error("Failed to fetch products:", err);
        }
      }

      loadPro();
    }
  }, [id]);


  useEffect(()=>{
    Aos.init({duration:2000})
  })


  return (
    <div className="py-5">
      <div className="flex p-4">
        <Link href={"/"} className="text-xl font-thin hover:text-gray-300">
          Home
        </Link>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-lg mt-2 ms-3 me-3"
        />
        <Link href={"/shop"} className="text-xl font-thin hover:text-gray-300">
          All Products
        </Link>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-lg mt-2 ms-3 me-3"
        />
        <h2 className="text-xl font-thin">View Product</h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-5">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            {productDetails && (
              <Image
              className="rounded object-contain"
              src={productDetails.image}
              alt="Product"
              width={400}
              height={400}
              data-aos="zoom-out-down"
            />
            )}
          </div>

          <div className="w-full lg:w-1/2"  data-aos="fade-up" >
            {productDetails && (
              <>
                <div className="text-gray-500 text-sm mb-2" >
                  {productDetails.category}
                </div>
                <h1 className="text-3xl font-bold mb-4">
                  {productDetails.title}
                </h1>
                <div className="text-lg flex items-center gap-4 mb-6">
                  <span className="text-gray-400 line-through">₹500</span>
                  <span className="text-black font-semibold">
                    ₹{productDetails.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {productDetails.description}
                </p>
                <div className="flex items-center gap-4">
                  <button
                    className="px-6 py-2 bg-black text-white rounded-sm border-2 border-black hover:bg-white hover:text-black transition-all"
                    type="button"
                  >
                    <i className="bi-cart-fill me-1"></i> Add to Cart
                  </button>

                  <button
                    className="px-6 py-2 bg-black text-white rounded-sm border-2 border-black hover:bg-white hover:text-black transition-all"
                    type="button"
                  >
                    <i className="bi-cart-fill me-1"></i> Add to Wishlist
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
