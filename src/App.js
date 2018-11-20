import React, { Component } from 'react';
import classNames from 'classnames';
import { Router, Route, Switch, Link, Head } from 'react-static';

// Import site data
import { siteData } from '../data/data.js'

// Import top level components
import Page1 from 'pages/Page-1';
import Page2 from 'pages/Page-2';
import ProjectList from 'pages/ProjectList';
// import 404 from 'containers/404';

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
    // console.log(`* Pathname: ${pathname}`)

    return (
      <Router>
        <div className="App">
          <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Site Title" />
            <meta property="og:description" content="Site Description" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" href="//brick.freetls.fastly.net/Fira+Mono:400" />
          </Head>

          <header className="site-header">
            <h1>{siteData.title}</h1>
            <nav className="site-nav">
              <ul className="site-nav-list">
                {siteData.pages.map((item, index) => {
                  const activeSlug = pathname.indexOf(`/${item.slug}`) > -1;
                  const itemClasses = classNames(
                    'site-nav--item', { active: activeSlug }
                  );
                  const urlSlug = `/${item.slug}`;
                  return (
                    <li
                      key={item.slug}
                      className={itemClasses}
                      onClick={()=>this.setState({current: urlSlug})}
                    >
                      <Link to={urlSlug}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>

          <div className="site-content">
            <Switch>
                <Route path="/" exact render={() => null} />
                <Route path={`/page-1`} render={() => <Page1 />} />
                <Route path={`/page-2`} render={() => <Page2 />} />
                <Route
                  path="/projects"
                  render={
                    ({ match }) => <ProjectList match={match} {...this.props} />
                  }
                />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
