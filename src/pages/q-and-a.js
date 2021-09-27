import React from "react"
import Layout from "../components/layout";
import discoBall from "../images/disco-ball.gif";
const QAndA = (props) => {
    return <Layout page={props.uri}>
        <div className="q-and-a">
            <h3 style={{marginTop: '5rem', marginBottom: '1rem'}}>COVID Precautions</h3>
            <div>
                In light of Covid-19, we want you to know the health of safety of our guests is a top priority. We
                kindly request that all guests planning to celebrate with us are fully vaccinated.
            </div>
            <div>Although our venue is indoors, the ballroom is surrounded with accordion doors that we plan to keep
                open for maximum airflow.
                There is also an outside terrace connected to the ballroom for you to step outside and get fresh
                air.
            </div>
            <h3 style={{marginTop: '5rem', marginBottom: '2rem'}}>Q & A</h3>
            <div><strong>
                Is there a dress code?
            </strong>
            </div>
            <div>The dress code is cocktail attire, but please feel
                free to have fun with it. Anything festive and sparkly is encouraged for a vibrant evening of dancing
                and celebrating.
            </div>
            <div><strong>Will dinner be served?</strong></div>
            <div>
                While there will not be a formal seated dinner, hors d'oeuvres and plentiful food stations will be
                present and set up for our guests' enjoyment.
            </div>
        </div>
        <div style={{marginTop: '5rem'}}>
            <img src={discoBall} alt="disco-ball" width={200} height={200}/>
        </div>
    </Layout>;
}

export default QAndA;