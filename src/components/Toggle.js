
import React,{useState} from "react";


function Toggle() {
  const [isOn, setIsOn]=useState(false);
  const handleEvent=()=>{
    //isOn ? "ON" : "OFF"
    setIsOn((isOn) => !isOn);
  }
  return <button onClick={handleEvent}>{isOn? "ON": "OFF"}</button>;
}

export default Toggle;
