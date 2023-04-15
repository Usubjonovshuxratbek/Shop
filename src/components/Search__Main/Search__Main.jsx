import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Search__Main.scss'

function Search__Main() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('https://63df32c43d94d02c0bb5c567.mockapi.io/posts')
            .then(function (response) {
                // handle success
                console.log(response);
                setProduct(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

    return (
        <div className='search__main'>
            <ul className='search__main-list'>
                {
                    product && product.map((item)=>(
                        <li className='search__main-item'>
                            <img src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <span>{item.price}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Search__Main
