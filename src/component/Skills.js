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
    <h2 className='font-bold  dark:text-light text-8xl mt-64 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

      <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadaw-dark cursor-pointer "
      whileHover={{scale:1.05}}
      >
        web

      </motion.div>
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
    </>
  )
}

export default Skills