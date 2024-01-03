"use client";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../../public/images/projects/crypto-screener-cover-image.jpg";
import project6551 from "../../../public/images/projects/6551Visualizer.png";
import projectAgenteAI from "../../../public/images/projects/agenteAI22.png";
import projectCertify from "../../../public/images/projects/CertifyForever.png";
import projectGalicia from "../../../public/images/projects/GALICIADEMO.png";
import projectMK from "../../../public/images/projects/MKFitness.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light dark:bg-dark shadow-2xl p-12  dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%]
       xs:w-full xs:rounded-[1.5rem] "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold  dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit this Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[102.5%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <div className="mt-2 flex flex-col items-center ">
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline md:text-base"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="fullstack dev" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="ERC-6551 Token Visualizer"
                img={project6551}
                summary="A powerful Crypto Visualizer App using React, Tailwind CSS,
                 Context API, React Router and Recharts.
                 It displays information about various ERC-6551 tokens and their images."
                link="https://6551visualizer.com/"
                github="https://github.com/sebapch"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MoE Agent AI Application"
                img={projectAgenteAI}
                summary="A smart AI Application using Python, Next and AWS services. It simulates the behavior of a MoE agent in a complex environment.
                 You can easily adjust the parameters and observe the results."
                link="www.agenteaitech.com"
                github="https://github.com/sebapch"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Certify emmiter Application"
                img={projectCertify}
                summary=" A secure Crypto Certify App using React, Tailwind CSS, Web3, IPFS, 
                and Solidity. It allows you to create certificates and stamp them in blockchain
                 for immutability.
                 You can easily verify the authenticity and integrity of your certificates."
                link="https://certifyforever.com/"
                github="https://github.com/sebapch"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Blockchain certificates for courses backoffice"
                img={projectGalicia}
                summary=" A robust Blockchain Certificates App using React, Tailwind CSS, Web3,
                 IPFS, and Solidity.
                  It allows you to create and manage certificates for online courses
                   and store them in blockchain for immutability.
                 You can easily issue and revoke certificates and share them in app."
                link="https://www.segurosblockchain.com/"
                github="https://github.com/sebapch"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Landing Page"
                img={projectMK}
                summary="A stunning Fitness Trainer Landing Page using React,
                 Tailwind CSS, React Scroll, and React Icons. It showcases the services,
                  testimonials, and contact details of a fitness trainer.
                 You can easily book a session or send a message through the page."
                link="https://github.com/sebapch"
                github=""
                type="https://github.com/sebapch"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary=" A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                link="/"
                github=""
                type="Featured Project"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
