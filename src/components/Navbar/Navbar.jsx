import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import SearchIcon from '../../assets/img/search-icon.png'
import HeartIcon from '../../assets/img/heart.png'
import ChatIcon from '../../assets/img/chart.png'
import ContactIcon from '../../assets/img/me.png'
import './Navbar.scss'

function Navbar() {
  return (
    <nav className='nav'>
      <div className="container">
        <div className="nav__inner">
          <div className="right">
            <a href="/"><img src={Logo} alt="" /></a>
          </div>
          <div className="center">
            <select>
              <option value="Каталог товаров">Каталог товаров</option>
            </select>
            <form action="#">
              <img src={SearchIcon} alt="" />
              <input type="text" placeholder='Поиск товаров' />
            </form>
          </div>
          <div className="left">
            <Link to='/'><img src={HeartIcon} alt="" /></Link>
            <Link to='/'><img src={ChatIcon} alt="" /></Link>
            <Link to='/'><img src={ContactIcon} alt="" /></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
