import React from 'react'
import image from '../images/test-image.jpg'
export default function Footer() {
  return (
    <footer>
        <div className='flex w-90 pt-28'>
            <div className='context-footer-top my-52'>
              <h2 className='text-6xl  text-white'>Helo Worl learning is fun</h2>
              <p className='font-semibold text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi </p>
            </div>
            <div className='footer-img'>
              <div className='cover-illust-footer'></div>
              <img src={image} alt="" />
            </div>
        </div>
        <div className='w-90 pt-28 '>
            <div className="grid-2 text-white ssd">
              <div>
                <h2 className='font-light text-sm mb-2'><strong className='text-[#47baef]'>001.</strong> </h2>
                <div className='border-main'></div>
                <p>Github</p>
              </div>
              <div>
                <h2 className='font-light text-sm mb-2'><strong className='text-[#47baef]'>002.</strong> Developers</h2>
                <div className=''>
                  <div className='border-main'></div>
                  <div className='pt-3 pl-4 font-semibold text-sm'>
                    <p>Ashwot Archarya</p>
                    <p className='py-1'>Apurba Adhikari</p>
                    <p className='pb-1'>Samyam Shrestha</p>
                    <div className='work-flex'>
                      <p>Suyog</p>

                    </div>
                  </div>
                    
                </div>
              </div>
            </div>
        </div>  
    </footer>
  )
}
