import React from 'react'
import {motion} from 'framer-motion'


const Skill= ({name, x, y}) =>{

  return(
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadaw-dark cursor-pointer absolute"
      whileHover={{scale:1.05}}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y}}
      transition={ {duration: 1.8}}
      viewport={{once: true}}
      >
        {name}

      </motion.div>

     
  )
}






const Skills = () => {
  return (
    <>
      <h2 className='font-bold dark:text-light text-5xl sm:text-6xl lg:text-8xl mt-20 sm:mt-32 lg:mt-64 w-full text-center'>Skills</h2>
      <div className='w-full min-h-[60vh] sm:h-screen relative flex flex-wrap items-center justify-center rounded-[2rem] sm:rounded-full bg-circularLight p-6 sm:p-0 mt-8 sm:mt-0'>
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 sm:p-8 shadow-dark cursor-pointer mb-4 sm:mb-0"
          whileHover={{scale:1.05}}
        >
          web
        </motion.div>
        <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-0 sm:absolute">
          <Skill name="CSS" x="-5vw" y="-10vw" />
          <Skill name="HTML" x="-20vw" y="2vw" />
          <Skill name="Bootstrap" x="-35vw" y="-7vw" />
          <Skill name="Firebase" x="-15vw" y="15vw" />
          <Skill name="Javascript" x="20vw" y="8vw" />
          <Skill name="React JS" x="5vw" y="19vw" />
          <Skill name="SCSS" x="35vw" y="3vw" />
          <Skill name="Web Design" x="20vw" y="-5vw" />
          <Skill name="Tailwind" x="5vw" y="-19vw" />
        </div>
      </div>
    </>
  )
}

export default Skills