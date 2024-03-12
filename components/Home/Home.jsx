import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../Home/Home.css'
const Home = () => {
  return (
    <>
      <div className='Homepage'>
        <Navbar/>
        <div className='welcomeNote'>
          Hey ! Welcome to my page, have a nice day.<br></br><span id='subtitle'>Explore more...
          </span>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
