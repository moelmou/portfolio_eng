import React from 'react'
import './header.css'
import CTA from './CTA'
import '../../index.css'
import ME_N from '../../assets/ME2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>EL MOUKI Mohamed</h1>
        <h5 className="text-light">Software Engineering Student | Salesforce Intern at <a href='http://da-technologies.ma/'>D&A Technologies</a></h5>
        <CTA />
        <HeaderSocials />
        <div className='Me'>
          <img src={ME_N} alt="me" />
        </div>
      </div>
      <a href='#footer' className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header

