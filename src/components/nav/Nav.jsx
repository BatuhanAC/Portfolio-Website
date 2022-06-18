import React from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageAltDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'
import { motion, useViewportScroll } from 'framer-motion'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const {scrollY} = useViewportScroll()
  scrollY.onChange(y => {
    if(y <= 500){
      setActiveNav('#')
    }
    else if (y >= 501 && y <=1150 ) {
      setActiveNav('#about')
    }
    else if (y >= 1151 && y <=1750 ) {
      setActiveNav('#experience')
    }
    else if (y >= 1751 && y <=3900 ) {
      setActiveNav('#services')
    }
    else if (y >= 3901) {
      setActiveNav('#contact')
    }
    }
  )

  return (
    <motion.nav
      initial={{
        opacity:0,
        x: "50vw"
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition= {{
        x: {type: 'spring', damping: 20},
        default: {duration: 1.5}
      }}
    >
      <a href='#' className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services' className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail/></a>
    </motion.nav>
  )
}

export default Nav