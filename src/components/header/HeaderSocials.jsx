import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials' >
        <a href="https://www.linkedin.com/in/elmoukimohamed/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/moelmou/" target='_blank'><FaGithub/></a> 
        <a href="https://github.com/moelmou/" target='_blank'><FaTwitterSquare/></a> 
    </div>
  )
}

export default HeaderSocials