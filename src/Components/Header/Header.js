import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='Header'>
      <ul className="nav-ul">
        <li className="nav-item nav-name" tabIndex='0'><Link to='/'>Sam Walker</Link></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item nav-about" tabIndex='0'><Link to='/about'>About Me</Link></li>
        <li className="nav-item nav-projects" tabIndex='0'><Link to='/projects'>Projects</Link></li>
      </ul>
    </nav>
  )
}

export default Header
