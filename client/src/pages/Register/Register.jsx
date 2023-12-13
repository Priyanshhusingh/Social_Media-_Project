import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  return (
    <div className="h-screen bg-[rgb(170,166,233)] flex items-center justify-center">
      <div className="flex flex-col sm:flex-row bg-white w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] rounded-lg overflow-hidden">
        <div className="flex-1 lg:p-14 sm:p-5 flex flex-col gap-6 justify-center">
          <h1 className="text-2xl font-semibold text-[#555] text-center sm:text-left">
            Register
          </h1>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-none border-b border-[lightgray] py-2 px-3 sm:px-4 md:px-5 lg:px-6"
            />
            <input
              type="text"
              placeholder="Username"
              className="border border-none border-b border-[lightgray] py-2 px-3 sm:px-4 md:px-5 lg:px-6"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-none border-b border-[lightgray] py-2 px-3 sm:px-4 md:px-5 lg:px-6"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-none border-b border-[lightgray] py-2 px-3 sm:px-4 md:px-5 lg:px-6"
            />
            <button className="w-full p-3 border-none bg-purple-500 text-white font-bold cursor-pointer">
              Register
            </button>
          </form>
        </div>
        <div className="flex-1 min-h-[600px] bg-gradient-to-r from-blue-400 to-purple-600 bg-cover lg:p-14 flex flex-col gap-6 text-white sm:p-5">
          <h1 className="text-5xl font-semibold text-center">Hello World</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            recusandae magnam, delectus, dicta ipsum sint culpa at hic error
            alias nostrum. Nisi quisquam tempore ad repellendus! Dolorem aliquid
            expedita libero.
          </p>
          <span className="text-sm text-center">Don't have an Account</span>

          <Link to={"/login"}>
            <button className="w-full p-2 border-none bg-white text-purple-600 font-bold text-center cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default Register;
