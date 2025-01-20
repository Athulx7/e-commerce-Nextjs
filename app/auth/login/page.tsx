import LoginForm from "@/app/components/auth/login/LoginForm";
import { ToastContainer } from "react-toastify";

export default function Login() {
    return(
        <>
        <LoginForm />
        <ToastContainer />
        </>
    )
}