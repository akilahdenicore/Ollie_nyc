import React, {useState} from 'react';
import ProductCard from './ProductCard';

function LandingPage( {products, user} ) {
   
 console.log(products)


  return (

    <div>
        <div>
            <div className='about-blurb'>
                <p>
                  Founded in 2019, Ollie is a cocktail bar with an emphasis on seasonal, hand-crafted ingredients made with heart. 
                    Our goal is to welcome you with innovative yet approachable cocktails while enjoying 
                    a variety of curated dishes by chef Lucas Santos
                </p>
            </div>

            <div className="contact" id="contact">
                <p> Visit is at: </p>
               <p> 64 Downing Street New York, NY 10014 </p>
               <a href="https://resy.com/cities/ny/ollie?date=2022-08-22&seats=2" target="_blank" rel="noopener noreferrer">Make a reservation here!</a>
              </div>

                 <p> For private parties please contact
                     Telephone: (917) 484-1302
                     ollie.westvillage@gmail.com
                 </p>  
            </div>
       
        </div>
   
  )
}

export default LandingPage