import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import '../About/About.css'


const About = () => {

  
    const openPdfFile = () => {
      window.open('Images/resume.png', '_blank'); // Open the PDF file in a new tab
    };
  return (
    <>
      <div className="about">
        <Navbar />
        <div className='myname'>
          A K S H A Y  &nbsp; N S
        </div>
        <div className="container">
          <div className="profile">
            Hello! I'm Akshay NS, a 23-year-old Computer Science Engineering graduate passionate about Software Development. As a fresher, I'm eagerly seeking opportunities to contribute to innovative projects and teams. If you're interested in discussing opportunities, please feel free to contact me through the contact section.
          </div>
          <div className="pic">
            <div className="img-container">
              <img src="Images\pic.png" alt="My Profic Picture" />
            </div>
          </div>
        </div>
        <div className="resume">
          <button className="button" onClick={openPdfFile}><b>Resume</b></button>
        </div>
        <div className="interest">
          <b>Interests:</b> Web Development | Data Science | Cricket | Fitness
        </div>
        <Footer />
      </div>
    </>
  )
}

export default About
