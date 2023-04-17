import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Search from  '../../assets/img/search-icon.png'
import './Search__SaidBar.scss'
const arr = []

function Search__SaidBar() {
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
  const fn = (e)=>{
      product.forEach(item => {
        if(e.target.value == product.price) {
          arr.push(item)
        }
      });
  }
  return (
    <div className="saidbar">
        <div className="container">
        <div className="saidbar__inner">
        <h2>Shop The Latest</h2>
        <form action="#">
            <input type="text" placeholder='Search...' />
            <img src={Search} alt="" />
        </form>
        <select onChange={fn}>
        <option value="Shop By">Shop By</option>
        <option value="$ 10-20">$ 10-20</option>
        <option value="$ 20-30">$ 20-30</option>
        <option value="$ 30-40">$ 30-40</option>
        <option value="$ 40-50">$ 40-50</option>
        <option value="$ 50-60">$ 50-60</option>
        <option value="$ 60-70">$ 60-70</option>
        <option value="$ 70-80">$ 70-80</option>
        <option value="$ 80-90">$ 80-90</option>
        <option value="$ 90-100">$ 90-100</option>
        </select>
        </div>
        </div>
    </div>
  )
}

export default Search__SaidBar
