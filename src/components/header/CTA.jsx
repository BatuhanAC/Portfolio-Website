import React from 'react'
import CV from '../../assets/cv.pdf'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <motion.div className='cta' 
    initial = {{
      opacity: 0
    }}
    animate = {{
      opacity: 1
    }}
    transition = {{
      duration: 1.5
    }}
    >
        <motion.a href={CV} download className='btn'>CV'mi indir.</motion.a>
        <motion.a href="#contact" className='btn btn-primary'>Konuşalım mı?</motion.a>
    </motion.div>
  )
}

export default CTA