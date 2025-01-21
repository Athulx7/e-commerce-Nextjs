"use client";
import { FormEvent, useState } from "react";
import { registerApi } from "../../services/allApi";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

type ErrorType = {
  name?: string;
  email?: string;
  password?: string;
};
export default function RegForm() {
  const router = useRouter();

  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<ErrorType>({});

  const validation = () => {
    const newError: ErrorType = {};

    if (!userdata.name) {
      newError.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(userdata.name)) {
      newError.name = "User name can only contain letters and spaces";
    }

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

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validation()) {
      const result = await registerApi(userdata);
      // console.log(result)
      if (result.status === 200) {
        Swal.fire({
          title: "Success!",
          text: 'Your Account is registers successfully, "please login"',
          icon: "success",
          confirmButtonText: "OK",
        });
        setUserdata({
          name: "",
          email: "",
          password: "",
        });
        router.push("/auth/login");
      } else if (result.status === 404) {
        toast.error("the email is already registered");
      }
    } else {
      toast.warning("please fill the form completely");
    }
  };

  return (
    <>
      <form
        className="w-full mt-3 border rounded p-3 shadow-md"
        onSubmit={handleRegister}
      >
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Name"
            name=""
            onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
            className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <span className="text-red-500 text-sm mt-1">{error.name}</span>
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            onChange={(e) =>
              setUserdata({ ...userdata, email: e.target.value })
            }
            className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <span className="text-red-500 text-sm mt-1">{error.email}</span>
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) =>
              setUserdata({ ...userdata, password: e.target.value })
            }
            className="form-control w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
          <span className="text-red-500 text-sm mt-1">{error.password}</span>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white font-bold py-2 rounded hover:bg-white hover:text-cyan-600 border-2 border-cyan-600"
          >
            REGISTER
          </button>
        </div>
        <div className="md:hidden flex items-center justify-center mt-2">
        <span>
          Back to  <Link href={'/auth/login '} className="text-blue-600">Login</Link>
        </span>

      </div>
      </form>
    </>
  );
}
