import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CartTable() {
  return (
    <>
      <div className="border border-gray-300 rounded shadow-md">
        {/* Table for larger screens */}
        <table className="w-full border-collapse hidden sm:table">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2  text-sm ">#</th>
              <th className="px-4 py-2  text-sm">Product Name</th>
              <th className="px-4 py-2  text-sm">Image</th>
              <th className="px-4 py-2  text-sm">Quantity</th>
              <th className="px-4 py-2  text-sm">Price</th>
              <th className="px-4 py-2  text-sm">Action</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-center ">
              <td className="px-4 py-2 ">1</td>
              <td className="px-4 py-2 ">Product Title</td>
              <td className="px-4 py-2">
                <img
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  alt="Product"
                  className="h-24 object-contain mx-auto"
                />
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <button className="px-2 py-1 text-lg font-bold bg-gray-200 rounded hover:bg-gray-300">
                    -
                  </button>
                  <input
                    type="number"
                    className="w-12 mx-2 border rounded text-center"
                    defaultValue={1}
                  />
                  <button className="px-2 py-1 text-lg font-bold bg-gray-200 rounded hover:bg-gray-300">
                    +
                  </button>
                </div>
              </td>
              <td className="px-4 py-2">₹3333</td>
              <td className="px-4 py-2">
                <button className="text-red-600 hover:text-red-800">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Stacked layout for smaller screens */}
        <div className="block sm:hidden">
          <div className="flex items-center border-b border-gray-300 py-4 px-5">
            <div className="flex-shrink-0 ms">
              <img
                src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                alt="Product"
                className="h-24 w-52 object-contain rounded"
              />
            </div>

            <div className="ml-3 flex-1 ms- ">
              <div className="mb-2">
                <h4 className="text-sm font-bold text-gray-800">
                  Product Title
                </h4>
              </div>
              <div className="mb-2">
                <span className="text-sm font-semibold text-gray-600">
                  Price:{" "}
                </span>
                <span className="text-sm text-gray-800">₹3333</span>
              </div>
              <div className="mb-2">
                <span className="text-sm font-semibold text-gray-600">
                  Quantity:
                </span>
                <div className="flex items-center mt-1">
                  <button className="px-2 py-1 text-lg font-bold bg-gray-200 rounded hover:bg-gray-300">
                    -
                  </button>
                  <input
                    type="number"
                    className="w-12 mx-2 border rounded text-center"
                    defaultValue={1}
                  />
                  <button className="px-2 py-1 text-lg font-bold bg-gray-200 rounded hover:bg-gray-300">
                    +
                  </button>
                </div>
              </div>
              <div>
                <button className="text-red-600 hover:text-red-800">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button className="px-6 py-2 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white">
          EMPTY CART
        </button>
        <Link href={'/shop'} className="px-6 py-2 text-cyan-600 border border-cyan-600 rounded hover:bg-cyan-600 hover:text-white">
          ADD MORE
        </Link>
      </div>
    </>
  );
}
