import React from 'react'
import CaruselImg from '../../assets/img/carusel.png'
import './Carusel.scss'

function Carusel() {
  return (
    <div className='carusel'>
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img class="d-block w-100" src={CaruselImg} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={CaruselImg} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={CaruselImg} alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Carusel
