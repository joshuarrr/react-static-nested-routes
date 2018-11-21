import React, { Component } from 'react';
import classNames from 'classnames';
import { Router, Route, Switch, Link, NavLink, Head } from 'react-static';
// Import app data
import { appData } from '../data/data.js'
// Import top level components
import Home from 'pages/Home';
import Page1 from 'pages/Page-1';
import Page2 from 'pages/Page-2';
import Projects from 'pages/Projects';
import Nowhere from 'pages/Nowhere';
// Import CSS
import './styles/app.css';
//


class App extends Component {
  constructor() {
    super();

    this.state = {
      current: typeof window !== 'undefined'
        && window.location ? (window.location.pathname)
        : '',
    };
  }

  componentDidMount() {
    this.setState({
      current: window.location.pathname,
    })
  }


  render() {
    const pathname = this.state.current;

    return (
      <Router>
        <div className="app">
          <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="app Title" />
            <meta property="og:description" content="app Description" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" href="//brick.freetls.fastly.net/Fira+Mono:400" />
          </Head>

          <header className="app-header">
            <NavLink className="app-title-link" exact href="./" to={`/`}>
              <h1 className="app-title">{appData.title}</h1>
            </NavLink>
            <nav className="app-nav">
              <ul className="app-nav-list">
                {appData.pages.map((item, index) => {
                  const activeSlug = pathname.indexOf(`/${item.slug}`) > -1;
                  const itemClasses = classNames(
                    'nav-item', { active: activeSlug }
                  );
                  const urlSlug = `/${item.slug}`;
                  return (
                    <li
                      key={item.slug}
                      className={itemClasses}
                      onClick={()=>this.setState({current: urlSlug})}
                    >
                      <NavLink to={urlSlug}>
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>

          <main className="app-content">
            <Switch>
              <Route exact path={`/`} render={() => <Home key="home-route" />} />
              <Route path={`/page-1`} render={() => <Page1 key="page-1-route" />} />
              <Route path={`/page-2`} render={() => <Page2 key="page-2-route" />} />
              <Route path="/projects" render={ ({ match }) =>
                <Projects match={match} {...this.props} key="projects-route" />}
              />
              <Route component={Nowhere} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
