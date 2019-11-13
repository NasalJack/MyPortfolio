import React from 'react'

import Projects from '../../Store/Projects'
import Screenshots from '../../Screenshots/Screenshots'

class ProjectPage extends React.Component {
  render() {
    const project = Projects[this.props.match.params.index]
    if (!project) return (
      <div className='ProjectPage'>
        <h2>404</h2>
        <p>No project with this ID exists</p>
      </div>
    )
    const { title, screenshot, builtWith, content, page, repo } = project
    return (
      <div className='ProjectPage'>
        <h2 className="project-title">{title}</h2>
        <img className="screenshot" src={Screenshots[screenshot]} alt="Example Screenshot of the App" />
        <div className="content">
          <p>Bult with {builtWith}</p>
          <p>{content}</p>
          <div className="link-buttons">
            <a href={page}>
              <button className="link site-link">View App</button>
            </a>
            <a href={repo}>
              <button className="link repo-link">Visit Repo</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPage
