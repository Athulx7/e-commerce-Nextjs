import axios from "axios";

export const commonApi = async (httpReqType, url, reqBody, reqHeader) =>{
    const reqConfig = {
        method: httpReqType,
        url: url,
        data: reqBody,
        headers: reqHeader || { "Content-Type": "application/json" },
      };

      return axios(reqConfig)
      .then((result)=> result)
      .catch((err)=>err)

}