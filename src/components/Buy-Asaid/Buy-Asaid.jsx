import React from 'react'
import { Link } from 'react-router-dom'
import './Buy-Asaid.scss'

function BuyAsaid() {
  return (
    <div className="asaid">
        <div className='container'>
      <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                <Link className='nav__link' to='/'>Description</Link>
                <Link className='nav__link' to='/'>Aditional information</Link>
                <Link className='nav__link' to='/'>Reviews(0)</Link>
                </li>
            </ul>
        </nav>
        <div className="liner"></div>
    </div>
    </div>
  )
}

export default BuyAsaid
