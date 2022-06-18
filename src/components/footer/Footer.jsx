import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>BADUH</a>

      <ul className='permalinks'>
        <li><a href='#'>Başlangıç</a></li>
        <li><a href='#about'>Hakkında</a></li>
        <li><a href='#experience'>Tecrübe</a></li>
        <li><a href='#services'>Servisler</a></li>
        <li><a href='#portfolio'>Portfolyo</a></li>
        <li><a href='#testimonials'>Yorumlar</a></li>
        <li><a href='#contact'>İletişim</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com' target="_blank"><FaFacebookF/></a>
        <a href='https://instagram.com' target="_blank"><FiInstagram/></a>
        <a href='https://twitter.com' target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; BADUH, tüm hakları saklıdır.</small>
      </div>
    </footer>
  )
}

export default Footer