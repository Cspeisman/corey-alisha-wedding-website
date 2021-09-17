import React, { useEffect, useState } from "react"
import BowieURL from "../images/bowie.png"


const Bowie = () => (
  <div style={{
    position: "absolute",
    top: Math.floor(Math.random() * Math.floor(window.innerHeight)),
    left: Math.floor(Math.random() * Math.floor(window.innerWidth)),
  }}>
    <svg width="301" height="324" viewBox="0 0 301 324" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="-28" y="-5" width="329" height="329" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.002)"/>
        </pattern>
        <image id="image0" href={BowieURL}/>
      </defs>
    </svg>
  </div>
)

export const BowieImages = (props) => {
  const [bowies, setBowies] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBowies([]);
      props.setShowBowie(false);
    }, 3000);

    let keyCount = 0;
    const interval = setInterval(() => {
      setBowies(prev => [...prev, <Bowie key={keyCount}/>]);
      keyCount++;
    }, 150);

    return () => clearInterval(interval);
  }, [props]);

  return <>{bowies}</>
}