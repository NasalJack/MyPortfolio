import React from 'react'

import ProjectEntry from '../../Components/ProjectEntry/ProjectEntry'

const Projects = () => {
  const list = []
  list.push(<ProjectEntry project='project'/>)
  return (
    <div className='Projects'>
      <ul className="project-default">
        {list}
      </ul>
    </div>
  )
}

export default Projects
