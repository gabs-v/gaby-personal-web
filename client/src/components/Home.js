import React from 'react'
import '../static/css/home.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <h3>GABY VAZQUEZ</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='intro'>
        <div className='left'>
          <h1> Hey there, <br/> I'm Gaby! </h1>
          <h2> Software <br/> Engineer  </h2>
        </div>
        <div className='right'>
          
        </div>
      </div>
    </div>
  )
}

export default Home