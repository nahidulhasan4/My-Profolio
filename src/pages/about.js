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
        </Layout>
      </main>
    </>
  );
};

export default about;
