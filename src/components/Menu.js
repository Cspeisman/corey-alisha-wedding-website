import React, {useState} from "react";

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

                <div></div>
                <span style={{cursor: "pointer"}} role="img" onClick={props.showBowie}>♡︎</span>
            </div>
        </div>
    )
}