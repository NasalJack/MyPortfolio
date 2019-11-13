import React from 'react'
import { Link } from 'react-router-dom'

import Projects from '../../Store/Projects'

const ProjectBar = () => {
  const list = []
  Projects.forEach(
    (project, index) => list.push(
      <Link key={index} to={'/project/'+index}>
        <li className="project-list-item">{project.name}</li>
      </Link>
    )
  )
  return (
    <ul className="ProjectBar project-list">
        {list}
    </ul>
  )
}

export default ProjectBar
