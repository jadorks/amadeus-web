import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Amodeus</title>
      </Head>
      <div className="relative">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
