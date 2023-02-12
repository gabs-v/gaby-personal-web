import React from 'react'
import '../static/css/home.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='pop'> 
        <div className='topPop'>
            <button className='topbtn'>X</button>
        </div>
        <div className='bottomPop'>
          <h1>Hi, I'm Gaby</h1>
          <h2>Full-stack <br/> Software Engineer</h2>
        </div>
      </div>
      <div className='navbar'>
        <button className='startbtn'>Start</button>
      </div>
    </div>
    
  )
}

export default Home