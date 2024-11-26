import { SubmitHandler, useForm } from "react-hook-form";
import LoginImg from "../../../assets/images/login.svg";
import SwiperLogin from "../../../components/swiper_login/SwiperLogin";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import CinemaxHeader from "../../../components/cinemax_header/CinemaxHeader";
import { useCreateUserMutation } from "../../../store/api/create-user-api copy";
import { useGetAllUserQuery } from "../../../store/api/get-all-users-api";
import { UserType } from "../../../utils";

function Register() {
  const [createUser] = useCreateUserMutation();
  const { data = [] } = useGetAllUserQuery(true) as { data: UserType[] };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  type FormValues = {
    full_name: string;
    email_adress: string;
    password: string;
    confirm_password: string;
  };
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.password == data.confirm_password) {
      const user_data = {
        full_name: data.full_name,
        email: data.email_adress,
        password: data.password,
        verification_code: 1232132,
      };
      console.log(user_data);
      createUser(user_data);
    } else alert("Please enter the same password");
  };
  return (
    <section className="grid grid-cols-2 overflow-hidden h-screen">
      <div className="col-span-1 bg-primary">
        <SwiperLogin />

        <img src={LoginImg} alt="" className=" mt-10" />
      </div>
      <div className="col-span-1 bg-background h-screen  px-[80px] flex items-center justify-center flex-col space-y-[78px] text-grayscale-10">
        <CinemaxHeader />
        <div className="w-full max-w-[800px]">
          <h1 className="text-center font-bold text-[32px] mb-10 tracking-[.5%]">
            Register
          </h1>
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
                className="py-[15px] text-sm bg-lineDark-10 px-[16px] rounded-full outline-none"
              />
            </label>
            <label htmlFor="" className="flex flex-col gap-2">
              <span className="text-grayscale-70 text-sm font-medium">
                Email Adress
              </span>
              <input
                type="text"
                {...register("email_adress")}
                placeholder="Enter your email address"
                className="py-[15px] text-sm bg-lineDark-10 px-[16px] rounded-full outline-none"
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
                  className="py-[15px] text-sm bg-lineDark-10 px-[16px] w-full rounded-full outline-none"
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
            <label htmlFor="" className="flex select-none flex-col gap-2">
              <span className="text-grayscale-70 text-sm font-medium">
                Confirm Password
              </span>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirm_password")}
                  placeholder="Enter your password"
                  className="py-[15px] text-sm bg-lineDark-10 px-[16px] w-full rounded-full outline-none"
                />

                {showConfirmPassword ? (
                  <FaRegEye
                    onClick={() => setShowConfirmPassword((p) => !p)}
                    className="absolute top-5 right-5"
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setShowConfirmPassword((p) => !p)}
                    className="absolute top-5 right-5"
                  />
                )}
              </div>
            </label>
            <div className="mt-10 w-full space-y-6">
              <button className="bg-primary hover:bg-primary/80 transition-all w-full font-semibold text-center rounded-full py-4 text-grayscale-10">
                Login
              </button>
              <p className="text-grayscale-60 text-center font-semibold">
                Already have an account?{" "}
                <a href="/" className="text-primary">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
