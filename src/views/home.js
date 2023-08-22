import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Group Analyst</title>
        <meta property="og:title" content="Principal Group Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
