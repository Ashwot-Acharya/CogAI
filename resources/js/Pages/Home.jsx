import React from 'react'
import Navbar from '../Layouts/Navbar'
import Bg from '../images/RaaniImage.jpg'
import gg2 from '../images/test-image.jpg'
import Footer from '../Layouts/Footer'

function Home() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <section className='height-100'>
        
        <div className="temp-img">
          <div className='cover-illust'></div>
          <img src={Bg} alt="" />
        </div>
        <div className='main-aside'>
          <aside className='js-accent'></aside>
        </div>
        <div className='hero__container'>
          <div className="hero__header">
            <span className='text-white text-7xl'>Become</span>
            <p className='text-white text-7xl w-6/12'><strong>God</strong></p>
            <h3 className='font-semibold text-white my-3 text-lg font-bolder'>Easy, Quick, No need anyone shts</h3>
            <p className='text-white w-6/12 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum dolorum facere corporis voluptas porro quae debitis eos nobis? Vitae rem itaque ad quod hic eum fuga illo ab quas facilis.</p>
          </div>
        </div>
      </section>

      {/* whatwedo */}
        <section className='hero__container pb-20'>
          <h2 className='uppercase text-lg font-bold'>What we do</h2>
          <p className='my-2 text-5xl font-semibold'>Dance, Sing, Sleep, Eat</p>
          <p className='font-semibold w-6/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil non sequi, facilis voluptatibus laborum ipsum fugit quo, tempore corrupti atque et a sunt dolore animi, eaque sint totam dolor?</p>
        </section>
      {/* endwhatwedo */}

      {/* resukat are everything */}
      <section className='w-100 bac-gg'>
        <div className="hero__container py-24">
          <div className="flex gap-10">
          <div className='my-28 sec-1 w-9/12'>
            <div className='contextual'>
              <span className='text-white text-7xl'>Learning is</span>
              <h2 className='text-white text-7xl'>everything</h2>
              <h2 className='text-white text-7xl w-12/12'>It's that Simple</h2>
              <p className='text-white font-semibold my-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque enim voluptate amet ducimus quam nemo debitis et nihil perspiciatis nobis! Error autem magnam ratione ex odit omnis perspiciatis qui non.
              </p>
            <button className='text-white font-bold'>View</button>
            </div>

              <div className='pos-rel'>
                <h2 className='text-white font-bold text-8xl text-right'>100%</h2>
                <p className='text-white font-bold text-sm text-right'>increase in prospective</p>
              </div>
          </div>
          <div className='gg-2 w-12/12'>
            <img src={gg2} alt="" />
          </div>
        
          </div>
        </div>
      </section>
      {/* endresult are everythng */}
      {/* idkwhatsectionthisis */}
      <section className='w-100 my-36'>
        <div className='w-90'>
          <h2 className='font-bold text-lg'>Learning everything</h2>
          <h1 className='font-bold text-5xl'>Explore CognitiveAI</h1>
          <div className="grid-2 mt-40">
            <div className="el-exp-s1">
                <img src={Bg} alt="" />
                <div>
                  <p>East</p>
                  <h2 className='text-5xl font-light'>Hello World</h2>
                </div>
            </div>
            <div className="el-exp">
                <img src={gg2} alt="" />
                <div>
                  <p>East</p>
                  <h2 className='text-5xl font-light'>Hello World</h2>
                </div>
            </div>
            <div className="el-exp-s1">
                <img src={Bg} alt="" />
                <div>
                  <p>East</p>
                  <h2 className='text-5xl font-light'>Hello World</h2>
                </div>
            </div>
            <div className="el-exp">
                <img src={gg2} alt="" />
                <div>
                  <p>East</p>
                  <h2 className='text-5xl font-light'>Hello World</h2>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* endidkwhatsectionthisis */}

      {/* endingnote */}
        <section className='w-100 my-36'>
          <div className='w-90 bac-gg py-36'>
            <div className='w-90 flex gap-2'>
              <div className=''>
                <h1 className='font-light text-[#fff] text-6xl'>Creative, Develop, be Certified</h1>
                <p className='font-semibold text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur provident aliquid, tempora perferendis laboriosam </p>
              </div>
            </div>
          </div>
        </section>
      {/* endendingnote */}
      {/* footer */}
      <Footer />
      {/* footerend */}
    </section>
  )
}

export default Home