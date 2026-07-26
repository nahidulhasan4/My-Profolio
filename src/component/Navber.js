import Link from 'next/link'
import React from 'react'
import Logo from '@/component/Logo'
import { useRouter } from 'next/router'
import {TwitterIcon,GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon} from '@/component/Icons'
import{motion}from 'framer-motion'
import useThemeSwticher from './hooks/useThemeSwticher'

const CastomLink= ({href, title, className=""}) =>{
const router = useRouter();
console.log(router)

  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
    <span className={`h-[1px] inline-block  bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${router.asPath===href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>

    </Link>
  )
}
const Navber = () => {
  const [mode, setMode] = useThemeSwticher();

  return (
  <>
  <header className='w-full px-3 py-3 sm:px-8 lg:px-32 font-medium dark:text-light flex items-center justify-between sticky top-0 z-50 bg-light/95 backdrop-blur supports-[backdrop-filter]:bg-light/80 dark:bg-dark/95 dark:supports-[backdrop-filter]:bg-dark/80'>
    <div className='flex items-center gap-2'>
      <div className='flex-shrink-0'>
        <Logo />
      </div>
      <nav className='hidden sm:flex items-center px-2'>
        <CastomLink href="/" title="Home" className="mr-3"/> 
        <CastomLink href="/about" title="About" className="mx-3" />
        <CastomLink href="/project" title="Project" className="mx-3" />
        <CastomLink href="/article"  title="Artical" className="ml-3" />
      </nav>
    </div>
    
    <nav className='flex items-center justify-center flex-wrap gap-2'>
        <motion.a href="https://x.com/HasanNahid1028" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-5 sm:w-6'>
          <TwitterIcon />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/seo-expert-nahid-hasan-69b025230/" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-5 sm:w-6'>
        <LinkedInIcon />
        </motion.a>
        <motion.a href="https://www.pinterest.com/nahidhasan4836/" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-5 sm:w-6'>
        <PinterestIcon />
        </motion.a>
        <motion.a href="https://github.com/nahidulhasan4" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-5 sm:w-6'>
        <GithubIcon/>
        </motion.a>
        <motion.a href="https://dribbble.com/" target={'_blank'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-5 sm:w-6'>
        <DribbbleIcon />
        </motion.a>
    <button onClick={() => setMode(mode === "light" ? "dark" : "light") } 
      className={`ml-1 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
      {mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>} 
    </button>
    </nav>
  </header>
  </>
  )
}

export default Navber