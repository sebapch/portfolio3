"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../../public/images/articles/pagination.jpg";
import article2 from "../../../public/images/articles/smooth.png";
import article3 from "../../../public/images/articles/todo.png";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

    const x  = useMotionValue(0)
    const y  = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse(e){
        imgRef.current.style.display = "inline-block";
        x.set(e.pageX);
        y.set(-10);

    }

    function handleMouseLeave(e){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }
    

  return (
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline ">
        {title}
      </h2>
      <FramerImage
      style={{x:x, y:y}}
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{duration:0.2}}}
      ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg"/>
    </Link>
  );
};

const ArticleSmall = ({ img, title, date, link }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once: true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 
    border border-solid border-dark border-r-4 border-b-4"
    >
      
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 ">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>About Sebas | Articles</title>
        <meta name="description" content="fullstack dev" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World! "
            className="mb-16 "
          />
          <ul className="grid grid-cols-2 gap-16">
            <li>
              <FeaturedArticle
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                img={article1}
                link="/"
                time="9 min read"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              />
            </li>
            <li>
              <FeaturedArticle
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                img={article2}
                link="/"
                time="9 min read"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              />
            </li>
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <ArticleSmall
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="September 22, 2023"
              link="/"
            />
            <ArticleSmall
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="September 22, 2023"
              link="/"
            />
            <ArticleSmall
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="September 22, 2023"
              link="/"
            />
            <ArticleSmall
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="September 22, 2023"
              link="/"
            />
            <ArticleSmall
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="September 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default page;
