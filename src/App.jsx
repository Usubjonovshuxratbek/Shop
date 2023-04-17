import React, { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header';
import Signin from './Login/Signin/Signin';
import Signup from './Login/Signup/Signup';
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Buy from './pages/Buy/Buy';
import ShopProducts from './pages/Shop__products/Shop__products';

function App() {
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
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shopProducts' element={<ShopProducts />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/shopProducts/buy/:slug' element={<Buy />} />
      </Routes>
    </div>
  );
}
export default App;
