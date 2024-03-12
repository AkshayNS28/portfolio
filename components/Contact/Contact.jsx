import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import '../Contact/Contact.css'

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';



const Contact = () => {
  return (
    <>
      <div className="contacts">
        <Navbar />
        <div className="contact-container">
          <h1>Contact Me...</h1>
        </div>


        <a href={'tel:+919353578368'} className="logo" style={{ '--desc': '"Call me anytime"', '--color': '#26ad48' }}>
          {<FaPhone />}
          <span className='title'>{'Phone'}</span>
          
        </a>
        
        
        <a href={'mailto:akshaykohli028@gmail.com'} className="logo" style={{ '--desc': '"Mail for any queires"', '--color': '#d44638' }}>
          {<FaEnvelope />}
          <span className='title'>{'Email'}</span>
        </a>

        <a href={'https://www.linkedin.com/in/akshay--ns/'} className="logo" style={{ '--desc': '"Connect through LinkedIn"', '--color': '#0077b5' }}>
          {<FaLinkedin />}
          <span className='title'>{'LinkedIn'}</span>
        </a>

        <a href={'https://github.com/AkshayNS28'} className="logo" style={{ '--desc': '"Have a look at small repo"', '--color': ' #000000' }}>
          {<FaGithub />}
          <span className='title'>{'GitHub'}</span>
        </a>

        <a href={'https://www.instagram.com/akshay.n.s'} className="logo" style={{ '--desc': '"Follow on Instagram"', '--color': '#bc2a8d ' }}>
          {<FaInstagram />}
          <span className='title'>{'Instagram'}</span>
        </a>



        <Footer />
      </div>
    </>
  )
}

export default Contact
