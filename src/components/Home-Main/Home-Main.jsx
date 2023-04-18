import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './Home-Main.scss'
import { Context } from '../Context/Context';

function HomeMain() {
    const { product } = useContext(Context)
  return (
    <section className='home__main container'>
        <div className="home__main-boxs">
            <div className="box-1">
                <h2>Shop The Latest</h2>
            </div>
            <div className="box-2">
                <Link to='/ShopProducts'>View All</Link>
            </div>
        </div>
      <ul className='home__main-list'>
                {
                    product && product.map((item)=>(
                        <li className='home__main-item'>
                            <img src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <span>{item.price}</span>
                        </li>
                    ))
                }
            </ul>
    </section>
  )
}

export default HomeMain
