import React from 'react'
import Header from '../layouts/Header'
import triangle from '../../images/formation-triangle.png'
import circle from '../../images/formation-circle.png'
import square from '../../images/formation-square.png'


const Contact = () => {


    return (
        <div id="contact">

            <Header />

            <div className='msg'>
                <img src={circle} className='shape' alt='red circle' />
                <div>
                    <h3 id='general-inquiries'>General Inquiries</h3>
                    <p>For general questions about the game, the best way to reach us at this time is through our <a href="https://www.kickstarter.com/projects/alexwilliams/formation-a-card-arranging-strategy-game?ref=project_build" target="_blank" rel="noreferrer">Kickstarter campaign</a>.</p>
                </div>
                <img src={square} className='shape' alt='red circle' />
                <div>
                    <h3 id='creative-team'>Creative Team</h3>
                    <p>Graphic design for FORMATION was done by <a href='https://www.instagram.com/thedanclinton/?hl=en'>@thedanclinton</a>.</p>
                    <p>Video and photography for the FORMATION Kickstarter campaign were done by <a href='https://www.stereovisual.co/'>STEREOVISUAL</a>.</p>
                    <p>This website was created by <a href='https://alexjameswilliams.com/'>Alex Williams</a>.</p>
                </div>
            </div>
        </div>
    )

}

export default Contact