import React from 'react'
import OllieLogo from '../images/OllieLogo.png'

function Header() {
  return (
    <div>
        <img className="logo" src={OllieLogo} height={100} width />
    </div>
  )
}

export default Header