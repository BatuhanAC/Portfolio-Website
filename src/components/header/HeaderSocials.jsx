import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import { motion } from 'framer-motion'

const HeaderSocials = () => {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delayChildren: 1.5
      }
    }
  }
  const aVariants = {
    hidden: {
     y: "-40vw",
    },
    visible: {
      y:0,
      scale: [1, 1.5, 1]
    }
  }
  const rotateVariant = {
    visible: {
      rotate:360,
      transition: {
        delay: 2,
        repeatDelay: 5,
        duration: 10.5,
        repeat: Infinity
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className='header__socials'>
        <motion.a href='https://www.linkedin.com/in/batuhan-acar-29a488202/' target="_blank"
          variants={aVariants}
          transition={{y:{type: "spring", damping:2.5 , delay:1.5}, scale:{duration:1, delay:2, repeatDelay: 2, repeat: Infinity}}}
        ><BsLinkedin/></motion.a>
        <motion.a href='https://github.com/BatuhanAC' target="_blank"
          variants={aVariants}
          transition={{y:{type: "spring", damping:2.5, delay:1}, scale:{duration:1, delay:1.8, repeatDelay: 2, repeat: Infinity}}}
        ><FaGithub/></motion.a>
        <motion.a href='https://twitter.com/cntkphsb' target="_blank"
          variants={aVariants}
          transition={{y:{type: "spring", damping:2.5, delay:0.5}, scale:{duration:1, delay:1.5, repeatDelay: 2, repeat: Infinity}}}
        ><FaTwitterSquare/></motion.a>
      </motion.div>
    </motion.div>
  )
}

export default HeaderSocials