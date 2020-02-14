import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BowieImages } from "../components/BowieImages"
import TheLineHotel from "../images/the-line.png"

const upperCase = { textTransform: "uppercase" }

const IndexPage = () => {
  const [showBowie, setShowBowie] = useState(false)

  return (
    <Layout>
      <div style={{
        display: "flex",
        flexFlow: "row-reverse",
        width: "100%",
      }}>
        <span style={{cursor: "pointer"}} role="img" onClick={() => setShowBowie(true)}>♡︎</span>
      </div>
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
        <img src={TheLineHotel} alt="the-line-hotel" width={600}/>
      </div>

      <div className="section">
        <div>SCHEDULE, TRAVEL, REGISTRY, AND RSVP DETAILS</div>
        <div>Coming soon</div>
      </div>

      <div className="section">
        <div>👰🏻🤵🏼</div>
        <h3>#AlishasMainSpeis</h3>
      </div>
      {showBowie && <BowieImages setShowBowie={setShowBowie}/>}
    </Layout>
  )
}

export default IndexPage
