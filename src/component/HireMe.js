import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
const HireMe = () => {
  return (
    <div className="fixed left-2 bottom-2 sm:left-4 sm:bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-32 h-auto sm:w-48 flex items-cneter justify-center relative">
        <CircularText
          className={"fill-dark dark:fill-white  animate-spin-slow"}
        />
        <Link
          href="mailto:nahidhasan4836@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-16 h-16 sm:w-20 sm:h-20 rounded-full font-semibold hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
