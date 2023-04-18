import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.scss'
import { usersLogin, usersPassword } from '../FullData'




function Signup() {
  
  const navigate = useNavigate()
  
  const handler = (e) => {
    e.preventDefault()
    let a = e.target.text.value
    let b = e.target.password.value
    fetch('https://63e542a8c04baebbcdb7065c.mockapi.io/Data', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Email : a, Password : b , 'token' : 'secret__key' })  
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
   
    navigate('/')
  }

  const nav = () => {
    navigate('/signin')
  }

  return (
    <div>
      <section className='login'>
        <div className="container ">
          <h2 className='title'>My Account</h2>

          <span className='login__btns'>
            <button onClick={nav} className='btn__signin'>Sign in</button>
            <button className='btn__active'>Register</button>
          </span>

          <form onSubmit={handler} action="#" className='login__form'>
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