import React, { useContext } from 'react'
import './Search__Main.scss'
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';

function Search__Main() {
    const {product} = useContext(Context)

    return (
        <div className='search__main'>
            <ul className='search__main-list'>
                {
                    product && product.map((item, index)=>( 
                            <li key={index} className='search__main-item'>
                            <Link className='home__Main-link' to={`/shopProducts/buy/${item.id}`}>
                            <img src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <span>{item.price}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Search__Main
