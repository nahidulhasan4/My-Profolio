import React, {useRef,useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/component/Layout";
import AnimatedText from "@/component/AnimatedText";
import ProfilePic from "../../public/images/profile/profile2.png";
import { useMotionValue, useInView, useSpring } from "framer-motion";
import Skills from "@/component/Skills";
import Experence from "@/component/Experence";
import Education from "@/component/Education";

const AnimatedNumbers = ({value}) => {
  const ref =useRef(null);

  const motionValue = useMotionValue(0);
  const springValue= useSpring(motionValue, {duration: 3000});
  const isInView = useInView(ref, {once: true});
  useEffect(() => {
   if(isInView){
    motionValue.set(value);
   }
  },[isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <=value){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  },[springValue, value])

  return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
      <Head>
        <title>Nahid | About Page </title>
        <meta
          name="description"
          content="HI there here you can Know About me, professional MERN stack developer and SEO expert you can hire me for you project"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 px-5">
          <AnimatedText text="Passion Fules Purpose!" className=" !text-8xl  dark:text-light mb-16" />
          <div className=" grid w-full grid-cols-8  mb-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h1 className="mb-4 text-lg  dark:text-light font-bold uppercase text-dark/75">
                Biograpy
              </h1>
              <p className="font-medium  dark:text-light">
                Hi, I'm Nahid Hasan Patwary, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With One years of experience in the field. 
              </p>
              <p className="my-4 font-medium  dark:text-light">
                - I believe that design is about more than just making things
                look pretty – it's about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>

              <p className="font-medium dark:text-light">
                - Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
              <Image
                src={ProfilePic}
                alt="nahid"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block  dark:text-light text-7xl font-bold">
                  <AnimatedNumbers value={50}/>+
                  </span>
                <h2 className="text-xl font-medium  dark:text-light capitalize text-dark/75">Satisfied client</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block  dark:text-light text-7xl font-bold">
                <AnimatedNumbers value={40}/>+
                  </span>
                <h2 className="text-xl  dark:text-light font-medium capitalize text-dark/75">Projects Completed</h2>
              </div>
              <div className="flex flex-col  dark:text-light items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={2}/>+
                  </span>
                <h2 className="text-xl font-medium  dark:text-light capitalize text-dark/75">Years of exprence</h2>
              </div>
            </div>
          </div>


          <Skills />
          <Experence />
          <Education />
        </Layout>
        
      </main>
    </>
  );
};

export default about;
