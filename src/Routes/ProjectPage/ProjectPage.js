import React from 'react'

const ProjectPage = (props) => {
  const { project } = props
  return (
    <div className='ProjectPage'>
      <h2 className="project-title">${project.title}</h2>
      <img className="screenshot" src={project.screenshot} alt="Example Screenshot of the App" />
      <div className="content">
        <p>Bult with ${project.builtWith}</p>
        <p>${project.content}</p>
        <div className="link-buttons">
          <button className="link site-link" data-link={project.page}>View App</button>
          <button className="link repo-link" data-link={project.repo}>Visit Repo</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
