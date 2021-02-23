import React, { useState, useEffect } from "react"
import Header from '../layouts/Header'
import triangle from '../../images/formation-triangle.png'
import square from '../../images/formation-square.png'
import circle from '../../images/formation-circle.png'
import forLogo from '../../images/for-logo.png'
import matLogo from '../../images/mat-logo.png'
import ionLogo from '../../images/ion-logo.png'



const Home = () => {

  const [logoView, setLogoView] = useState(0)

  
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoView(logoView => logoView + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  
  return (

    <div id='home'>
      <Header />


      <div className='shape-grid'>
        <div className={logoView > 2 ? 'hidden' : 'shape-row'}>
          <img src={triangle} className='shape ani-1' alt='yellow triangle' />
          <img src={triangle} className='shape ani-1' alt='yellow triangle' />
          <img src={triangle} className='shape ani-1' alt='yellow triangle' />
        </div>
        <div className={logoView > 2 ? 'logo-piece' : 'hidden'}>
          <img src={forLogo}  alt="FOR" />
        </div>
        <div className={logoView > 3 ? 'hidden' : 'shape-row'}>
          <img src={square} className='shape ani-2' alt='green square' />
          <img src={square} className='shape ani-2' alt='green square' />
          <img src={square} className='shape ani-2' alt='green square' />
        </div>
        <div className={logoView > 3 ? 'logo-piece' : 'hidden'}>
          <img src={matLogo}  alt="MAT" />
        </div>
        <div className={logoView > 4 ? 'hidden' : 'shape-row'}>
          <img src={circle} className='shape ani-3' alt='red circle' />
          <img src={circle} className='shape ani-3' alt='red circle' />
          <img src={circle} className='shape ani-3' alt='red circle' />
        </div>
        <div className={logoView > 4 ? 'logo-piece' : 'hidden'}>
          <img src={ionLogo}  alt="ION" />
        </div>
        <h3 className={logoView > 5 ? "sub-title" : "hidden"}>a card-arranging strategy game</h3>
      </div>
    </div>



  )

}

export default Home
