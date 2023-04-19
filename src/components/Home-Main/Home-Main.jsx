import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home-Main.scss'

function HomeMain() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('https://63df32c43d94d02c0bb5c567.mockapi.io/posts')
            .then(function (response) {
                console.log(response);
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
                    product && product.map((item, index)=>(
                        <li key={index} className='home__main-item'>
                            <Link to={`/shopProducts/buy/${item.id}`}>
                            <img src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <span>{item.price}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
    </section>
  )
}

export default HomeMain
