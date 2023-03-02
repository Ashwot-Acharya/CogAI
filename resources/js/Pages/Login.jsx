import React from 'react'
import Bg from '../images/RaaniImage.jpg'

function Register() {
  return (
    <section className='w-100'>
        <div className='flex'>
            <div className='log__container'>
                <img src={Bg} alt="" />
            </div>
            <div className='content__log'>
              <div className='w-80'>
                <h2 className='font-bolder text-4xl text-center mt-72'>CognitiveAI</h2>
                <div className='inp-em mt-12'>
                  <input type="email" name="" id="" placeholder='Email*' required />
                </div>
                <div className='inp-em my-2'>
                  <input type="password" name="" id="" placeholder='Password*' required />
                </div>
                <div>
                  <button className='submit-btn py-2'>Login</button>
                </div> 
                <div>
                    <p className='text-center mt-10'>Don't have an account? <span className='text-[#47baef] font-bold'>
                        <a href='/register'>Register</a></span></p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Register