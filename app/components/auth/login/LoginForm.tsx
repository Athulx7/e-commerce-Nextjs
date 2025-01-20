import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./Form";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center w-full h-[80vh]">
      <div className="flex flex-col md:flex-row w-11/12 md:w-3/4 h-[475px] mt-5">
        <div className="flex flex-col items-center justify-center shadow-md p-5 md:w-1/2 bg-white">
          <div className="flex items-center justify-center w-[70px] h-[70px] border-4 border-cyan-600 rounded-full">
            <FontAwesomeIcon icon={faUser} className="text-cyan-600 text-2xl" />
          </div>
          <h2 className="text-center text-cyan-600 font-bold mt-2">
            WELCOME USER
          </h2>
         {/* login form  */}
          <Form />
        </div>

        <div
          className="hidden md:flex flex-col items-center justify-center shadow-md rounded-md p-5 md:w-1/2 bg-cover bg-center text-white"
          style={{
            backgroundImage: `url('https://img.freepik.com/premium-photo/person-is-holding-bunch-shopping-bags-with-one-them-being-pink-bag_1260445-3197.jpg?semt=ais_hybrid')`
          }}
        >
          <h4 className="text-2xl font-bold">PRODUCT APP</h4>
          <h3 className="mt-3 text-xl">Didn&apos;t have an Account?</h3>
          <p className="mt-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            reiciendis eligendi rem illo voluptate, tempora iste. Quisquam,
            delectus cumque, consectetur obcaecati, eveniet suscipit incidunt
            accusantium adipisci voluptate est accusamus nihil!
          </p>
          <a
            href="/auth/register"
            className="mt-5 px-5 py-2 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-cyan-600"
          >
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
}
