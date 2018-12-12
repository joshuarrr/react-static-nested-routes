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
            <meta property="og:description" content="Site Description" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
            <link rel="stylesheet" href="//brick.freetls.fastly.net/Rokkitt:600" />
          </Head>

          <header className="site-header">
            <h1 className="site-title">
              <NavLink
                className="site-title-link"
                exact href="./"
                to={`/`}
                onClick={()=>this.setState({current: '/'})}
              >
                {appData.title}
              </NavLink>
            </h1>
            <nav className="site-nav">
              <ul className="site-nav-list">
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
                      <NavLink className="nav-item-link" to={urlSlug}>
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>

          <main className="site-content">
            <Switch>
              <Route exact path={`/`} render={() => <Home key="home-route" />} />
              <Route path={`/page-1`} render={() => <Page1 key="page-1-route" />} />
              <Route path={`/page-2`} render={() => <Page2 key="page-2-route" />} />
              <Route path="/projects" render={ ({ match }) =>
                <Projects key="projects-route" />}
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
