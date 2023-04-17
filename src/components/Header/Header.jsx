import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Liner from '../../assets/img/liner.png'
import Search from '../../assets/img/search-icon.png'
import Save from '../../assets/img/shopping-cart.png'
import Pupil from '../../assets/img/pupil-icon.png'

function Header() {
    const [activer, setActiver] = useState(1)
    console.log(activer);
    return (
        <header className='header'>
            <div className="container">
                <nav className='nav'>
                    <div className="nav__right">
                        <h2 className='nav__right-title'>SHOPPE</h2>
                    </div>
                    <div className="nav__center">
                        <ul className='nav__center-list'>
                            <li className='nav__center-item'>
                                <Link onClick={() => setActiver(1)} className={activer == 1 ? 'nav__center-link activer' : 'nav__center-link'} to='/'>Shop</Link>
                                <Link onClick={() => setActiver(2)} className={activer == 2 ? 'nav__center-link activer' : 'nav__center-link'} to='/'>Blog</Link>
                                <Link onClick={() => setActiver(3)} className={activer == 3 ? 'nav__center-link activer' : 'nav__center-link'} to='/'>Our Story</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__left">
                        <ul className='nav__left-list'>
                            <li className='nav__left-item'>
                                <Link to='/' className='nav__left-link'>
                                    <img src={Liner} alt="" />
                                </Link>
                                <Link to='/' className='nav__left-link'>
                                    <img src={Search} alt="" />
                                </Link>
                                <Link to='/' className='nav__left-link'>
                                    <img src={Save} alt="" />
                                </Link>
                                <Link to='/' className='nav__left-link'>
                                    <img src={Pupil} alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="liner"></div>
            </div>
        </header>
    )
}

export default Header
