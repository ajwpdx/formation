import React from "react"
import logo from '../../images/formation-secondary-logo.png'

const Header = ({ siteTitle }) => (
  <header>
    <a href="/">
      <img src={logo} className='formation-logo' alt='formation logo'/>
      </a>
    <nav>
      <a href="/rules">RULES</a>
      <a href='/print-play'>PRINT & PLAY</a>
      <a href='/'>BUY</a>
      <a href='/'>CONTACT</a>
    </nav>
  </header>
)

export default Header
