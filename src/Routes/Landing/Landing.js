import React from 'react'
import { Link } from 'react-router-dom'

import hero from './hero.png'

const Landing = () => {
  return (
    <div className='Landing'>
      <div className="intro">Hi, my name is Sam and I'm a full stack developer</div>
      <img className="hero" src={hero} alt="Me standing in front of a lake" />
      <Link to='/about'><button className="about-me-link">Learn More</button></Link>
    </div>
  )
}

export default Landing
