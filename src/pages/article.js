import React from "react";
import Head from "next/head";
import Layout from "@/component/Layout";
import AnimatedText from "@/component/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import Articale from "../../public/images/articles/create loading screen in react js.jpg";
import Articale1 from "../../public/images/articles/create modal component in react using react portals.png";
import Articale2 from "../../public/images/articles/pagination component in reactjs.jpg";
import { motion } from "framer-motion";

const FremerImage = motion(Image);

const FutureArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 relative bg-light w-full p-4 border border-solid dark:border border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] roounded-br-3xl rounded-[2rem] bg-dark" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FremerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-t-lg"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 ">{title}</h2>
      </Link>
      <p className="">{summary} </p>
      <spa className="text-primary font-semibold">{time}</spa>
    </li>
  );
};

const Article = () => {
  return (
    <>
    {/* here design head  */}
      <Head>
        <title>Nahid | Article </title>
        <meta
          name="description"
          content="HI there here you can Know About me, professional MERN stack developer and SEO expert you can hire me for you project"
        />
      </Head>
      <main className="w-full flex flex-col mb-16 items-center justify-center overflow-hidden">
        <Layout className="pt-16 px-5">
          <AnimatedText
            text="Word can change the world!"
            className=" !text-6xl  dark:text-light mb-16"
          />
          <ul className=" grid grid-cols-2 gap-16">
            <FutureArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="  Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={Articale}
            />
            <FutureArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary=" Learn how to create stunning loading screens in React with 3 different methods. 
Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
Improve the user experience."
              time="10 min read"
              link="/"
              img={Articale1}
            />
            <FutureArticle
              title="Form Validation In Reactjs: "
              summary=" Build 3 Types Of Loading Screens
Learn how to create stunning loading screens in React with 3 different methods. 
Discover how to use React-Loading, React-Lottie & build a custom loading screen."
              time="10 min read"
              link="/"
              img={Articale2}
            />
          </ul>
        </Layout>
      </main>
      Learn
    </>
  );
};

export default Article;
