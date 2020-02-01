import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const upperCase = {textTransform: 'uppercase'}
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Alisha & Corey</h2>
    <div className="welcome">
      <div style={upperCase}>are getting married</div>
        <div>in</div>
        <div style={upperCase}>Washington, D.C.</div>
        <div>on</div>
    </div>
    <h2>Sunday, October 11, 2020</h2>
  </Layout>
)

export default IndexPage
