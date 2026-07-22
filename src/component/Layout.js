import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 dark:bg-dark bg-light sm:p-10 ${className}`}>
        {children}
    </div>
  )
}

export default Layout