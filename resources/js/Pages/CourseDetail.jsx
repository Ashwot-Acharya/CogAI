import React from 'react'
import MainNav from '../layout/MainNav'
import {AiFillCheckCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function CourseDetail() {
  return (
    <section>
        <MainNav />
        <section className='w-80'>
            <h2 className='text-5xl font-bolder mt-32'>Lorem is god, Lorem is life</h2>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus voluptatum repudiandae consectetur! At quas quae libero eligendi. Atque vero repellat neque, modi, 
                tempora quisquam aperiam aliquid, alias unde dignissimos quis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus voluptatum repudiandae consectetur! At quas quae libero eligendi. Atque vero repellat neque, modi, 
                tempora quisquam aperiam aliquid, alias unde dignissimos quis.
                </p>
                <Link to={`/s1`}>
                    <button className='btn-start px-4 py-2 mt-2'>Get Started</button>
                </Link>

            <div className='mt-16'>
                <h2 className='font-bolder text-4xl'>Course</h2>

                <div className='items-init mt-5'>
                    <Link to={`/`}>
                    <div className='work-flex mb-1 main__elements py-5 px-2'>
                        <p className='text-xl font-bold'>1. Use Responsive Design</p>
                        <div className='markup'></div>
                        <AiFillCheckCircle className='text-2xl'/>
                    </div>
                    </Link>
                    <div className='work-flex mb-1 main__elements py-5 px-2'>
                        <p className='text-xl font-bold'>2. Working art of life in the towlr</p>
                        <div className='markup'></div>
                        <AiFillCheckCircle className='text-2xl'/>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default CourseDetail