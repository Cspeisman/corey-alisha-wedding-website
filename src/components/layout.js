/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import {Menu} from "./Menu";
import {BowieImages} from "./BowieImages";
import '../components/typography.css';
import '../components/global.css';
import {Helmet} from "react-helmet";
import Icon from '../images/icon-wedding.png'
const Layout = ({page, children}) => {
    const [showBowie, setShowBowie] = useState(false)
    return (
        <div style={{padding: 15}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Alisha & Corey wedding celebration</title>
                <link rel="shortcut icon" type="image/jpg" href={Icon} />
            </Helmet>
            <Menu page={page} showBowie={() => setShowBowie(true)} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                    textAlign: 'center'
                }}
            >
                <main
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    {children}
                    {showBowie && <BowieImages setShowBowie={setShowBowie}/>}
                </main>
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
