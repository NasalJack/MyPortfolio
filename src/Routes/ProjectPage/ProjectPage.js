import React from 'react'
import { withRouter } from 'react-router-dom'

import Projects from '../../Store/Projects'
import Screenshots from '../../Screenshots/Screenshots'

class ProjectPage extends React.Component {
  render() {
    const { hiddenBar } = this.props
    const project = Projects[this.props.match.params.index]
    if (!project) return (
      <div className='ProjectPage'>
        <h2>404</h2>
        <p>No project with this ID exists</p>
      </div>
    )
    const { title, screenshot, builtWith, content, page, repo } = project
    return (
      <div className={hiddenBar ? 'sidebar-close ProjectPage' : 'sidebar-open ProjectPage'}>
        <h2 className="project-title">{title}</h2>
        <img className="screenshot" src={Screenshots[screenshot]} alt="Example Screenshot of the App" />
        <div className="content">
          <p>Bult with {builtWith}</p>
          <p>{content}</p>
          <div className="link-buttons">
            <a target='_blank' rel='noopener noreferrer' href={page}>
              <button className="button link site-link">View App</button>
            </a>
            <a target='_blank' rel='noopener noreferrer' href={repo}>
              <button className="button link repo-link">Visit Repo</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ProjectPage)
