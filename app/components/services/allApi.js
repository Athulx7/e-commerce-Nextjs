import { commonApi } from "./commonApi"


export const getProducts = async()=>{
    return await commonApi("GET",'/api/products',null,null)  
}


export const getSpecific = async(id)=>{
    // console.log("this is the allapi",id)
    return await commonApi("GET",`/api/products/${id}`,null,null)
}

//login 

export const loginApi = async(body)=>{
    return await commonApi("POST",'/api/auth/login',body,'')
}

//registser

export const registerApi = async(body)=>{
    return await commonApi("POST",'/api/auth/register',body,'')
}


export const getWishlist = async(reqheader)=>{
    return await commonApi("GET",'/api/wishlist','',reqheader)
}

export const getCart = async(reqHeader)=>{
    return await commonApi("GET",'/api/cart','',reqHeader)
}