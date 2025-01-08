import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ShopProduct from "../components/shop/ShopProducts";

export default function Shop() {
    return(
        <>
        <div className="p-5">
            <div className="flex">
                <Link href={'/'} className="text-xl font-thin hover:text-gray-300">Home</Link>
                <FontAwesomeIcon icon={faChevronRight} className="text-lg mt-2  ms-3 me-3"/>
                <h2 className="text-xl font-thin">All Products</h2>
            </div>

            <div>
                <ShopProduct />
            </div>
        </div>
        </>
    )
}