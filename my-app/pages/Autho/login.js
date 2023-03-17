import Link from "next/link";
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Navbar from "@/Component/Navbar";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const handalsubmit = (e) => {
    e.preventDefault();
    console.log(user.data[0].payload, " d");
    const data = {
      email: email,
      password: password,
    };
    user.data.map((item) => {
      if (data.email === item.payload.email) {
        if (data.password === item.payload.password) {
          alert("login success");
          Router.push("/Tour/UserInterface");
        } else {
          alert("password is wrong");
        }
      } else {
        alert("email is wrong");
      }
    });
  };
  return (
    <>
      <Navbar btn="Logout"></Navbar>
      <section className="bg-gray-50 d-flex dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center  md:w-6/12 md:shrink-0 lg:w-6/12 xl:w-6/12 px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handalsubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <button className="w-full px-4 py-2 text-sm font-medium hover:bg-slate-500 hover:text-white  bg-white-600 rounded-lg hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 bg-white text-black focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900">
                  Login
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  I dont have have an account?{" "}
                  <Link
                    href="/Autho/register"
                    className="font-medium text-primary-600 hover:underline dark:text-white "
                  >
                    Registar Now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
