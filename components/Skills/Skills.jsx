import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import '../Skills/Skills.css'
const Skills = () => {

  return (
    <>
      <div className="skills">
        <Navbar />

        <div className="card card1">
          <img src="Images\skills_pic\python.png" className="card-img" alt="Python"></img>
          <div className="card-body">
            <h5 className="card-title">Python</h5>  
          </div>
        </div>

        <div className="card card2">
          <img src="Images\skills_pic\javascript.svg" className="card-img" alt="Javascript"></img>
          <div className="card-body">
            <h5 className="card-title">Javascript</h5>  
          </div>
        </div>

        <div className="card card3">
          <img src="Images\skills_pic\react.png" className="card-img" alt="ReactJS"></img>
          <div className="card-body">
            <h5 className="card-title">ReactJS</h5>  
          </div>
        </div>

        <div className="card card4">
          <img src="Images\skills_pic\html.png" className="card-img" alt="HTML"></img>
          <div className="card-body">
            <h5 className="card-title">HTML</h5>  
          </div>
        </div>

        <div className="card card5">
          <img src="Images\skills_pic\node.png" className="card-img" alt="NodeJS"></img>
          <div className="card-body">
            <h5 className="card-title">NodeJS</h5>  
          </div>
        </div>

        <div className="card card6">
          <img src="Images\skills_pic\sql.svg" className="card-img" alt="SQL"></img>
          <div className="card-body">
            <h5 className="card-title">SQL</h5>  
          </div>
        </div>

        <div className="card card7">
          <img src="Images\skills_pic\css.svg" className="card-img" alt="CSS"></img>
          <div className="card-body">
            <h5 className="card-title">CSS</h5>  
          </div>
        </div>

        <div className="card card8">
          <img src="Images\skills_pic\express.png" className="card-img" alt="ExpressJS"></img>
          <div className="card-body">
            <h5 className="card-title">ExpressJS </h5>  
          </div>
        </div>

        <div className="card card9">
          <img src="Images\skills_pic\da.png" className="card-img" alt="Data Analytics"></img>
          <div className="card-body">
            <h5 className="card-title">Data Analytics</h5>  
          </div>
        </div>


        <Footer />
      </div >
    </>
  )
}

export default Skills
