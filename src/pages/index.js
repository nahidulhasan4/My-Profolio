import Head from "next/head";
import React from "react";
import { Inter } from "next/font/google";
import Layout from "@/component/Layout";
import ProfilePic from "../../public/images/profile/nahidProb.png";
import Image from "next/image";
import AnimatedText from "@/component/AnimatedText";
import Link from "next/link";
import LinkArrow from "@/component/Icons";
import HireMe from "@/component/HireMe";
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className=" mt-7 flex dark:text-light w-full min-h-screen text-dark font-mont">
        <Layout className="pt-0 ">
          <div className="flex items-center  justify-between w-full">
            <div className="w-1/2">
              <Image
                src={ProfilePic}
                alt="nahio Hasan"
                className="w-full h-auto"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className=" dark:text-light w-auto !text-left  text-2xl  mb-4"
              />
              <p className="my-4 text-base mb-4 font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development
              </p>
              <div className="flex items-center self-start mt-2 gap-3 ">
                {/* here design some design  */}
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-dark dark:bg-light dark:text-dark hover:bg-light border-solid border-transparent hover:border-dark border-2"
                >
                  Resume{" "}
                </Link>

                <Link
                  href="mailto:nahidhsan4836@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium underline capitalize text-dark  dark:text-light "
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-[-140px] inline-block w-24">
          <Image src={lightbulb} alt="nahid" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
