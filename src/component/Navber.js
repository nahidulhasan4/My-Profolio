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
  <header className='w-full px-32 py-8 font-medium dark:text-light flex items-center justify-between '>
    <nav className='px-3'>
        <CastomLink href="/" title="Home" className="mr-4"/> 
        <CastomLink href="/about" title="About" className="mx-4" />
        <CastomLink href="/project" title="Project" className="mx-4" />
        <CastomLink href="/article"  title="Artical" className="ml-4" />
    </nav>
    
    <nav className=' flex items-center justify-center flex-warp'>
        <motion.a href="https://x.com/HasanNahid1028" target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mr-3'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/seo-expert-nahid-hasan-69b025230/" target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        >
        <LinkedInIcon />
        </motion.a>
        <motion.a href="https://www.pinterest.com/nahidhasan4836/" target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        >
        <PinterestIcon />
        </motion.a>
        <motion.a href="https://github.com/nahidulhasan4" target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        >
        <GithubIcon/>
        </motion.a>
        <motion.a href="https://dribbble.com/" target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 ml-3'
        >
        <DribbbleIcon />
        </motion.a>
    <button onClick={() => setMode(mode === "light" ? "dark" : "light") } 
      className={`ml-3 flex items-center justify-center  rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
      >
{
  mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
}
    </button>

    </nav>
     <div className=' absolute left-[50%] top-2 translate-x-[50%]'>
     <Logo />
     </div>
  </header>
  </>
  )
}

export default Navber