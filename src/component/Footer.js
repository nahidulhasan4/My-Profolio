import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid  dark:border-light border-dark font-medium text-lg '>
        <Layout className='py-8 flex dark:text-light items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex dark:text-light items-center'>Build With <span className='text-primary  text-2xl px-1'>&#9825;</span>by &nbsp;
            <Link className='dark:text-light' href="https://github.com/nahidulhasan4">Nahid hasn</Link>
            </div>
            <Link className='dark:text-light' href="">Say Help</Link>
        </Layout>
    </footer>
  )
}

export default Footer