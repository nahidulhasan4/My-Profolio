import Link from 'next/link'
import React from 'react'
import Logo from '@/component/Logo'


const CastomLink= ({href, title, className=""}) =>{
  return(
    <Link href={href} className={`${className}`}>
      {title}
    </Link>
  )
}
const Navber = () => {
  return (
  <>
  <header className='w-full px-32 py-8 font-medium flex items-center justify-between '>
    <nav className='px-3'>
        <CastomLink href="/" title="Home" className="mr-4"/> 
        <CastomLink href="/about" title="About" className="mx-4" />
        <CastomLink href="/project" title="Project" className="mx-4" />
        <CastomLink href="/article"  title="Artical" className="ml-4" />
    </nav>
    
    <nav>
        <Link href="/" target={'_blank'}>Tiwtter</Link>
        <Link href="/" target={'_blank'}>Tiwtter</Link>
        <Link href="/" target={'_blank'}>Tiwtter</Link>
        <Link href="/" target={'_blank'}>Tiwtter</Link>
        <Link href="/" target={'_blank'}>Tiwtter</Link>
    </nav>
     <div className=' absolute left-[50%] top-2 translate-x-[50%]'>
     <Logo />
     </div>
  </header>
  </>
  )
}

export default Navber