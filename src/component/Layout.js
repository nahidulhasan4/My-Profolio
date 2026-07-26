import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 dark:bg-dark bg-light px-4 py-6 sm:px-8 sm:py-8 lg:px-16 lg:py-10 ${className}`}>
        {children}
    </div>
  )
}

export default Layout