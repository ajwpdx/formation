import React from "react"
import '../styles/index.scss'
import Header from '../components/header'
import triangle from '../images/formation-triangle.png'
import square from '../images/formation-square.png'
import circle from '../images/formation-circle.png'

const IndexPage = () => (

  <div id='home'>

<header>
  <h1 href="/">FORMATION</h1>
    <nav>
    <a href="/rules">RULES</a>
    <a>PRINT & PLAY</a>
    <a>BUY</a>
    <a>CONTACT</a>
    </nav>
</header>

    {/* <h1>FORMATION</h1> */}
    <div className='shape-grid'>
      <img src={triangle} className='shape triangle' />
      <img src={triangle} className='shape triangle' />
      <img src={triangle} className='shape triangle' />
      <img src={square} className='shape square' />
      <img src={square} className='shape square' />
      <img src={square} className='shape square' />
      <img src={circle} className='shape circle' />
      <img src={circle} className='shape circle' />
      <img src={circle} className='shape circle' />
      <h3>a card-arranging strategy game</h3>
    </div>
  </div>

)

export default IndexPage
