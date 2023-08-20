import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import article1 from '../../../public/images/articles/pagination.jpg'

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2">{title}</h2>
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
          <ul className="grid grid-col-2 gap-16">
            <li>
              <FeaturedArticle
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                img={article1}
                link="/"
                time="9 min read"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              />
            </li>
            <li>Featured Articles -1</li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default page;
