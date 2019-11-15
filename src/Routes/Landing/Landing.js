import React from 'react'
import { Link } from 'react-router-dom'

import hero from './hero.png'

const Landing = () => {
  return (
    <div className='Landing'>
      <div className="intro">Sam Walker</div>
      <img className="hero" src={hero} alt="Me standing in front of a lake" />
      <div className="job">Full Stack Developer</div>
      <Link to='/about'><button className="button about-me-link">Learn More</button></Link>
      <Link to='/projects'><button className="button">View My Projects</button></Link>
    </div>
  )
}

export default Landing
