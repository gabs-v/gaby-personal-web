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
          <li>
            <Link className="currentPage" to='/'> Home </Link>
          </li>
          <li>
            <Link className='page' to='/about'> About </Link>
          </li>
          <li>
            <Link className='page' to='/projects'> Projects </Link>
          </li>
          <li>
            <Link className='page' to='/contact'> Contact </Link>
          </li>
        </ul>
      </div>
      <div className='intro'>
        <div className='left'>
          <h1> Hey there, <br/> I'm Gaby! </h1>
          <h2> Software <br/> Engineer  </h2>
        </div>
        <div className='right'>
          <img src={picture} alt='picture of me'/>
        </div>
      </div>
    </div>
  )
}

export default Home