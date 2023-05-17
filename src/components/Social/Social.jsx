import React from 'react'
import './Social.scss'
import AppLogo from '../../assets/img/app-logo.png'
import PlayLogo from '../../assets/img/play-logo.png'
import SocialImg from '../../assets/img/social-img.png'
import SocialImgMobile from '../../assets/img/social-img-mobil.png'

function Social() {
    return (
        <div className='social'>
            <div className="container">
                <div className="social__inner">
                    <div className="social__inner-info">
                        <h2><span>Экономьте</span> свое время и получайте <span>максимум</span> от ежедневных покупок</h2>
                        <div className="downol-links">
                            <a href="/" className='play'>
                                <img src={PlayLogo} alt="" />
                            </a>
                            <a href="/" className='app'>
                                <img src={AppLogo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="social__inner-img">
                        <img className='img-one' src={SocialImg} alt="" />
                        <img className='img-two' src={SocialImg} alt="" />
                        <img className='img-three' src={SocialImgMobile} alt="" />
                        <img className='img-four' src={SocialImgMobile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social
