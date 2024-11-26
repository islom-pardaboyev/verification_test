import { SubmitHandler, useForm } from "react-hook-form";
import { FacebookIcon, GoogleIcon } from "../../../assets/images";
import LoginImg from "../../../assets/images/login.svg";
import SwiperLogin from "../../../components/swiper_login/SwiperLogin";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import CinemaxHeader from "../../../components/cinemax_header/CinemaxHeader";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  type FormValues = {
    full_name: string;
    password: string;
  };
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <section className="grid grid-cols-2 overflow-hidden h-screen">
      <div className="col-span-1 bg-primary">
        <SwiperLogin />

        <img src={LoginImg} alt="" className=" mt-10" />
      </div>
      <div className="col-span-1 bg-background h-screen  px-[80px] flex items-center justify-center flex-col space-y-[78px] text-grayscale-10">
        <CinemaxHeader/>
        <div className="w-full max-w-[800px]">
          <h1 className="text-center font-bold text-[32px] tracking-[.5%]">
            Hey there, <br /> welcome back
          </h1>
          <div className=" mt-10">
            <div className="space-y-[24px]">
              <button className="w-full flex items-center gap-3 justify-center py-4 rounded-[20px] bg-lineDark-10">
                <GoogleIcon />
                <p className="font-semibold">Login with Google</p>
              </button>
              <button className="w-full flex items-center gap-3 justify-center py-4 rounded-[20px] bg-lineDark-10">
                <FacebookIcon />
                <p className="font-semibold">Login with Facebook</p>
              </button>
            </div>
            <div className="flex items-center mt-[24px] gap-2">
              <span className="block w-full h-px bg-lineDark-10"></span>
              <p className="w-full inline-block text-center text-border text-grayscale-70 font-medium">
                Or login with
              </p>
              <span className="block w-full h-px bg-lineDark-10"></span>
            </div>
          </div>
          <form
            action=""
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="" className="flex flex-col gap-2">
              <span className="text-grayscale-70 text-sm font-medium">
                Full Name
              </span>
              <input
                type="text"
                {...register("full_name")}
                placeholder="Enter your name"
                className="py-[15px] placeholder:text-sm bg-lineDark-10 px-[16px] rounded-full outline-none"
              />
            </label>
            <label htmlFor="" className="flex select-none flex-col gap-2">
              <span className="text-grayscale-70 text-sm font-medium">
                Password
              </span>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Enter your password"
                  className="py-[15px] placeholder:text-sm bg-lineDark-10 px-[16px] w-full rounded-full outline-none"
                />

                {showPassword ? (
                  <FaRegEye
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute top-5 right-5"
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute top-5 right-5"
                  />
                )}
              </div>
            </label>
            <a
              href="reset_password"
              className="font-semibold text-sm text-primary text-end"
            >
              Forgot Password
            </a>
            <div className="mt-10 w-full space-y-6">
              <button className="bg-primary w-full font-semibold text-center rounded-full py-4 text-grayscale-10">
                Login
              </button>
              <p className="text-grayscale-60 text-center font-semibold">
                Don’t have an account? <a href="register" className="text-primary">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
