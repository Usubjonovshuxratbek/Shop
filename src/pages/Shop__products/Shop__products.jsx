import React from 'react'
import Search__Footer from '../../components/Footer/Footer'
import Search__Main from '../../components/Search__Main/Search__Main'
import Search__SaidBar from '../../components/Search__SaidBar/Search__SaidBar'
import './Shop__products.scss'

function ShopProducts() {
  return (
    <div className='search'>
      <div className="search__main container">
      <Search__SaidBar />
      <Search__Main />
      </div>
      <Search__Footer />
    </div>
  )
}

export default ShopProducts
