import React from 'react'
import { Link } from 'react-router-dom'

import Projects from '../../Store/Projects'

const ProjectBar = (props) => {
  const { hiddenBar } = props
  const list = []
  Projects.forEach(
    (project, index) => list.push(
      <Link key={index} to={'/project/'+index}>
        <li className="project-list-item">{project.name}</li>
      </Link>
    )
  )
  return (
    <ul className={hiddenBar ? 'project-list hidden' : 'project-list revealed'}>
        {list}
    </ul>
  )
}

export default ProjectBar
