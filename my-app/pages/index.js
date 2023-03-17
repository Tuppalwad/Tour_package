import React from "react";
import Head from "next/head";

import Navbar from "@/Component/Navbar";
function index() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar btn1="Login" btn2="Register"></Navbar>
      <h1 style={{ marginTop: "100px", justifyContent: "center" }}>
        Welcome to the Daily My Shopping
      </h1>
    </div>
  );
}

export default index;
