import React, {memo} from 'react';
import Tamilnadu from "./images/tamilnadu.png";
import Goa from "./images/goa.png";

function ComponentOne({stateOne}) {
  console.log("render component #1");
  return (
    <>
    <h1 align="center">1</h1>
    {stateOne ? <img src={Tamilnadu} alt="tamildanu" /> : <img src={Goa} alt="goa" /> }
    </>
   
  )
}

export default memo(ComponentOne);