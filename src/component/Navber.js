import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/component/Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from "@/component/Icons";
import { motion } from "framer-motion";
import useThemeSwticher from "./hooks/useThemeSwticher";

const CastomLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} relative group text-sm sm:text-base`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navber = () => {
  const [mode, setMode] = useThemeSwticher();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 sm:px-8 lg:px-32 font-medium dark:text-light relative z-30">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center gap-1.5 p-2 rounded-full border border-dark/20 dark:border-light/20 lg:hidden"
            aria-label="Toggle navigation"
          >
            <span className="block h-0.5 w-5 bg-dark dark:bg-light"></span>
            <span className="block h-0.5 w-5 bg-dark dark:bg-light"></span>
            <span className="block h-0.5 w-5 bg-dark dark:bg-light"></span>
          </button>
          <div className="hidden lg:block">
            <nav className="flex items-center gap-4 px-3">
              <CastomLink href="/" title="Home" />
              <CastomLink href="/about" title="About" />
              <CastomLink href="/project" title="Project" />
              <CastomLink href="/article" title="Artical" />
            </nav>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-wrap gap-2">
          <motion.a
            href="https://x.com/HasanNahid1028"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/seo-expert-nahid-hasan-69b025230/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.pinterest.com/nahidhasan4836/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://github.com/nahidulhasan4"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://dribbble.com/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <DribbbleIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-2 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </div>

        <div className="absolute left-1/2 top-2 -translate-x-1/2">
          <Logo />
        </div>
      </div>

      {isOpen && (
        <div className="mt-3 rounded-2xl border border-dark/10 bg-light/95 p-4 shadow-xl dark:border-light/10 dark:bg-dark/95 lg:hidden">
          <nav className="flex flex-col gap-3">
            <CastomLink
              href="/"
              title="Home"
              onClick={() => setIsOpen(false)}
            />
            <CastomLink
              href="/about"
              title="About"
              onClick={() => setIsOpen(false)}
            />
            <CastomLink
              href="/project"
              title="Project"
              onClick={() => setIsOpen(false)}
            />
            <CastomLink
              href="/article"
              title="Artical"
              onClick={() => setIsOpen(false)}
            />
          </nav>
          <div className="mt-4 flex items-center flex-wrap gap-3">
            <motion.a
              href="https://x.com/HasanNahid1028"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/seo-expert-nahid-hasan-69b025230/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.pinterest.com/nahidhasan4836/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://github.com/nahidulhasan4"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://dribbble.com/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <DribbbleIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-1 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navber;
