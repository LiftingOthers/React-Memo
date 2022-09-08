import ButtonComponent from "./ButtonComponent";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import "./App.css";
import { useState } from "react";


function App() {
  const [stateOne , setStateOne] = useState(false)
  const [stateTwo , setStateTwo] = useState(false)

  const funcOne =()=>{
     setStateOne(!stateOne);
  }

  const funcTwo =()=>{
    setStateTwo(!stateTwo);
 }
  return (
   <>
   <section>
     <h1>How To Avoid Re-Render React Component</h1>
     <div className="flex">
          <div>
            <ComponentOne stateOne={stateOne}/>
            <ButtonComponent click={funcOne}/>
          </div>
          <div>
            <ComponentTwo stateTwo={stateTwo}/>
            <ButtonComponent  click={funcTwo}/>
          </div>
     </div>
   </section>
   </>
  );
}

export default App;
