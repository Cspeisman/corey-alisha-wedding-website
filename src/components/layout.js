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

const Layout = ({children}) => {
    const [showBowie, setShowBowie] = useState(false)
    return (
        <div
            style={{padding: 15}}
        >
            <Menu showBowie={() => setShowBowie(true)} />
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
