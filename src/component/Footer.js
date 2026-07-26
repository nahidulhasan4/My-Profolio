import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid dark:border-light border-dark font-medium text-sm sm:text-lg'>
        <Layout className='py-6 sm:py-8 flex flex-col gap-3 sm:flex-row dark:text-light items-center justify-between text-center'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex dark:text-light items-center flex-wrap justify-center'>Build <span className='text-primary text-xl sm:text-2xl px-1'>&#9825;</span>by &nbsp;
            <Link className='dark:text-light' href="https://github.com/nahidulhasan4">Nahid hasn</Link>
            </div>
            <Link className='dark:text-light' href="">Say Help</Link>
        </Layout>
    </footer>
  )
}

export default Footer