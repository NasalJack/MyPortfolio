import React from 'react'
import { Link } from 'react-router-dom'

import Screenshots from '../../Screenshots/Screenshots'

const ProjectEntry = (props) => {
  const { project, id } = props
  const { name, screenshot } = project
  return (
    <li className="ProjectEntry project-thumbnail">
      <Link to={'/project/' + id}>
        <img className="thumbnail-image" alt={'screenshot of ' + name} src={Screenshots[screenshot]} />
      </Link>
      <Link to={'/project/' + id}>
        <p className="thumbnail-text">{name}</p>
      </Link>
    </li>
  )
}

export default ProjectEntry
