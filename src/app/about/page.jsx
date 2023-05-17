import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>About Seba</title>
        <meta name="description" content="fullstack dev" />
      </Head>
      <main>
        <AnimatedText text="Passion Fuels Purpose!" />
      </main>
    </>
  );
};

export default page;
