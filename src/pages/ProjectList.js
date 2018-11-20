import React, { Component } from 'react'
import { Link, Route, getRouteProps } from 'react-static'
import classNames from 'classnames'
import Project from './Project'

class ProjectList extends Component {
  render() {
    let projects = this.props.projects.projects
    let label = this.props.projects.labels
    return [
      <h2 key="title">{label.title}</h2>,
      <div key="projects" className="projects">
        <nav className="projects-nav">
          {projects.map((item, i) => {
            // this.props.project comes from react-static children route
            let defaultSlug = this.props.project
              ? this.props.project.slug
              : ''
            let itemClasses = classNames(
              'projects-nav-item', { active: item.slug === defaultSlug }
            )
            return (
              <div className={itemClasses} key={item.slug}>
                <Link to={`/projects/${item.slug}`}>{item.name}</Link>
              </div>
            )}
          )}
        </nav>
        <Route path={`/projects/:name`} component={Project} />
      </div>
    ]
  }
}


export default getRouteProps(ProjectList)
