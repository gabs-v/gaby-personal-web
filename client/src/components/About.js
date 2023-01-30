import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className='navbar'>
            <h3>GABY <br/> VAZQUEZ</h3>
            <ul>
                <li>
                    <Link className="page" to='/'> Home </Link>
                </li>
                <li>
                    <Link className='currentPage' to='/about'> About </Link>
                </li>
                <li>
                    <Link className='page' to='/projects'> Projects </Link>
                </li>
                <li>
                    <Link className='page' to='/contact'> Contact </Link>
                </li>
            </ul>
        </div>
        <div className='aboutSection'>
        
        </div>
    </div>
    )
}

export default About