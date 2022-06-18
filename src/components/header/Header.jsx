import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'
import { motion } from 'framer-motion'

const Header = () => {
  const containerVariants = {
    hidden: {},
    visible: {}
  }
  const hVariants = {
    hidden: {
      opacity:0
    },
    visible: {
      opacity:1,
    }
  }
  const imageVariants = {
    hidden: {
      opacity:0
    },
    visible: {
      opacity:1,
      transition: {
        duration:1.5,
        delayChildren:1
      }
    }
  }
  

  return (
    <motion.header>
      <motion.div className= "container header__container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h5 
          variants={hVariants}
          transition={{duration:1.5, delay: 0.5}}
        >Merhabalar! Adım;</motion.h5>
        <motion.h1 
          variants={hVariants}
          transition={{duration:1.5, delay: 1}}
        >Batuhan</motion.h1>
        <motion.h5 className= "text-light"
          variants={hVariants} 
          transition={{duration:1.5, delay: 1.5}}
        >Frontend Yazılımcıyım</motion.h5>
        <CTA/>
        <HeaderSocials/>

        <motion.div className='me'
          variants={imageVariants}
        >
          <motion.img variants={imageVariants} src={ME} alt='me'/>
        </motion.div>
        
        <motion.a variants={hVariants} transition={{duration:1.5}} href='#contact' className='scroll__down'>En alta git</motion.a>
      </motion.div>
    </motion.header>
  )
}

export default Header