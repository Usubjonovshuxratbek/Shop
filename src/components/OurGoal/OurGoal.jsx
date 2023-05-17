import React from 'react'
import './OurGoal.scss'

function OurGoal() {
  return (
    <div className='our'>
      <div className="container">
        <div className="our__inner">
          <h2>Наша цель - создать фантастический <br /> сервис для всех потребителей</h2>
          <div className="our-services">
            <div className="our-service">
              <span>5</span>
              <p>Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc. </p>
            </div>
            <div className="our-service">
              <span>30</span>
              <p>Gravida vel convallis id aliquet volutpat nullam dignissim. Amet parturient elementum lectus rhoncus at.</p>
            </div>
            <div className="our-service">
              <span>300</span>
              <p>Sed varius ut venenatis id amet et consectetur pellentesque. Vitae urna ornare vel suspendisse tincidunt.</p>
            </div><div className="our-service">
              <span>8</span>
              <p>Id enim ornare lacus duis. Ac fermentum auctor cras adipiscing feugiat quis convallis velit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurGoal
