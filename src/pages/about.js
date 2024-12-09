import React from "react";
import Head from "next/head";
import Layout from "@/component/Layout";
import AnimatedText from "@/component/AnimatedText";
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
        <Layout className="pt-16">
          <AnimatedText text="Passion Fules Purpose!" />
          <div className=" grid w-full grid-col-8 gap-16  ">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h1 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biograpy
              </h1>
              <p className="font-medium">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="my-4 font-medium">
                {" "}
                - I believe that design is about more than just making things
                look pretty – it's about solving problems and creating
                intuitive, enjoyable experiences for users.{" "}
              </p>

              <p>
                - Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
