import React, { Component } from 'react'
import { getRouteProps, Link, Head } from 'react-static'
//


class Page2 extends Component {
  render () {
    let data = this.props.data
    const siteURL = "http://www.site.com"

    return (
      <div key="page-2">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:url" content={`${siteURL}/${this.props.match.path}`} />
          <meta property="og:title" content="Page 2" />
          <meta property="og:description" content="Page 2" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <h2>{data.labels.title}</h2>
        <div>
          {data.text}
        </div>
      </div>
    )
  }
}

export default getRouteProps(Page2)
