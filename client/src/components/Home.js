import React from 'react'
import '../static/css/home.css'
import picture from '../static/img/Untitled_Artwork.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <h3>GABY VAZQUEZ</h3>
        <ul>
        <Link to='/'> Home </Link>
          <Link to='/about'> About </Link>
          <Link to='/projects'> Projects </Link>
          <Link to='/contact'> Contact </Link>
        </ul>
      </div>
      <div className='intro'>
        <div className='left'>
          <h1> Hey there, <br/> I'm Gaby! </h1>
          <h2> Software <br/> Engineer  </h2>
        </div>
        <img src={picture} alt='picture of me'/>
      </div>
    </div>
  )
}

export default Home