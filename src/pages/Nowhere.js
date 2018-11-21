import React from 'react'
import { Head } from 'react-static'
//


export default () => (
  <div key="404">
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={`http://www.site.com/}`} />
      <meta property="og:title" content="404 Page" />
      <meta property="og:description" content="404 Page description." />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <h2 className="app-content-title">404 Page</h2>
    <p>404 page content.</p>
  </div>
)
