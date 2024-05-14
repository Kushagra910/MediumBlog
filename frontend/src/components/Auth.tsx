import { SignUpInput,SignInInput } from "@kushagra05/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import {toast}from'react-hot-toast'

type AuthInputs = {
  signin : SignInInput;
  signup : SignUpInput;
}

export const Auth = ({ type }: { type: "signup" | "signin" }) => {

  const navigate  = useNavigate();
  const [postInputs, setPostInputs] = useState<AuthInputs[keyof AuthInputs]>({
    name: "",
    email: "",
    password: "",
  });

 async function sendRequest(){
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`,postInputs);
      const jwt = response?.data;
      localStorage.setItem("token",jwt);
      toast.success(`${type === 'signup' ? "Signup Successfull": "Signin Successful"}`);
      navigate("/blogs");
    } catch(err){
      toast.error(`${type === 'signup' ? "Signup Failed":"Sigin Failed"}`);
      console.log("ERROR_DURING_SIGNUP");
    }
  }
  return (
    <div className="h-screen flex flex-col  justify-center leading-4">
      <div className="flex justify-center  ">
        <div className="flex flex-col gap-2">
          <div className="mb-4 flex flex-col gap-2 px-12">
            <div className="font-extrabold text-4xl">Create an account</div>
            <div className="text-lg text-center font-semibold text-slate-500">
              {type === "signin" ? "Don't have an account ?" : "Already have an account ?"} {" "}
              <Link to={type === "signin" ? "/signup" : '/signin'} className="underline">
                {type === "signin" ? "SignUp" : "Login"}
              </Link>
            </div>
          </div>
          {type === "signup" ?  
          <LabelledInput
            label="Name"
            placeholder="Enter your name"
            onChange={(e) => {
              setPostInputs((prev) => ({ ...prev, name: e.target.value }));
            }}
          />  : null}
          <LabelledInput
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => {
              setPostInputs((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <LabelledInput
            label="Password"
            type={"password"}
            placeholder="Enter your password"
            onChange={(e) => {
              setPostInputs((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
          <button onClick={sendRequest} type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-md px-5 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In" }</button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput = ({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) => {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 font-semibold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
