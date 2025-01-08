import Link from "next/link";

export default function GrandTotal() {
    return (
        <div className="border border-gray-300 rounded shadow-md p-6 mb-16">
        <h3 className="text-lg font-bold mb-5">
          GRAND TOTAL: <span className="text-red-600">₹2000</span>
        </h3>
        <Link href={'/checkout'} className="w-full px-6 py-2 hover:text-white border-green-600 border-2 text-green-600 rounded hover:bg-green-600">
          CHECK OUT
        </Link>
      </div>
    
    );
  }