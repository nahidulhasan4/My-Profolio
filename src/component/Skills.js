import React from 'react'
import {motion} from 'framer-motion'


const Skill= ({name, x, y}) =>{

  return(
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadaw-dark cursor-pointer absolute"
      whileHover={{scale:1.05}}
      initial={{x:0, y:0}}
      animate={{x:x, y:y}}
      >
        {name}

      </motion.div>

     
  )
}






const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-54 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

      <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadaw-dark cursor-pointer "
      whileHover={{scale:1.05}}
      >
        web

      </motion.div>
      <Skill name="CSS" x="-5vw" y="-10vw" />
      <Skill name="HTML" x="-10vw" y="-5vw" />
      <Skill name="CSS" x="-5vw" y="-10vw" />
    </div>
    </>
  )
}

export default Skills