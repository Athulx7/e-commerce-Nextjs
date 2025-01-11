import Link from "next/link";
import WishProducts from "../components/wishlist/WishlistProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Wishlist() {
  return (
    <>

<div className="p-5">
            <div className="flex">
                <Link href={'/'} className="text-xl font-thin hover:text-gray-300">Home</Link>
                <FontAwesomeIcon icon={faChevronRight} className="text-lg mt-2  ms-3 me-3"/>
                <h2 className="text-xl font-thin">Wishlist</h2>
            </div>

            <div>
        <WishProducts />
      </div>
        </div>
     
    </>
  );
}
