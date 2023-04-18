import React from 'react'
import Linkidin from '../../assets/img/linkidin-icon.png'
import Fecbook from '../../assets/img/fecbook-icon.png'
import Instagiram from '../../assets/img/instagram-icon.png'
import Twiter from '../../assets/img/twiter-icon.png'
import './Footer.scss'

function Search__Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="liner"></div>
                <div className="footer__inner">
                    <nav className='footer__inner-nav'>
                        <div className="nav-right">
                        <ul className='right-list'>
                            <li className='right-item'>
                                <a href="/">CONTACT</a>
                                <a href="/">TERMS OF SERVICES</a>
                                <a href="/">SHIPPING AND RETURNS</a>
                            </li>
                        </ul>
                        </div>
                        <div className="nav-left">
                                    <a href="/">Give an email, get the newsletter.</a>
                            <div className="left-liner"></div>
                        </div>
                    </nav>
                    <div className="footer__inner-info">
                        <div className="info-text">
                        <p>© 2021 Shelly. Terms of use and privacy policy.</p>
                        </div>
                        <div className="social-media">
                        <img src={Linkidin}alt="" />
                        <img src={Fecbook}alt="" />
                        <img src={Instagiram}alt="" />
                        <img src={Twiter}alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Search__Footer
