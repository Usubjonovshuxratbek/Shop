import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../../components/Context/Context';
import Star from '../../assets/img/star.png'
import Like from '../../assets/img/like.png'
import Liner from '../../assets/img/liner.png'
import Fecbook from '../../assets/img/fecbook-icon.png'
import Instagiram from '../../assets/img/instagram-icon.png'
import Twiter from '../../assets/img/twiter-icon.png'
import Message from '../../assets/img/message.png'
import './Buy-Main.scss'

function BuyMain() {
  const {product} = useContext(Context)
    const { slug } = useParams()
    const fullProduct = product.find((item) => item.id == slug)
  return (
    <section className='buy'>
      <div className="container">
        <div className="buy__inner">
          <div className="products__img">
            <ul className='products__img-list'>
              {
                product && product.slice(0,4).filter((item)=>item).map((item, index)=>(
                  <li className='products__img-item' key={index}>
                    <Link to={`/shopProducts/buy/${item.id}`}>
                    <img src={item.img} alt="" />
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="product__img">
            <img src={fullProduct.img} alt="" />
          </div>
          <div className="product__info">
            <h2>{fullProduct.name}</h2>
            <span>{fullProduct.price}</span>
            <div className="star">
              <img src={Star} alt="" />
            </div>
            <p>{fullProduct.description}</p>
            <div className="add-btn">
            <div className="quantity">
              <button className='quantity-add'>+</button>
              <span className='total-price'>1</span>
              <button className='quantity-remove'>-</button>
            </div>
            <button className='cart-btn'>ADD TO CART</button>
            </div>
            <div className="social-media">
            <img src={Like} alt="" />
            <img src={Liner} alt="" />
            <img src={Message} alt="" />
            <img src={Fecbook} alt="" />
            <img src={Instagiram} alt="" />
            <img src={Twiter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuyMain
