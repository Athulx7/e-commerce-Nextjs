import ViewWishPro from "@/app/components/wishlist/ViewWishPro";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function WishView() {
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
        <Link
          href={"/wishlist"}
          className="text-xl font-thin hover:text-gray-300"
        >
          Wishlist
        </Link>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-lg mt-2  ms-3 me-3"
        />
        <h2 className="text-xl font-thin">View Product</h2>
      </div>

      <ViewWishPro />
      
    </div>
  );
}
