import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'> Moelmou</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#hardskills">Hard Skills</a></li>
      <li><a href="#softskills">Soft Skills</a></li>
      <li><a href="#activities">Activities</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.facebook.com/elmoukimohamed0/"><FaFacebookF/></a>
      <a href="https://www.instagram.com/moelmouki/"><FiInstagram/></a>
      <a href="https://twitter.com/elmouki_mohamed"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Mohamed EL MOUKI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer