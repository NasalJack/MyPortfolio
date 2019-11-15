import React from 'react'

import ProjectEntry from '../../Components/ProjectEntry/ProjectEntry'
import Projects from '../../Store/Projects'

const ProjectsPage = (props) => {
  const { hiddenBar } = props
  const list = []
  Projects.forEach((project, index) => list.push(<ProjectEntry key={index} id={index} project={project} />))
  return (
    <div className={hiddenBar ? 'ProjectsPage sidebar-close' : 'ProjectsPage sidebar-open'}>
      <ul className="project-default">
        {list}
      </ul>
    </div>
  )
}

export default ProjectsPage
