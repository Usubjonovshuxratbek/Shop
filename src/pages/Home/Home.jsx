import React from 'react'
import Carusel from '../../components/Carusel/Carusel';
import HomeMain from '../../components/Home-Main/Home-Main';
import Footer from '../../components/Footer/Footer'

function Home({products}) {
  console.log(products);
  return (
    <div>
      <Carusel />
      <HomeMain />
      <Footer />
    </div>
  )
}

export default Home
