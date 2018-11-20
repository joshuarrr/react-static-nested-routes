import React, { Component } from 'react'
import { Link, getRouteProps } from 'react-static';
//


class Project extends Component {
  render() {
    let project = this.props.project
    let label = this.props.projects.labels

    return (
      <div>
      <h3>{project.name}</h3>
      <div className="project-desc">
        {project.description}
      </div>
    </div>
    )
  }
}


export default getRouteProps(Project)
