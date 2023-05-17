import React from 'react'
import './Hero.scss'
import Icon from '../../assets/img/icon.png'
import PhoneImg from '../../assets/img/phone.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="container">
        <div className="hero__inner">
            <div className="big">
              <h2><span>1.8</span> млн товаров в <span>2272</span> магазинах найди, сравни, выберай!</h2>
              <a href="/">Перейти к категориям
                <img src={Icon} alt="" />
              </a>
            </div>
            <div className="small">
              <h2><span>Топ-10</span> смартфонов 2023 года</h2>
              <a href="/">Смотреть
                <img src={Icon} alt="" />
              </a>
              <img src={PhoneImg} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
