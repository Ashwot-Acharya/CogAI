import React from 'react'
import { Link } from 'react-router-dom'
import MainNav from '../layout/MainNav'

function Profile() {
  return (
    <section>
      <MainNav />
        <section className='w-100'>
          <div className='w-80'>
            <section className='work-flex'>
            <div className="flex gap-5 mt-20">
              <div className='pf-img'>
                <img src="https://samyam.netlify.app/assets/art1.8f5ec226.png" alt="" />
              </div>
              <div className='my-10'>
                <div>
                <h2 className='text-xl font-bold'>Sam</h2>
                <p className='text-sm text-[#ccc] font-semibold'>@sam2345</p>
                <p className='font-semibold'>Joined July 2021</p>
                </div>
                <div>
                  <button>Edit Profile</button>
                </div>  
              </div>
            </div>
            <div className='mt-36'>
              <button className='edit-btn'>Edit Profile</button>
            </div>
            </section>
            <div className='border-main mt-4'></div>

            {/* enrolledcourses */}
            <section className='my-10'>
              <h2 className='text-3xl font-bolder'>Enrolled Courses</h2>
                <div className='grid-4 mt-4'>
                <div className='el-profile-courses'>
                  <Link to={`/`}>
                  <img src="https://samyam.netlify.app/assets/art1.8f5ec226.png" alt=""/>
                  </Link>
                  <h2 className='font-bold'>lorem is god</h2>
                </div>
                <div className='el-profile-courses'>
                  <Link to={`/`}>
                  <img src="https://samyam.netlify.app/assets/art1.8f5ec226.png" alt=""/>
                  </Link>
                  <h2 className='font-bold'>lorem is god</h2>
                </div>
                <div className='el-profile-courses'>
                  <Link to={`/`}>
                  <img src="https://samyam.netlify.app/assets/art1.8f5ec226.png" alt=""/>
                  </Link>
                  <h2 className='font-bold'>lorem is god</h2>
                </div>
                <div className='el-profile-courses'>
                  <Link to={`/`}>
                  <img src="https://samyam.netlify.app/assets/art1.8f5ec226.png" alt=""/>
                  </Link>
                  <h2 className='font-bold'>lorem is god</h2>
                </div>
              </div>
            </section>
            
            {/* endenrolledcourses */}

            {/* certification */}
            <section className='w-100 mb-10'>
                <h2 className='text-3xl font-bolder'>Certificates</h2>
                <div className='grid-4 mt-5'>
                  <div className='el-certificates'>
                    <img src="https://samyam.netlify.app/assets/art1.8f5ec226.png" alt="" className='rounded-15' />
                    <div>
                      <h2 className='font-bold'>Lorem is god, Lorem is life</h2>
                      <p className='text-sm font-base text-[#47baef]'><Link to={`/`}>View Certificate</Link></p>
                    </div>
                  </div>
                </div>
            </section>
            {/* endcertification */}
          </div>
        </section>
    </section>
  )
}

export default Profile