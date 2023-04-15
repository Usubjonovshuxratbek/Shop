import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.scss'
import axios from 'axios';
import { useState, useEffect } from 'react'



function Signup() {
  const { user, setUser } = useState()
  const navigate = useNavigate()
  const handler = (e) => {
    e.preventDefault()
    let a = e.target.text.value
    let b = e.target.password.value

    axios.post('https://63e542a8c04baebbcdb7065c.mockapi.io/Data', {
      firstName: `${a}`,
      lastName: `${b}`
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  // useEffect(()=>{
  //   axios.get('https://63e542a8c04baebbcdb7065c.mockapi.io/Data')
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     console.log('finish');
  //   });
  // },[handler])
  return (
    <div>
      <section className='login'>
        <div className="container ">
          <h2 className='title'>My Account</h2>

          <span className='login__btns'>
            <button className='btn__signin' onClick={() => navigate('/signin')}>Sign in</button>
            <button className='btn__signup'>Register</button>
          </span>

          <form onSubmit={() => handler} action="#" className='login__form'>
            <input name='text' type="text" placeholder='Email' className='login__email' />
            <input name='password' type="password" placeholder='Password' className='login__password' />
            <span className='login__check'>
              <label className='login__check' htmlFor="chek">
                <input type="checkbox" id='chek' />
                <p>Remember me</p>
              </label>

            </span>
            <button className='form__btn'>Register</button>
            <Link className='link'>Have you another account?</Link>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Signup