import { NextResponse } from "next/server"
import { mongoConnect } from "../../../../config/mongoCommect"
import { users } from "../../../models/userModel"

export async function POST(req) {
    // console.log("inside registrer api__________________")

    const body = await req.json()
    const {name,email,password} = body
    // console.log(body)

    await mongoConnect()

    const existingUser = await users.findOne({email:email})
    if(existingUser){
        return new NextResponse(JSON.stringify("the email is already taken"),{status:404})
    }
    else{
        const newUser = new users({
            username:name,
            email:email,
            password:password

        })

        await newUser.save()
        return new NextResponse(JSON.stringify({newUser}),{status:200})
    }    
}