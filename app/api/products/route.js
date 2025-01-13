import { NextResponse } from "next/server";
import { mongoConnect } from "../../../config/mongoCommect";
import { products } from "../../models/productModel";



export async function GET() {
    await mongoConnect()
    const product = await products.find()
    console.log(product)

    return new NextResponse(JSON.stringify(product),{status:200})
    
}