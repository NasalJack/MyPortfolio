import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='Footer'>
      <Link to='/contact' className="contact-link" tabIndex='0'>Contact</Link>
    </footer>
  )
}

export default Footer
