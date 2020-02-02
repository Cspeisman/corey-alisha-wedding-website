import React, { useEffect, useState } from "react"


const bowieUrl = "https://s3-alpha-sig.figma.com/img/35b5/903a/be419051118abc21bb5c95df105fc422?Expires=1581292800&Signature=dvxHHtN72w0bYmw50zTImGz5qiYXVY9-RtubZf9G8zqFLzPkMqoeBTNLI-oRPqXYJ3pz0DpnPlCgfEKT0EpnUo0BMg5LcmboDtWhoDdc~DHjPP8X3CaBJo0yBUXX3e0Ecqfj87or31NOPq0sMIbsNB5E1~2UDYx9TG4MhbK2NuaVFNUQOqWCp5kDSf321YeWdUP76eLOc02upnLT39phazJP52CV1gRWbrGvNsiNsMyyFX5ss-80WB9eGxHq~yvBYgJF8J26lX-YVCLC-PaVmzSR92EBF1Nu5egoF1dvDeE8kh9y5rDSEWTj0agN0QELjPdT79saj-Co6tjL3LOY3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

const Bowie = () => (
  <div style={{
    position: "absolute",
    top: Math.floor(Math.random() * Math.floor(window.innerHeight)),
    left: Math.floor(Math.random() * Math.floor(window.innerWidth)),
  }}>
    <svg width="301" height="324" viewBox="0 0 301 324" fill="none" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect x="-28" y="-5" width="329" height="329" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.002)"/>
        </pattern>
        <image id="image0" width="500" height="500"
               href={bowieUrl}/>
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
    const interval = setInterval((thing) => {
      setBowies(prev => [...prev, <Bowie key={keyCount}/>]);
      keyCount++;
    }, 150);

    return () => clearInterval(interval);
  }, [props]);

  return <>{bowies}</>
}