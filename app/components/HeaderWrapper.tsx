"use client"; 

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
    const pathname = usePathname();

   
    const hideHeaderOnRoutes = ["/auth/login", "/auth/register"];


    if (hideHeaderOnRoutes.includes(pathname)) {
        return null;
    }

    return (
        <>
        <Header />
        </>
    );
}