import React from 'react'

import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>You must have gotten lost. Were you looking for one of these?</p>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact Me</Link></li>
      </ul>
    </div>
  )
}

export default NotFound
