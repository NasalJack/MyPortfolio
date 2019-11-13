import React from 'react'

import ProjectEntry from '../../Components/ProjectEntry/ProjectEntry'
import Projects from '../../Store/Projects'

const ProjectsPage = () => {
  const list = []
  console.log(Projects)
  Projects.forEach((project, index) => list.push(<ProjectEntry key={index} id={index} project={project} />))
  return (
    <div className='Projects'>
      <ul className="project-default">
        {list}
      </ul>
    </div>
  )
}

export default ProjectsPage
