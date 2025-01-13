import { commonApi } from "./commonApi"


export const getProducts = async()=>{

    return await commonApi("GET",'/api/products',null,null)
    
}