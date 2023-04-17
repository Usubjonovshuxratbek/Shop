import React from 'react'
import './Category.scss'
import Img03 from  '../../assets/img/Img03.png'
import Img04 from  '../../assets/img/Img04.png'
import pro1 from '../../assets/img/product2.png'
import pro2 from '../../assets/img/product.png'

function Category() {
  return (
    <div className='container'>
      <div className='container_inner'>
        <div className='saidBar'>
            <h1>Blog</h1>
            <form action="#">
              <input type="text" placeholder='Search...' />
              <span></span>
            </form>
            <h2 className='c_h2'>Categories</h2>
            <ul className='c_list'>
              <li>Fashion</li>
              <li>Style</li>
              <li>Accessories</li>
              <li>Season</li>
            </ul>
          </div>
          <div className='c_card'>
            <div className='card1'>
              <img src={Img03}alt="" />
              <p>Fashion - October 8, 2020</p>
              <h3>Top Trends From Spring</h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... </h4>
              <button>Read More</button>
            </div>
            <div className='card2'>
              <img src={Img04}alt="" />
              <p>Fashion - October 8, 2020</p>
              <h3>Top Trends From Spring</h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... </h4>
              <button>Read More</button>
            </div>
            <div className='card3'>
              <img src={pro1}alt="" />
              <p>Fashion - October 8, 2020</p>
              <h3>Top Trends From Spring</h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... </h4>
              <button>Read More</button>
            </div>
            <div className='card4'>
              <img src={pro2}alt="" />
              <p>Fashion - October 8, 2020</p>
              <h3>Top Trends From Spring</h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... </h4>
              <button>Read More</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Category