import React from 'react'

const ProjectEntry = (props) => {
  const { project } = props
  return (
    <li className="ProjectEntry project-thumbnail">
        <img class="thumbnail-image" alt={'screenshot of '+project.name} src={project.screenshot} />
        <p class="thumbnail-text">${project.name}</p>
    </li>
  )
}

export default ProjectEntry
