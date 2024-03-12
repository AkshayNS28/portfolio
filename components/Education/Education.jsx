import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import '../Education/Education.css'


const Education = () => {
  return (
    <>
      <div className="education">
        <Navbar />

        <div id='degree'>
          <h3>Bachelor of Engineering</h3>
          <h1>P E S College Of Engineering, Mandya</h1>
          <p>Department of Computer science & engineering <br />
            Batch : 2023 <br />8.8 CGPA</p>
        </div>

        <br /><br />

        <div id='pu'>
          <h3>Pre University (Class 12th)</h3>
          <h1>Marimallappa PU College, Mysuru</h1>
          <p>Combination : PCMB<br />
            Batch : 2019 <br />92.50%</p>
        </div>

        <br /><br />

        <div id='sslc'>
          <h3>SSLC (Class 10th)</h3>
          <h1>Anitha High School, Malavalli</h1>
          <p>Karnataka State Board<br />
            Batch : 2017 <br />97.92%</p>
        </div>


        <Footer />
      </div>
    </>
  )
}

export default Education
