import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/component/Layout";
import ProfilePic from "../../public/images/profile/darkNahid.png";
import Image from 'next/image'
import AnimatedText from "@/component/AnimatedText";
import Link from 'next/link'
// import LinkArrow from '@/component/Icons'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className=" flex w-full min-h-screen text-dark font-mont">
        <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={ProfilePic} alt="nahio Hasan" className="w-full h-auto" ></Image>
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
          
          <AnimatedText text="Turning Vision Into Reality With Code And Design." className=" !text-left mb-4"/>
          <p className="my-4 text-base font-medium">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
          Explore my latest projects and articles, showcasing my expertise in React.js and web development</p>
          <div className="flex items-center self-start mt-2 gap-3 ">
            <Link href="/dummy.pdf" target={'_blank'} download={true} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-dark hover:bg-light border-solid border-transparent hover:border-dark border-2">Resume
            
            </Link>
           
            <Link href="mailto:nahidhsan4836@gmail.com" target={'_blank'} className="flex items-center text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-light hover:bg-dark border-solid border-transparent hover:border-dark border-2" >Email</Link>
          </div>
          </div>
        </div>
        </Layout>
      </main>
    </>
  );
}
