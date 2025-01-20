"use client";

import { useState } from "react";
import { loginApi } from "../../services/allApi";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


type ErrorType = {
  email?: string;
  password?: string;
};

export default function Form() {
  const [userdata, setUserdata] = useState({
    email:'',
    password: "",
  });
  

  const [error, setError] = useState<ErrorType>({});
  const router = useRouter()

  const validation = () => {
    const newError : ErrorType = {}; ;
    if (!userdata.email) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userdata.email)) {
      newError.email = "Enter a valid email ID";
    }

    if (!userdata.password) {
      newError.password = "Password is required";
    } 
    // else if (userdata.password.length < 8) {
    //   newError.password = "Password must be at least 8 characters";
    // }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault(); 
    if (validation()) {
     
      const result = await loginApi(userdata)
      console.log(result)
      if(result.status === 200){
        sessionStorage.setItem("user",JSON.stringify(result.data.data))
        sessionStorage.setItem("token",result.data.token)
        Swal.fire({
          title: "Success!",
          text: 'Login successfully',
          icon: "success",
          confirmButtonText: "OK",
        });
       
        router.push('/')
      }
      else{
        toast.error("failed to set  item in sesssion storage")
      }
    } else {
      toast.warning("Validation errors");
    }
  };

  

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-3 border rounded p-3 shadow-md"
    >
      <div className="mb-3">
        <input
          onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
          type="text"
          placeholder="Enter email"
          className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
        {error.email && (
          <span className="text-red-500 text-sm mt-1">{error.email}</span>
        )}
      </div>
      <div className="mb-3">
        <input
          onChange={(e) =>
            setUserdata({ ...userdata, password: e.target.value })
          }
          type="password"
          placeholder="Enter password"
          className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
        {/* {error.password && (
          <span className="text-red-500 text-sm mt-1">{error.password}</span>
        )} */}
      </div>
      <div className="mt-3">
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white font-bold py-2 rounded hover:bg-white hover:text-cyan-600 border-2 border-cyan-600"
        >
          LOGIN
        </button>
      </div>
    </form>
  );
}
