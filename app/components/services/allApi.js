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