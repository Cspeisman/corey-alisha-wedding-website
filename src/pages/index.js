import React from "react"
import Layout from "../components/layout"
import TheLineHotel from "../images/the-line.png"
import '../components/typography.css';
import '../components/global.css';
const upperCase = {textTransform: "uppercase"}

const IndexPage = () => {
  return (
      <Layout>
        <div className="section">
          <h2 style={{marginTop: '10rem'}}>Alisha & Corey</h2>
        </div>
        <div className="section">
          <div style={upperCase}>are getting married</div>
          <div>in</div>
          <div style={upperCase}>Washington, D.C.</div>
          <div>on</div>
        </div>

        <div className="section">
          <h2>Sunday, October 11, 2020</h2>
        </div>

        <div className="section">
          <div>at</div>
          <div>
            <a target="_blank" href="https://www.thelinehotel.com/dc">THE LINE HOTEL D.C.</a>
          </div>
          <div>(now in micro-ceremony - 2021 party plans to come)</div>
        </div>

        <div className="section">
          <img src={TheLineHotel} alt="the-line-hotel" style={{maxWidth: '100%'}}/>
        </div>
        <div className="section">
          <div>REGISTRY</div>
          <div>
            <div>
              <a target="_blank" href="https://www.zola.com/registry/coreyandalisha">Zola</a>

            </div>
            <div>

              <a target="_blank" href="https://www.crateandbarrel.com/gift-registry/alisha-ramos-and-corey-speisman/r6159047">Crate &amp; Barrel</a>
            </div>
          </div>
        </div>

        <div className="section">
          <div>👰🏻🤵🏼</div>
          <h3>#AlishasMainSpeis</h3>
        </div>
      </Layout>
  )
}

export default IndexPage
