import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ViewProduct() {
  return (
    <div className="py-5">
      <div className="flex p-4">
        <Link href={"/"} className="text-xl font-thin hover:text-gray-300">
          Home
        </Link>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-lg mt-2  ms-3 me-3"
        />
        <Link href={"/shop"} className="text-xl font-thin hover:text-gray-300">
          All Products
        </Link>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-lg mt-2  ms-3 me-3"
        />
        <h2 className="text-xl font-thin">View Product</h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-5">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="rounded  object-contain"
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="Product"
              width={400}
              height={400}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="text-gray-500 text-sm mb-2">Category</div>
            <h1 className="text-3xl font-bold mb-4">Product Title</h1>
            <div className="text-lg flex items-center gap-4 mb-6">
              <span className="text-gray-400 line-through">₹500</span>
              <span className="text-black font-semibold">₹Price</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Product description goes here. It provides detailed information
              about the product.
            </p>
            <div className="flex items-center gap-4">
              <input
                className="w-16 text-center border-gray-300 rounded-md shadow-sm"
                id="inputQuantity"
                type="number"
                defaultValue={1}
                min={1}
              />
              <button
                className="px-6 py-2 bg-black text-white rounded-sm border-2 border-black hover:bg-white hover:text-black  transition-all"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i> Add to Cart
              </button>

              <button
                className="px-6 py-2 bg-black text-white rounded-sm border-2 border-black hover:bg-white hover:text-black  transition-all"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i> Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
