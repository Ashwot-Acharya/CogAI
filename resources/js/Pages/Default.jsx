import React from 'react'
import { Link } from 'react-router-dom'
import MainNav from '../Layouts/MainNav'

function Default() {
  return (
    <section>
        <MainNav />
        <section className='w-100' >
            <section className='w-100 '>
            <div className='hero__container '>
                    <h1 className='text-center font-bolder text-5xl mt-40'>Create your course and start learning</h1>
                    <p className='text-center mb-10 font-bold'>Generate AI generate courses and receive certificate</p>
                    <div className='flex'>
                        <input type="text" name="" id="" className='input-text-generate px-4' placeholder='Write something...' />
                        <button className='generate-btn'>Generate</button>
                    </div>
                    <div className='suggestions flex gap-5'>
                        <div className='el-suggestions'>Hello</div>
                        <div className='el-suggestions'>ReactJS</div>
                    </div>
                </div>
            </section>
                
                <section className='w-90'>
                    <h2 className='text-3xl font-bolder mt-32'>Explore</h2>
                    <div className="grid-4 mt-5">
                        <div className='el-course'>
                            <a href="/course/detail">
                            <img src="https://samyam.netlify.app/assets/art1.8f5ec226.png" alt="" className='rounded-15' />
                            </a>
                            <div>
                                <h2 className='font-bold text-lg'>Lorem Is life , lorem is god , lorem is the world</h2>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>
        </section>
    </section>
    
  )
}

export default Default