import React from "react"
import Layout from "../components/layout"
import TheRiggsHotel from "../images/riggs-hotel.jpeg"
const upperCase = {textTransform: "uppercase"}

const IndexPage = (props) => {
  return (
      <Layout page={props.uri}>
        <div className="section">
          <h2 style={{marginTop: '10rem'}}>Alisha & Corey</h2>
        </div>
        <div className="section">
          <div style={upperCase}>are celebrating their wedding</div>
          <div>in</div>
          <div style={upperCase}>Washington, D.C.</div>
          <div>on</div>
        </div>

        <div className="section">
          <h2>Friday, November 5th, 2021</h2>
        </div>

        <div className="section">
          <div>at</div>
          <div>
            <a target="_blank" href="https://www.riggsdc.com/">THE RIGGS HOTEL</a>
          </div>
        </div>

        <div className="section">
          <img src={TheRiggsHotel} alt="the-riggs-hotel" style={{maxWidth: '100%'}}/>
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
