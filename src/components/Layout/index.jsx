import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Amodeus</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          content="Transform any text into an original musical composition."
          name="description"
        />
        <meta content="Amadeus" property="og:title" />
        <meta
          content="Transform any text into an original musical composition."
          property="og:description"
        />
        <meta content="/banner.png" property="og:image" />
        <meta content="Amadeus" property="twitter:title" />
        <meta
          content="Transform any text into an original musical composition."
          property="twitter:description"
        />
        <meta content="/banner.png" property="twitter:image" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <div className="relative">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
