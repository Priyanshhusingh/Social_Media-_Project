import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/authcontext";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [redirect, setRedirect] = useState(false);
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const { login } = useContext(AuthContext);
  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      const rep = await login(values);
      console.log(rep)
      if (rep) {
        setRedirect(true);
      }
    } catch (error) {
      toast.warning(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
      });
    }
  };
  if (redirect) {
    return <NavLink to={"/"} />;
  }
  return (
    <div className="h-screen bg-[rgb(170,166,233)] flex items-center justify-center">
      <div className="flex bg-white w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] rounded-lg overflow-hidden">
        <div className="flex-1 min-h-[600px] bg-gradient-to-r from-blue-400 to-purple-600 bg-cover lg:p-14 flex flex-col gap-6 text-white sm:p-5">
          <h1 className="text-5xl font-semibold">Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            recusandae magnam, delectus, dicta ipsum sint culpa at hic error
            alias nostrum. Nisi quisquam tempore ad repellendus! Dolorem aliquid
            expedita libero.
          </p>
          <span className="text-sm">Don't have an Account</span>
          <Link to={"/register"}>
            <button className="w-full p-2 border-none bg-white text-purple-600 font-bold text-center cursor-pointer">
              Register
            </button>
          </Link>
        </div>
        <div className="flex-1 lg:p-14 sm:p-5 flex flex-col gap-12 justify-center">
          <h1 className="text-2xl font-semibold text-[#555]">Login</h1>
          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="border border-none border-b  border-[lightgray] py-2 px-3 sm:px-4 md:px-5 lg:px-6"
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              className="border border-none border-b border-[lightgray] py-2 px-3 sm:px-4 md:px-5 lg:px-6"
            />
            <button
              className="w-full p-3 border-none bg-purple-500 text-white font-bold cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default Login;
