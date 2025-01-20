import { NextResponse } from "next/server"
import { mongoConnect } from "../../../../config/mongoCommect"
import { users } from "../../../models/userModel"
import jwt from 'jsonwebtoken'
export async function POST(req){
    // console.log("inside the login api________________")
    const body = await req.json()
    const {email,password} = body
   
    await mongoConnect()

    const existingUser = await users.findOne({email:email,password:password})
    if(existingUser){
        const token = jwt.sign({userid:existingUser._id},'userpwd123')
        return new NextResponse(JSON.stringify({data:existingUser,token}),{status:200})
    }
    else{
        return new NextResponse(JSON.stringify("invalid user email or password"))
    }

}