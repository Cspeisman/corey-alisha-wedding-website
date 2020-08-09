import React, {useState} from "react";
import HamburgerMenu from 'react-hamburger-menu';

export const Menu = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div>
            <div style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                {/*<HamburgerMenu*/}
                {/*    isOpen={showMenu}*/}
                {/*    menuClicked={() => setShowMenu(!showMenu)}*/}
                {/*    width={38}*/}
                {/*    height={25}*/}
                {/*    strokeWidth={1}*/}
                {/*/>*/}
                <div></div>
                <span style={{cursor: "pointer"}} role="img" onClick={props.showBowie}>♡︎</span>
            </div>
            {/*{showMenu &&*/}
            {/*<div>Hi Im menu!</div>}*/}
        </div>
    )
}