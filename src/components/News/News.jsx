import React from 'react'
import './News.scss'
import Icon from '../../assets/img/icon.png'
import Watch from '../../assets/img/watch.png'
import Reviews from '../Reviews/Reviews'

function News() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <section className='news'>
            <div className="container">
                <div className="news__inner">
                    <div className="news__nav">
                        <ul className='news__nav-list'>
                            <li className='news__nav-item'>
                                <div className="right">
                                    <h3>Новинки</h3>
                                </div>
                                <div className="left">
                                    <a href="/">К новинкам</a>
                                    <img src={Icon} alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="news__main">
                        <div className="cards">
                            <ul className='cards-list'>
                                {
                                    arr?.map((item, index) => (
                                        <li className='cards-item' key={index}>
                                            <div className="card">
                                                <img src={Watch} alt="" />
                                                <p>Умные часы</p>
                                                <h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
                                                <div className="card-bottum">
                                                    <div className="info">
                                                        <div className="bonus">
                                                            <span>Цена</span>
                                                            <b>13%</b>
                                                        </div>
                                                        <span className='price'>114 099 ₽</span>
                                                    </div>
                                                    <div className="buttons">
                                                        <button className='heart'><i className='bi bi-heart'></i></button>
                                                        <button className='chart'><i class="bi bi-bar-chart-line"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews />
        </section>
    )
}

export default News
