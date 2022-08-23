import React from 'react'
import "../styles/footer.css"
import { TiSocialInstagram } from "react-icons/ti";


function Footer() {
  return (
    <div className="footer-style" >
    <a href="https://www.instagram.com/ollie_westvillage/?hl=en" target="_blank" rel="noopener noreferrer"><TiSocialInstagram/></a>
    <a href="https://www.departures.com/cuisine/ollie-nyc-blvd-cocktail" target="_blank" rel="noopener noreferrer">Press</a>

    </div>
  )
}

export default Footer