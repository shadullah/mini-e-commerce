import Input from "../../../Shared/Input/Input";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [error] = useState("");

  const login = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://127.0.0.1:8000/users/v1/login/", {
        username: data.username,
        password: data.password,
      });
      localStorage.setItem("id", res.data.user.id);
      localStorage.setItem("token", res.data.refresh);
      localStorage.setItem("accToken", res.data.access);
      window.location.href = "/";
      console.log("Logged in", res.data);
      toast.success("logged in", { duration: 3000 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full my-12">
        <div
          className={`mx-auto w-full max-w-lg bg-orange-400 rounded-xl p-10 border border-black/10`}
        >
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full text-xl text-center font-bold">
              Wellcrafters Mini
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link
              to="/register"
              className="font-medium text-primary transition-all duration-200 underline"
            >
              Sign Up
            </Link>
          </p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(login)} className="mt-8">
            <div className="space-y-5">
              <Input
                label="Username: "
                placeholder="Enter your username"
                type="name"
                {...register("username", {
                  required: true,
                })}
              />
              <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
              />
              <button
                type="submit"
                className="w-full bg-orange-500 rounded-md py-2 font-bold text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
