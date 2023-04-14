import React from 'react'
import { Link } from 'react-router-dom'
import './Signin.scss'
function Signin() {
    return (
        <div>
            <section className='login'>
                <div className="container ">
                    <h2 className='title'>My Account</h2>

                    <span className='login__btns'>
                        <button className='btn__signin'>Sign in</button>
                        <button className='btn__signup'>Register</button>
                    </span>

                    <form action="#" className='login__form'>
                        <input type="email" placeholder='Email' className='login__email' />
                        <input type="password" placeholder='Password' className='login__password' />
                        <span className='login__check'>
                        <label  className='login__check'  htmlFor="chek">
                        <input type="checkbox" id='chek' />
                        <p>Remember me</p>
                        </label>
                        
                        </span>
                        <button className='form__btn'>SIGN IN</button>
                    <Link  className='link'>Have you forgotten your password?</Link>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Signin