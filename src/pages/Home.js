import React from 'react'
import { getSiteProps, Head } from 'react-static'
//


export default getSiteProps(() => (
  <div key="page-1">
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={`http://www.site.com/}`} />
      <meta property="og:title" content="Home Page" />
      <meta property="og:description" content="Home Page description." />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <h2 className="app-content-title">Home Page</h2>
    <p>Home Page content.</p>
  </div>
))
