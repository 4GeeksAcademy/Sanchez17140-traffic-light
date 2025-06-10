import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
  const [selectedColor, setSelectedColor] = useState("red" ,"yellow", "green",);

  return (
    <>
    <div className="stem"></div>
    <div className="container">
      <div
        onClick={() => setSelectedColor("red")}
        className={"red light" + (selectedColor === "red" ? " glow" : "")}
      >
        
      </div>
      <div
        onClick={() => setSelectedColor("yellow")}
        className={"yellow light" + (selectedColor === "yellow" ? " glow" : "")}
      >
        
      </div>
      <div
        onClick={() => setSelectedColor("green")}
        className={"green light" + (selectedColor === "green" ? " glow" : "")}
      >
        
      </div>
    </div>
    </>
  );
}

export default Home;
