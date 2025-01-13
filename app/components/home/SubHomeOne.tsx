import Image from "next/image";
import Link from "next/link";

export default function SubHomeOne() {
  return (
    <>
      <div className="relative px-3 py-5 flex justify-center items-center">
       
        <Image
          className="h-[1000px] object-cover w-full sm:w-auto"
          src="/productapp1.png"
          alt="productapp1"
          width={1200} 
          height={1000} 
        />

        
        <Image
          className="hidden sm:block h-[500px] mt-20 ms-64 object-cover"
          src="/productapp2.png" 
          alt="productapp2"
          width={400} 
          height={800} 
        />

        <div className="absolute text-center text-black px-5 sm:px-0">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            DISCOVER THE FUTURE OF SHOPPING
          </h1>
          <p className="text-sm sm:text-xl font-light pb-5">
            SHOP THE LATEST TRENDS WITH EASE AND CONFIDENCE
          </p>
          <Link href={'/shop'} className=" px-6 sm:px-8 py-2 bg-black text-white rounded-sm hover:bg-white border-black border-2 hover:text-black border-solid">
            SHOP NOW
          </Link>
        </div>
      </div>
    </>
  );
}
