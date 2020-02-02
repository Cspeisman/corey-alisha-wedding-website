import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const upperCase = { textTransform: "uppercase" }
const lineHotelFigmaURL = "https://s3-alpha-sig.figma.com/img/3216/1c63/3425bd2c7eb323409cd32240a2360adc?Expires=1581292800&Signature=NIum12quYCu7vu1uhAriPcKiVIMd3lpFi6xJaCT2OkFwjGtJEPSYMcCNejfFGBj3pOZRsBvNB-xpFwALX2VFbY8eahx5VB~M3mjgYTp6tcNPrpUFTQOXqVvbqzJFdzpCz692Y~5Nz9e3Cek-uVx82vfnH2ChUvFH4SwHFWtutNKbJWxf-2HS11blUzS9at8fTK9-I5HDUFggblSkf6NAXjzpNoT3ez7f~QEnWbTIfAoGAOO5d1iGKChC25VdroMllp~j4Gc-iRWI7dS4H2QVnL3jNv-IabOrY-HJc4T0-9Spa3W1kOg4YDckI5rXK2TAN2tEzaNOcyn7EESiF1EpNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h2>Alisha & Corey</h2>
    <div className="section">
      <div style={upperCase}>are getting married</div>
      <div>in</div>
      <div style={upperCase}>Washington, D.C.</div>
      <div>on</div>
    </div>

    <div className="section">
      <h2>Sunday, October 11, 2020</h2>
      <div>at</div>
      <div>
        <a href="https://www.thelinehotel.com/dc">THE LINE HOTEL D.C.</a>
      </div>
      <img src={lineHotelFigmaURL} alt="the-line-hotel" width={600}/>
    </div>

    <div className="section">
      <div>SCHEDULE, TRAVEL, REGISTRY, AND RSVP DETAILS</div>
      <div>Coming soon</div>
    </div>

    <div className="section">
      <div>👰🏻🤵🏼</div>
      <h3>#AlishasMainSpeis</h3>
    </div>
  </Layout>
)

export default IndexPage
