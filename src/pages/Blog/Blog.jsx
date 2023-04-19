import React from 'react'
import './Blog.scss'
import BlogSaidbar from '../../components/Blog-SaidBar/Blog-Saidbar'
import BlogMain from '../../components/Blog-Main/Blog-Main'
import Footer from '../../components/Footer/Footer'

function Blog() {
  return (
    <div className="blog container">
      <div className="blog-main">
        <BlogSaidbar />
        <BlogMain />
      </div>
      <Footer />
    </div>
  )
}

export default Blog