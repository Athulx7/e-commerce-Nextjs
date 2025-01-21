import RegisterForm from "@/app/components/auth/register/RegisterForm";
import { ToastContainer } from "react-toastify";

export default function Register() {
    return(
        <>

         <RegisterForm />
         <ToastContainer position="top-center" />
        
        </>
    )
}