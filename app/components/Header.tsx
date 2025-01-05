"use client";
import {
  faBars,
  faBagShopping,
  faHeart,
  faArrowRight,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     <div className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="h-16 flex items-center justify-between mx-5 md:mx-10 ">
        {/* (Visible only in small screens) */}
        <div className="flex items-center space-x-4 md:hidden">
          <FontAwesomeIcon icon={faHeart} className="w-5 h-5 text-cyan-600" />
          <FontAwesomeIcon
            icon={faBagShopping}
            className="w-5 h-5 text-cyan-600"
          />
        </div>

        <div>
          <Link href={"/"} className="">
            <span className="font-bold text-xl flex items-center text-cyan-600 transition-transform duration-500 hover:scale-105">
              PRODUCT APP
            </span>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-600 hover:text-cyan-500"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>

        <div className="hidden md:flex font-medium space-x-10">
          <Link
            href={"/"}
            className="hover:text-gray-400 transition-transform duration-500 hover:scale-95"
          >
            SHOP
          </Link>
          <Link
            href={"/"}
            className="hover:text-gray-400 transition-transform duration-500 hover:scale-95"
          >
            ABOUT
          </Link>
          <Link
            href={"/"}
            className="hover:text-gray-400 transition-transform duration-500 hover:scale-95"
          >
            CONTACT
          </Link>
        </div>

        {/* <div className="hidden md:flex space-x-5">
          <Link
            href={""}
            className="flex items-center space-x-2 bg-cyan-600 px-4 py-1 rounded-sm font-medium text-white transition-transform duration-500 hover:scale-105"
          >
            WISHLIST
            <FontAwesomeIcon icon={faHeart} className="ms-3" />
          </Link>
          <Link
            href={""}
            className="flex items-center space-x-2 bg-cyan-600 px-4 py-1 rounded-sm font-medium text-white transition-transform duration-500 hover:scale-105"
          >
            CART
            <FontAwesomeIcon icon={faBagShopping} className="ms-3" />
          </Link>
        </div> */}

        <div className="hidden md:flex space-x-5">
          <Link
            href={""}
            className="flex items-center  space-x-2 bg-cyan-600 px-4 py-1 rounded-sm font-medium text-white transition-transform duration-500 hover:scale-105"
          >
            <FontAwesomeIcon icon={faCircleUser} className="me-3" />
            LOGIN
          </Link>
        </div>
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5">
          <div className="flex flex-col items-start space-y-4">
            <Link href={"/"} className="font-medium hover:text-gray-400">
              SHOP
            </Link>
            <Link href={"/"} className="font-medium hover:text-gray-400">
              ABOUT
            </Link>
            <Link href={"/"} className="font-medium hover:text-gray-400">
              CONTACT
            </Link>

            <Link
              href={""}
              className="flex items-center space-x-2 bg-cyan-600 px-4 py-1 rounded-sm font-medium text-white transition-transform duration-500 hover:scale-105"
            >
              <FontAwesomeIcon icon={faCircleUser} className="me-3" />
              LOGIN
            </Link>
          </div>
        </div>

      )}
      </div>

      <div className="pt-16"></div>
    </>
  );
}
