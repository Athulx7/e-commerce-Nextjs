"use client"; 

import { usePathname } from "next/navigation";

import Footer from "./Footer";

export default function FooterWrapper() {
    const pathname = usePathname();

   
    const hideHeaderOnRoutes = ["/auth/login", "/auth/register"];


    if (hideHeaderOnRoutes.includes(pathname)) {
        return null;
    }

    return (
        <>
        <Footer />
        </>
    );
}