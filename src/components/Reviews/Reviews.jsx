import React from 'react'
import './Reviews.scss'
import Icon from '../../assets/img/icon.png'
import ReviewsProduct from '../../assets/img/reviews-img.png'

function Reviews() {
    const arr = [1, 2, 3, 4]
    return (
        <div className='reviews'>
            <div className="container">
                <div className="reviews__inner">
                    <div className="reviews__nav">
                        <ul className='reviews__nav-list'>
                            <li className='reviews__nav-item'>
                                <div className="right">
                                    <h3>Обзоры</h3>
                                </div>
                                <div className="left">
                                    <a href="/">К новинкам</a>
                                    <img src={Icon} alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="reviews__main">
                        <div className="cards">
                            <ul className='cards-list'>
                                {
                                    arr?.map((item, index) => (
                                        <li className='cards-item' key={index}>
                                            <div className="card">
                                                <img src={ReviewsProduct} alt="" />
                                                <h3>Обзор устаревших смартфонов</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc.</p>
                                                <a href="/">К новинкам</a>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
