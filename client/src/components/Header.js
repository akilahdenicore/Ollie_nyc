import React from 'react'
import image from './images/ollie-logo.png'

function Header() {
  return (
    <div>
        <img className="logo" src={image} height={100} width />
    </div>
  )
}

export default Header