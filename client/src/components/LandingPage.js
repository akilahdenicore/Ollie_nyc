import React, {useState} from 'react';
import ProductCard from './ProductCard';
import Carousel from './Carousel';
import "../styles/LandingPage.css"
// import BlendModeSlider from "./BlendModeSlider"



function LandingPage( {products, user} ) {
   
 console.log(products)


  return (
    <div className="middle-intro">
      <div className="hero-section">
        <Carousel />
        <h1>Come Sip at Ollie</h1>
        
      </div>
      <div className='about-section'>
        <h3 className="about-heading">About</h3>
        <p>Founded in 2019, Ollie is a cocktail bar with an emphasis on seasonal, hand-crafted ingredients made with heart.</p> 
        <p>Our goal is to welcome you with innovative yet approachable cocktails while enjoying a variety of curated dishes by chef Lucas Santos</p>
      </div>
      <div className="contact-section" id="contact">
        <h3>Contact</h3>
        <p> Visit is at: </p>
        <p> 64 Downing Street New York, NY 10014 </p>
        <a href="https://resy.com/cities/ny/ollie?date=2022-08-22&seats=2" target="_blank" rel="noopener noreferrer">Make a reservation here!</a>
        <p>For private parties please contact Telephone: (917) 484-1302</p>  
        <p>ollie.westvillage@gmail.com</p>
      </div>
    </div>
  )
}
export default LandingPage