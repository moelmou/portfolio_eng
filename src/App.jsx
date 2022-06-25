import React from 'react'
import About from "./components/about/About";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Hardskills from './components/hardskills/Hardskills'
import Activities from './components/activities/Activities'
import Softskills from './components/softskills/Softskills'
import Testemonilas from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Hardskills/>
        <Softskills/>
        <Activities/>
        <Testemonilas/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App