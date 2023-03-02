import React from 'react'

export default function MainNav() {
  return (
    <nav>
        <header>
            <div>
                <h1>CAI</h1>
            </div>
            <div className='flex gap-10'>
                <a>Enrolled</a>
                <a>Categories</a>
                <a  href='/sam'>Sam</a>
            </div>
        </header>
    </nav>
  )
}
