import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BowieImages } from "../components/BowieImages"
import TheLineHotel from "../images/the-line.png"
import {Menu} from "../components/Menu";

const upperCase = { textTransform: "uppercase" }

const IndexPage = () => {
  const [showBowie, setShowBowie] = useState(false)

  return (
    <Layout>
      <div>
          <Menu showBowie={() => setShowBowie(true)} />
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
          <a target="_blank" href="https://www.thelinehotel.com/dc">THE LINE HOTEL D.C.</a>
        </div>
        <div>(now in micro-ceremony - 2021 party plans to come)</div>
        <img src={TheLineHotel} alt="the-line-hotel" width={600} style={{maxWidth: '100%'}}/>
      </div>

      <div className="section">
        <div>REGISTRY</div>
        <div>
            <a target="_blank" href="https://www.zola.com/registry/coreyandalisha">See our registry on Zola.</a>
        </div>
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
