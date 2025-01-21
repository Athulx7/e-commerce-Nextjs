"use client";
import {
  faBars,
  faBagShopping,
  faHeart,
  faCircleUser,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userdata, setUserdata] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userString = sessionStorage.getItem("user");
      if (userString) {
        setUserdata(JSON.parse(userString));
      }
    }
  },[]);

  // const userdata = userString ? JSON.parse(userString) : null;
  // console.log(userdata)
  const router = useRouter();

  const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (sessionStorage.getItem("user")) {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      router.push("/");
    }
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="h-16 flex items-center justify-between mx-5 md:mx-10 ">
          {/* (Visible only in small screens) */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link href={"/wishlist"}>
              <FontAwesomeIcon
                icon={faHeart}
                className="w-5 h-5 text-cyan-600"
              />
            </Link>
            <Link href={"/cart"}>
              <FontAwesomeIcon
                icon={faBagShopping}
                className="w-5 h-5 text-cyan-600"
              />
            </Link>
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
              href="/shop"
              className="hover:text-gray-400 transition-transform duration-500 hover:scale-95"
            >
              SHOP
            </Link>

            <Link
              href={"/about"}
              className="hover:text-gray-400 transition-transform duration-500 hover:scale-95"
            >
              ABOUT
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-gray-400 transition-transform duration-500 hover:scale-95"
            >
              CONTACT
            </Link>
          </div>

          {userdata ? (
            <div className="hidden md:flex space-x-5">
              <Link
                href={"/wishlist"}
                className="flex items-center space-x-2 bg-cyan-600 px-4 py-1 rounded-sm font-medium text-white transition-transform duration-500 hover:scale-105"
              >
                WISHLIST
                <FontAwesomeIcon icon={faHeart} className="ms-3" />
              </Link>
              <Link
                href={"/cart"}
                className="flex items-center space-x-2 bg-cyan-600 px-4 py-1 rounded-sm font-medium text-white transition-transform duration-500 hover:scale-105"
              >
                CART
                <FontAwesomeIcon icon={faBagShopping} className="ms-3" />
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center  space-x-2 bg-cyan-600 px-4 py-1 rounded-sm font-medium text-white transition-transform duration-500 hover:scale-105"
              >
                <FontAwesomeIcon icon={faPowerOff} className="" />
              </button>
            </div>
          ) : (
            <div className="hidden md:flex space-x-5">
              <Link
                href={"/auth/login"}
                className="flex items-center  space-x-2 bg-cyan-600 px-4 py-1 rounded-sm font-medium text-white transition-transform duration-500 hover:scale-105"
              >
                <FontAwesomeIcon icon={faCircleUser} className="me-3" />
                LOGIN
              </Link>
            </div>
          )}
        </div>

        {/* Dropdown Menu for Smaller Screens */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5">
            <div className="flex flex-col items-start space-y-4">
              <Link href={"/shop"} className="font-medium hover:text-gray-400">
                SHOP
              </Link>
              <Link href={"/about"} className="font-medium hover:text-gray-400">
                ABOUT
              </Link>
              <Link
                href={"/contact"}
                className="font-medium hover:text-gray-400"
              >
                CONTACT
              </Link>

              {userdata ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-cyan-600 px-4 py-1 rounded-sm font-medium text-white transition-transform duration-500 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faPowerOff} className="me-3" />
                  LOG OUT
                </button>
              ) : (
                <Link
                  href={""}
                  className="flex items-center space-x-2 bg-cyan-600 px-4 py-1 rounded-sm font-medium text-white transition-transform duration-500 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faCircleUser} className="me-3" />
                  LOGIN
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="pt-16"></div>
    </>
  );
}
