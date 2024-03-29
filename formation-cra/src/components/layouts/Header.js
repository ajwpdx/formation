import React from "react"
import logo from '../../images/formation-secondary-logo.png'

const Header = ({ siteTitle }) => (
  <header>
    <a href="/">
      <img src={logo} className='formation-logo' alt='formation logo'/>
      </a>
    <nav>
      <a href="/rules">RULES</a>
      <a href='https://www.dropbox.com/s/rtgkqfky8zlpu09/Formation_PrintPlay.pdf?dl=0' target="_blank" rel="noreferrer">PRINT & PLAY</a>
      <a href='https://taborgames.com/products/formation'>BUY</a>
      <a href='/contact'>CONTACT</a>
    </nav>
  </header>
)

export default Header
