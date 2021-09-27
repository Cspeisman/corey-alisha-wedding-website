import React from "react";
import { Link } from "gatsby"
export const Menu = (props) => {
    return (
        <div>
            <div style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                {
                    props.page === '/q-and-a' &&
                    <Link to="/">Home</Link>
                }
                {
                    props.page === '/' &&
                    <Link to="/q-and-a">COVID and Q & A</Link>
                }
                <span style={{cursor: "pointer"}} role="img" onClick={props.showBowie}>♡︎</span>
            </div>
        </div>
    );
}