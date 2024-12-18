import {React, useRef}from "react";


import {motion, useScroll} from "framer-motion";
const Details = ({ positon, company, companyLInk, time, adress, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {positon} &nbsp;{" "}
          <a
            className="text-primary capitalize"
            target="_blank"
            href={companyLInk}
          >
            @{company}
          </a>
        </h3>
        <span className=" font-medium capitalize text-dark/75">
          {time} {adress}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
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
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Experence</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-8 top-0 w-[4px] h-full  bg-dark origin-top"/>
        <ul className="w-full flex flex-col items-center justify-between ml-4">
          <Details
            positon="  Software Engineer"
            company=" Google"
            time=" 2022-Present |"
            companyLInk="www.google.com"
            adress="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
          <Details
            positon="  Software Engineer"
            company=" Google"
            time=" 2022-Present |"
            companyLInk="www.google.com"
            adress="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
          <Details
            positon="  Software Engineer"
            company=" Google"
            time=" 2022-Present |"
            companyLInk="www.google.com"
            adress="Mountain View, CA"
            work=" Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
          <Details
            positon="  Software Engineer"
            company=" Google"
            time=" 2022-Present |"
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
