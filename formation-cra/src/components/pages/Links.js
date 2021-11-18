import React from "react"
import logo from '../../images/formation-secondary-logo.png'


const Links = () => {
    return (
        <div id="links">
            <a href="/">
                <img src={logo} className='formation-logo' alt='formation logo' />
            </a>
            <div className='link-buttons'>
                <a  href="https://taborgames.com/">Buy Formation</a>
                <a  href="https://boardgamegeek.com/boardgame/347775/formation">Review on BoardGameGeek</a>
                <a  href="https://www.facebook.com/formationcardgame">Follow us on Facebook</a>
                <a  href="/rules">Checkout the Rules</a>
                <a  href='https://www.dropbox.com/s/rtgkqfky8zlpu09/Formation_PrintPlay.pdf?dl=0' target="_blank" rel="noreferrer">Download Print & Play</a>
                <a  href="https://www.youtube.com/channel/UCCAWZi6a7aJa-_C6sPAJa_Q/featured">Watch Videos</a>
            </div>

        </div>
    )
}

export default Links