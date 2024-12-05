import React from 'react'

const AboutMe = () => {
  return (
    <div className=" fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
    <div className="w-48 h-auto flex items-cneter justify-center relative">
      <CircularText className={"fill-dark animate-spin-slow"} />
      <Link
        href="mailto:nahidhasan4836@gmail.com"
        className="flex items-center justify-center absolute right-1/2  top-[68px] translate-x-1/2 translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-auto rounded "
      >
        About Me
      </Link>
    </div>
  </div>
  )
}

export default AboutMe