import Navber from "@/component/Navber";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head"
import Footer from "@/component/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <Navber />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
