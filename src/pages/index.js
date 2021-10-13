import React from "react"
import Layout from "../components/layout"
import TheRiggsHotel from "../images/riggs-hotel.jpeg"
import ChampagneTower from "../images/champagne-tower.jpeg"
import {Link} from "gatsby";

const upperCase = {textTransform: "uppercase"}

const IndexPage = (props) => {
    return (
        <Layout page={props.uri}>
            <div className="section">
                <img src={ChampagneTower} alt="the-riggs-hotel" width={480}/>
            </div>
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
                <h2>Friday, Nov 5th, 2021</h2>
            </div>

            <div className="section">
                <div>at</div>
                <div>
                    <a target="_blank"
                       href="https://www.riggsdc.com/#/booking/step-1?propertyCode=WASRP&group=ALIS110421">THE RIGGS
                        HOTEL</a>
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
                        <a target="_blank"
                           href="https://www.crateandbarrel.com/gift-registry/alisha-ramos-and-corey-speisman/r6159047">Crate &amp; Barrel</a>
                    </div>
                </div>
            </div>
            <div className="section">
                <div>STAY</div>
                <div>
                    <div>
                        <div><a target="_blank"
                                href="https://www.riggsdc.com/#/booking/step-1?propertyCode=WASRP&group=ALIS110421">The
                            Riggs Hotel*</a></div>
                        <div><a target="_blank"
                                href="https://www.ihg.com/intercontinental/hotels/us/en/washington/washa/hoteldetail">InterContinental
                            the Willard</a></div>
                        <div><a target="_blank"
                                href="https://www.hilton.com/en/hotels/wasuaua-motto-washington-dc-city-center/">Motto
                            by Hilton</a></div>
                        <div><a target="_blank" href="https://www.reservations.com/hotel/grand-hyatt-washington">Grand
                            Hyatt Washington</a></div>
                        <div><a target="_blank"
                                href="https://www.marriott.com/hotels/travel/wasjw-jw-marriott-washington-dc/">JW
                            Marriott</a></div>
                        <div><a target="_blank" href="https://www.hamiltonhoteldc.com/">Hamilton Hotel</a></div>
                        <br/>
                        <div><em> *room block rate available</em></div>
                    </div>
                </div>
            </div>
            <div className="section">
                <Link to="/q-and-a">COVID and Q & A</Link>
            </div>
            <div className="section">
                <div>👰🏻🤵🏼</div>
                <h3>#AlishasMainSpeis</h3>
            </div>
        </Layout>
    )
}

export default IndexPage
