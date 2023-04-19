import React from 'react'
import { Link } from 'react-router-dom'
import './Error-Main.scss'

function ErrorMain() {
  return (
    <section className='main'>
        <div className="container">
            <div className="main-inner">
                <h2>404 ERROR</h2>
                <p>This page not found; <br /> back to home and start again</p>
                <Link to='/'>HOMEPAGE</Link>
            </div>
        </div>
    </section>
  )
}

export default ErrorMain
