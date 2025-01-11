import { faBagShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function WishProducts() {
  return (
    <>
      <div className="pt-16 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="border-2 rounded-sm border-gray-400 w-72 h-96 flex flex-col items-center justify-between p-4">
            <Link
              href={"/wishlist/id"}
              className="flex items-center justify-center w-full h-[80%] overflow-hidden "
            >
              <img
                src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                alt="Product"
                width={288}
                height={388}
                className="h-full max-h-full object-contain transform transition-transform duration-300 hover:scale-110 "
              />
            </Link>
            <div className="flex justify-between items-center">
              <button className="">
              <FontAwesomeIcon icon={faBagShopping} className="me-10 hover:text-cyan-600" />

              </button>

              <div className="text-center w-full">
                <h3 className="font-bold text-gray-600">Product Name</h3>
                <h3 className="text-gray-600 text-lg">₹ Price</h3>
              </div>
              <button>
              <FontAwesomeIcon icon={faTrash} className="ms-10 hover:text-red-700" />

              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
