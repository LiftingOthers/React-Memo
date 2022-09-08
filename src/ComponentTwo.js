import React, { memo } from 'react';
import Tamilnadu from "./images/tamilnadu.png";
import Goa from "./images/goa.png";

function ComponentTwo({stateTwo}) {
  console.log("render component #2");
  return (
    <>
     <h1 align="center">2</h1>
    {stateTwo ? <img src={Tamilnadu} alt="tamildanu" /> : <img src={Goa} alt="goa" /> }
    </>
   
  )
}

export default memo(ComponentTwo);