import {React, useRef}from "react";
import {motion, useScroll} from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ positon, company, companyLInk, time, adress, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-full sm:w-[80%] lg:w-[60%] mx-auto flex flex-col items-start sm:items-center justify-between">

       <LiIcon reference={ref} />
       
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize dark:text-light font-bold text-xl sm:text-2xl">
          {positon} &nbsp;{" "}
          <a
            className="text-primary   capitalize"
            target="_blank"
            href={companyLInk}
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium dark:text-light capitalize text-dark/75 text-sm sm:text-base">
          {time} {adress}
        </span>
        <p className="font-medium dark:text-light w-full text-sm sm:text-base">{work}</p>
      </motion.div>
    </li>
  );
};

const Experence = () => {
  const ref = useRef(null)
  const{scrollYProgress} = useScroll(
    {
      target: ref,
      offset:["start end", "center start"]
    }
  )
  return (
    <div className="my-20 sm:my-32 lg:my-64">
      <h2 className="font-bold dark:text-light text-5xl sm:text-6xl lg:text-8xl mb-10 sm:mb-20 lg:mb-32 w-full text-center">Experence</h2>
      <div ref={ref} className="w-full sm:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-3 sm:left-9 top-0 w-[3px] sm:w-[4px] h-full dark:bg-light bg-dark origin-top"/>
        <ul className="w-full flex flex-col items-center justify-between ml-2 sm:ml-4">
          <Details
            positon="  Shopno | salesman"
            company=" ShopnoShoping"
            time=" jun 2024- Dec 2024 |"
            companyLInk="www.google.com"
            adress="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
          <Details
            positon="  Frontend | Engineer"
            company=" Qumodosoft "
            time=" 2025- 2025 |"
            companyLInk="www.qumodosoft.com"
            adress="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
          <Details
            positon="  coffe  Mesin Oparetor"
            company=" java juction"
            time=" 2025-Present"
            companyLInk="www.google.com"
            adress="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
         
        </ul>
      </div>
    </div>
  );
};

export default Experence;
