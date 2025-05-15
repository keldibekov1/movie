import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleGoogleSuccess = (response) => {
   
    console.log("Google login successful", response);
   
    navigate("/");
  };

  const handleGoogleError = () => {
    setError("Google login failed. Please try again.");
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="mt-15 rounded-3">
          <FaAngleLeft
            className="w-14 h-14 bg-[#111111] text-[#C61F1F] rounded-[12px]"
            onClick={() => navigate("/")}
          />
        </div>
        <h1 className="mt-15 text-[32px] text-center font-bold">Login</h1>
        <form className="flex flex-col gap-4 mt-19 items-center">
          <input
            type="text"
            placeholder="Username"
            className="w-[380px] h-[64px] p-2 rounded-md bg-[#1D1D1D] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C61F1F]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[380px] h-[64px] p-2 rounded-md bg-[#1D1D1D] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C61F1F]"
          />
          <button className="bg-[#C61F1F] p-2 rounded-md w-[380px] h-[52px]">
            Login
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-4 items-center">
         
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
            theme="filled_blue"
            className="flex items-center bg-[#111111] text-white p-2 gap-2 rounded-md w-[180px] h-[52px]"
          >
            <FaGoogle className="ml-10" /> Google
          </GoogleLogin>
        </div>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
