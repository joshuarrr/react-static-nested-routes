import React, { Component } from 'react'
import { Link, getRouteProps } from 'react-static';
//


class Project extends Component {
  render() {
    let project = this.props.project
    let label = this.props.projects.labels

    return (
      <div className="project">
        <h3>{project.name}</h3>
        <div className="project-desc">
          <p>{project.description}</p>
        </div>
      </div>
    )
  }
}


export default getRouteProps(Project)
