import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signin.scss'
import { usersLogin, usersPassword } from '../FullData'




function Signin() {
    const [user , setUser] = useState()
    const navigate = useNavigate()
    const upRef = ()=>{
        navigate('/signup')
    }
  useEffect(()=>{
    fetch('https://63e542a8c04baebbcdb7065c.mockapi.io/Data')
    .then((res)=> res.json())
    .then((data)=> setUser(data))
  }, [user])
  
    const fn = (e) => {
        e.preventDefault()
        let a = e.target.text.value
        let b = e.target.password.value
        // if(usersLogin == a && usersPassword == b){
        //     // navigate('/')
        //     console.log('ok');
        // } 
        user.map((i)=>{
            if(i.Email == a && i.Password == b){
               navigate('/')
            }
        })

        
    }
    return (
        <div>
            <section className='login'>
                <div className="container ">
                    <h2 className='title'>My Account</h2>

                    <span className='login__btns'>
                        <button  className='btn__active'>Sign in</button>
                        <button className='btn__signup' onClick={upRef}>Register</button>
                    </span>

                    <form onSubmit={fn} action="#" className='login__form'>
                        <input type="text" placeholder='Email' className='login__email' name='text' />
                        <input type="password" placeholder='Password' className='login__password' name='password' />
                        <span className='login__check'>
                            <label className='login__check' htmlFor="chek">
                                <input type="checkbox" id='chek' />
                                <p>Remember me</p>
                            </label>

                        </span>
                        <button className='form__btn'>SIGN IN</button>
                        <Link className='link'>Have you forgotten your password?</Link>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Signin