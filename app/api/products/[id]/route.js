import { NextResponse } from "next/server";
import { mongoConnect } from "../../../../config/mongoCommect";
import { products } from "../../../models/productModel";


export async function GET(req,{params}){
   const {id} = await params
//    console.log("this is the id from the route.js",id)
    
        await mongoConnect()

        const product = await products.findById(id)
        // console.log("product _____ found",product)

        if(!product){
            return new NextResponse(JSON.stringify("product not founde",{status:404}))
        }

        return new NextResponse(JSON.stringify(product),{status:200})

}