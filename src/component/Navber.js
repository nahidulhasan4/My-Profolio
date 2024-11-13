import Link from 'next/link'
import React from 'react'
import Logo from '@/component/Logo'
const Navber = () => {
  return (
  <>
  <header className='w-full px-32 py-8 font-medium flex items-center justify-between '>
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
        <Link href="/article">Article</Link>
    </nav>
    <Logo />
    <nav>
        <Link href="/" target={'_blank'}>Tiwtter</Link>
        <Link href="/" target={'_blank'}>Tiwtter</Link>
        <Link href="/" target={'_blank'}>Tiwtter</Link>
        <Link href="/" target={'_blank'}>Tiwtter</Link>
        <Link href="/" target={'_blank'}>Tiwtter</Link>
    </nav>

  </header>
  </>
  )
}

export default Navber