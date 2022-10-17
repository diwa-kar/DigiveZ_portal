import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
/* import { useHistory } from "react-router-dom"; */

import loginImg from "../assets/login.jpg";
import { emailValidator, passwordValidator } from "./regexValidator";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({ email: "", password: "" });

  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formSubmitter = (e) => {
    /* console.log("for submitter is working") */
    e.preventDefault();
    setsuccessMessage("");

    if (!emailValidator(input.email))
      return seterrorMessage("Please enter valid email id");

    if (!emailValidator(input.password))
      return seterrorMessage(
        "Password should contain minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters"
      );

    if (input.email !== "diwa@gmail.com" || input.password !== "Diwa@1")
      return seterrorMessage("Invalid email or password");
    
    navigate('/options')
    
    setsuccessMessage("Successfully Validated");
    /*  console.log(input) */
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">DigiVerse</h2>
          {errorMessage.length > 0 && (
            <div style={{ marginBottom: "10px", color: "red" }}>
              {errorMessage}
            </div>
          )}
          {successMessage.length > 0 && (
            <div style={{ marginBottom: "10px", color: "green" }}>
              {successMessage}
            </div>
          )}
          <div className="flex flex-col py-2">
            <label>Email ID</label>
            <input
              className="border p-2"
              type="text"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <button
            className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
            onClick={formSubmitter}
          >
            Sign In
          </button>

          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Create an account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
