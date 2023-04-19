import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import './style.css'
import { Grid, Pagination } from "swiper";
import './Blog-Main.scss'

function BlogMain() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get('https://63df32c43d94d02c0bb5c567.mockapi.io/posts')
      .then(function (response) {
        setProduct(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])
  return (
    <div className='blog__main'>
      <>
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2,
          }}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ul className='blog__main-list'>
              {
                product && product.slice(0, 1).map((item, index) => (
                  <li className='blog__main-item' key={index}>
                    <img src={item.img} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <Link to={`/blog/fashion/${item.id}`}>Read More</Link>
                  </li>
                ))
              }
            </ul>
          </SwiperSlide>
          <SwiperSlide>
            {
              product && product.slice(1, 2).map((item, index) => (
                <li className='blog__main-item' key={index}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={`/blog/fashion/${item.id}`}>Read More</Link>
                </li>
              ))
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              product && product.slice(2, 3).map((item, index) => (
                <li className='blog__main-item' key={index}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={`/blog/fashion/${item.id}`}>Read More</Link>
                </li>
              ))
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              product && product.slice(3, 4).map((item, index) => (
                <li className='blog__main-item' key={index}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={`/blog/fashion/${item.id}`}>Read More</Link>
                </li>
              ))
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              product && product.slice(4, 5).map((item, index) => (
                <li className='blog__main-item' key={index}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={`/blog/fashion/${item.id}`}>Read More</Link>
                </li>
              ))
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              product && product.slice(5, 6).map((item, index) => (
                <li className='blog__main-item' key={index}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={`/blog/fashion/${item.id}`}>Read More</Link>
                </li>
              ))
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              product && product.slice(6, 7).map((item, index) => (
                <li className='blog__main-item' key={index}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={`/blog/fashion/${item.id}`}>Read More</Link>
                </li>
              ))
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              product && product.slice(7, 8).map((item, index) => (
                <li className='blog__main-item' key={index}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={`/blog/fashion/${item.id}`}>Read More</Link>
                </li>
              ))
            }
          </SwiperSlide>
          <SwiperSlide>
            {
              product && product.slice(8, 9).map((item, index) => (
                <li className='blog__main-item' key={index}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={`/blog/fashion/${item.id}`}>Read More</Link>
                </li>
              ))
            }
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  )
}

export default BlogMain
