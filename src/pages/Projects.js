import React, { Component } from 'react'
import { NavLink, getRouteProps } from 'react-static'
import { Route, Switch, Redirect } from "react-router-dom";
import classNames from 'classnames'
import Project from './Project'
import Nowhere from './Nowhere';
//


class Projects extends Component {
  render() {
    let projects = this.props.projects.projects
    let label = this.props.projects.labels
    return [
      <h2 className="app-content-title" key="title">
        {label.title}
      </h2>,
      <div className="projects" key="projects">
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
                <NavLink to={`/projects/${item.slug}`}>{item.name}</NavLink>
              </div>
            )}
          )}
        </nav>
        <Switch>
          <Redirect exact from={`/projects`} to={`/projects/project-1`} />
          <Route exact path={`/projects/:name`} component={Project} />
        </Switch>
      </div>
    ]
  }
}


export default getRouteProps(Projects)
