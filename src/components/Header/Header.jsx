import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Liner from '../../assets/img/liner.png'
import Search from '../../assets/img/search-icon.png'
import Save from '../../assets/img/shopping-cart.png'
import Pupil from '../../assets/img/pupil-icon.png'

function Header() {
    return (
        <header className='header'>
            <nav className='nav'>
                <h2>SHOPPE</h2>
                <ul>
                    <li>
                        <Link to='/'>Shop</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Our Story</Link>
                        <Link to='/'>
                            <img src={Liner} alt="" />
                        </Link>
                        <Link to='/'>
                        <img src={Search} alt="" />
                        </Link>
                        <Link to='/'>
                        <img src={Save} alt="" />
                        </Link>
                        <Link to='/'>
                            <img src={Pupil} alt="" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
