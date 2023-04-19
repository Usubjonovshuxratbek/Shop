import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../../assets/img/search-icon.png'
import './Blog-SaidBar.scss'

function BlogSaidbar() {
    return (
        <div className='said__bar'>
            <h2 className='said__bar-title'>Blog</h2>
            <form action="#">
                <input type="text" placeholder='Search...' />
                <img src={Search} alt="" />
            </form>
            <ul className='said__bar-list'>
                <h2 className='list-title'>Categories</h2>
                <li className='said__bar-item'>
                <Link to='/blog/fashion'>Fashion</Link>
                <Link to='/'>Style</Link>
                <Link to='/'>Accessories</Link>
                <Link to='/'>Season</Link>
                </li>
            </ul>
        </div>
    )
}

export default BlogSaidbar
