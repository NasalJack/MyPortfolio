import React from 'react'

const ProjectEntry = (props) => {
  const { project } = props
  return (
    <li className="ProjectEntry project-thumbnail">
        <img className="thumbnail-image" alt={'screenshot of '+project.name} src={project.screenshot} />
        <p className="thumbnail-text">${project.name}</p>
    </li>
  )
}

export default ProjectEntry
