import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
    return(
        <>

<div className="flex flex-col md:flex-row justify-between items-start p-5 mt-5 bg-gray-200 text-gray-500">
        <div className="mb-8 md:mb-0 max-w-[300px] text-center md:text-left">
          <Link href={''}  className="text-black no-underline">
            <h5 className="text-lg font-semibold md:text-left text-left">
              PRODUCT APP
            </h5>
          </Link>
          <p className="mt-3 text-left md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            praesentium sapiente nesciunt soluta adipisci, vel quas sint, esse
            ex suscipit cum assumenda dicta voluptatum provident placeat eum?
            Inventore, autem maxime.
          </p>
        </div>

        <div className="mb-8 md:mb-0 md:ml-5 max-w-[400px] text-center md:text-left">
          <h5 className="text-lg text-black font-semibold">Links</h5>
          <div className="flex flex-col mt-3 space-y-2">
            <Link
              href={''}
              className="hover:text-black transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href={''}
              className="hover:text-black transition-colors duration-300"
            >
              Shop
            </Link>
            <Link
              href={''}
              className="hover:text-black transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href={''}
              className="hover:text-black transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mb-8 md:mb-0 md:ml-4 max-w-[400px] text-center md:text-left">
          <h5 className="text-lg text-black font-semibold">Send Message</h5>
          <div className="flex flex-col mt-3 space-y-2">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:border-cyan-600"
              placeholder="Text a message"
            />
            <button className="bg-cyan-600 text-white font-bold p-2 rounded hover:bg-cyan-700 transition-colors duration-300">
              SEND
            </button>
          </div>
        </div>

        <div className="md:ml-5 max-w-[400px] text-center md:text-left">
          <h5 className="text-lg text-black font-semibold">Social</h5>
          <div className="flex justify-center md:justify-start mt-3 space-x-3">
            <Link
              href={''}
              className="text-black transition-transform duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
            </Link>
            <Link
              href={''}
              className="text-black transition-transform duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
            </Link>
            <Link
             href={''}
              className="text-black transition-transform duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faSquareTwitter} size="2x" />
            </Link>
          </div>
        </div>
      </div>
        
        </>
    )
}