import React, { Component } from 'react'
import { getRouteProps, Link, Head } from 'react-static'
//


class Page1 extends Component {
  render () {
    let data = this.props.data
    const siteURL = "http://www.site.com"

    return [
      <Head key="head">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={`${siteURL}${this.props.match.path}`} />
        <meta property="og:title" content="Page 1" />
        <meta property="og:description" content="Page 1 description." />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>,
      <h2 key="title" className="app-content-title">{data.labels.title}</h2>,
      <p key="text">{data.text}</p>
    ]
  }
}

export default getRouteProps(Page1)
