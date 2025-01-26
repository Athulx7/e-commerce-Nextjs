import { NextResponse } from "next/server"
import { mongoConnect } from "../../../config/mongoCommect"
import { verify } from "jsonwebtoken"
import { carts } from "../../models/cartModel"

export async function GET(req) {

    // console.log("inside get wishlist by user")

    const authHeader = req.headers.get("authorization")
    const token = authHeader.split(' ')[1]

    const jwtRespoce = verify(token,'userpwd123')
    req.payload = jwtRespoce.userid

    const userId = req.payload

    
    // console.log("-------------",userId)

    await mongoConnect()

    const wishlistProducts = await carts.find({userid:userId})
    return new NextResponse(JSON.stringify(wishlistProducts),{status:200})

    
}