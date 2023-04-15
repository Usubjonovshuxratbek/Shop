import React from 'react'
import Search__Footer from '../../components/Search__Footer/Search__Footer'
import Search__Main from '../../components/Search__Main/Search__Main'
import Search__SaidBar from '../../components/Search__SaidBar/Search__SaidBar'
import './Blog.scss'

function Blog() {
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

export default Blog
