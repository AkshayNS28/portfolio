import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import '../Skills/Skills.css'
const Skills = () => {

  return (
    <>
      <div className="skills">
        <Navbar />

        <div class="card python">
          <img src="Images\skills_pic\python.png" class="card-img" alt="Python"></img>
          <div class="card-body">
            <h5 class="card-title">Python</h5>  
          </div>
        </div>
        

        <div class="card javascript">
          <img src="Images\skills_pic\javascript.svg" class="card-img" alt="Javascript"></img>
          <div class="card-body">
            <h5 class="card-title">Javascript</h5>  
          </div>
        </div>

        <div class="card react">
          <img src="Images\skills_pic\react.png" class="card-img" alt="react"></img>
          <div class="card-body">
            <h5 class="card-title">ReactJS</h5>  
          </div>
        </div>

        <div class="card html">
          <img src="Images\skills_pic\html.png" class="card-img" alt="html"></img>
          <div class="card-body">
            <h5 class="card-title">HTML</h5>  
          </div>
        </div>

        <div class="card node">
          <img src="Images\skills_pic\node.png" class="card-img" alt="node"></img>
          <div class="card-body">
            <h5 class="card-title">NodeJS</h5>  
          </div>
        </div>

        <div class="card sql">
          <img src="Images\skills_pic\sql.svg" class="card-img" alt="sql"></img>
          <div class="card-body">
            <h5 class="card-title">SQL</h5>  
          </div>
        </div>

        <div class="card css">
          <img src="Images\skills_pic\css.svg" class="card-img" alt="css"></img>
          <div class="card-body">
            <h5 class="card-title">CSS</h5>  
          </div>
        </div>

        <div class="card express">
          <img src="Images\skills_pic\express.png" class="card-img" alt="express"></img>
          <div class="card-body">
            <h5 class="card-title">ExpressJS </h5>  
          </div>
        </div>

        <div class="card da">
          <img src="Images\skills_pic\da.png" class="card-img" alt="da"></img>
          <div class="card-body">
            <h5 class="card-title">Data Analytics</h5>  
          </div>
        </div>

       
        <Footer />
      </div >
    </>
  )
}

export default Skills
