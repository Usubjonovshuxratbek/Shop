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
import Fashion from './pages/Fashion/Fashion';
import Blog from './pages/Blog/Blog';
import Error from './pages/Error/Error';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shopProducts' element={<ShopProducts />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/shopProducts/buy/:slug' element={<Buy />} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/fashion/:slug' element={<Fashion/>}/>
        <Route path='/*' element={<Error />}/>
        </Routes>
    </div>
  );
}
export default App;
