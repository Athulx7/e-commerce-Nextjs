"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "../services/allApi";

interface CartItem {
  _id:string,
  title: string;
  image: string;
  quantity: number;
  price: number;
}
export default function CartTable() {
  const [cartdetails, setCartdetails] = useState<CartItem[]>([]);

  const token = sessionStorage.getItem("token");
 
  const getCartitems = async () => {
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const result = await getCart(reqHeader);
    // console.log(result)
    setCartdetails(result.data || []);
  };

  useEffect(() => {
    getCartitems();
  }, []);

  console.log(cartdetails);

  return (
    <>
      {cartdetails?.length > 0 ? (
        <div>
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
                {cartdetails.map((cart, index) => (
                  <tr className="text-center" key={cart._id}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{cart.title.substring(0, 12)}</td>
                    <td className="px-4 py-2">
                      <img
                        src={cart.image}
                        alt={cart.title}
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
                          value={cart.quantity}
                          readOnly
                        />
                        <button className="px-2 py-1 text-lg font-bold bg-gray-200 rounded hover:bg-gray-300">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2">₹{cart.price}</td>
                    <td className="px-4 py-2">
                      <button className="text-red-600 hover:text-red-800">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* for the  smaller screens */}
            <div className="block sm:hidden">
              {cartdetails?.map((cart) => (
                <div className="flex items-center border-b border-gray-300 py-4 px-5" key={cart._id}>
                  <div className="flex-shrink-0 ms">
                    <img
                      src={cart.image}
                      alt={cart.title}
                      className="h-24 w-52 object-contain rounded"
                    />
                  </div>

                  <div className="ml-3 flex-1 ms- ">
                    <div className="mb-2">
                      <h4 className="text-sm font-bold text-gray-800">
                        {cart.title.substring(0, 12)}
                      </h4>
                    </div>
                    <div className="mb-2">
                      <span className="text-sm font-semibold text-gray-600">
                        Price:
                      </span>
                      <span className="text-sm text-gray-800 ms-3">
                        ₹{cart.price}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-sm font-semibold text-gray-600">
                        Quantity: {cart.quantity}
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
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button className="px-6 py-2 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white">
              EMPTY CART
            </button>
            <Link
              href={"/shop"}
              className="px-6 py-2 text-cyan-600 border border-cyan-600 rounded hover:bg-cyan-600 hover:text-white"
            >
              ADD MORE
            </Link>
          </div>
        </div>
      ) : (
        <div>nothing to disply</div>
      )}
    </>
  );
}
