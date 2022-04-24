import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { loginAtom } from "../atoms/logInAtom";
import { toast } from "react-toastify";
import { useState } from "react";

const LoginForm = () => {
  const [logIn, setLogIn] = useRecoilState(loginAtom);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmitForm = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_URL}/api/user/login`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      Cookies.set("token", data.token);
      Cookies.set("userInfo", JSON.stringify(data.user));
      router.push("/");
    } catch (err) {
      toast(err.response.data ? err.response.data.mess : err.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-[85%] sm:h-[70vh] h-[100vh] sm:max-w-4xl mx-auto shadow-2xl grid sm:grid-cols-2 rounded-2xl place-items-center space-y-8 sm:space-y-0">
      {/* Left */}
      <div>
        <img
          src="login.svg"
          className="w-[80%] h-full object-contain mx-auto"
          alt=""
        />

        <p className="font-joseFin px-4 mt-5 text-right sm:text-center">
          Not a Member?
          <span
            onClick={() => {
              setLogIn(!logIn);
            }}
            className="text-lime-400 font-semibold ml-2 border-b scale-anim inline-block cursor-pointer border-lime-400 py-1"
          >
            Sign Up
          </span>
          <span
            onClick={() => router.push("/")}
            className="sm:px-5 font-joseFin text-sm font-semibold scale-anim border-black m-4 block"
          >
            Go back to Home page
          </span>
        </p>
      </div>
      {/* Right */}
      <div className="bg-white font-joseFin px-10 w-full h-full py-8 sm:py-24 flex flex-col justify-center">
        <h1 className="text-3xl font-semibold mb-4 text-center">Sign In</h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="flex flex-col space-y-2">
            <label className="" htmlFor="Email">
              Email
            </label>
            <input
              name="email"
              placeholder="Enter Your Email"
              className={`signinButton ${
                errors.email && "ring-2 ring-red-400"
              }`}
              {...register("email", {
                required: {
                  value: true,
                  message: "You must enter your Email",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
                minLength: {
                  value: 2,
                  message: "This is not enough to be an Email",
                },
                maxLength: {
                  value: 120,
                  message: "This is too long",
                },
              })}
            />
            <span className="text-sm text-orange-500 ml-auto">
              {errors?.email?.message}
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="" htmlFor="Password">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Your Password"
              className={`signinButton ${
                errors?.password && "ring-2 ring-red-400"
              }`}
              {...register("password", {
                required: {
                  value: true,
                  message: "You must enter your Password",
                },
                minLength: {
                  value: 6,
                  message: "The password must be greater than 6 character",
                },
                maxLength: {
                  value: 12,
                  message: "This is too long",
                },
              })}
            />
            <span className="text-sm text-orange-500 ml-auto">
              {errors?.password?.message}
            </span>
          </div>
          <span className="text-sm mt-4 block text-right cursor-pointer scale-anim text-green-500">
            Forgot Your Password !!
          </span>
          <button
            className="mx-auto block py-2 px-4 bg-gradient-to-r from-[#009ffd] to-[#90d5ec] text-white rounded-lg scale-anim rounded-tr-none"
            type="submit"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
