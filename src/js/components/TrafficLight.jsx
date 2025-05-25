import React, { useState } from "react";

import '../../styles/index.css'

export function TrafficLight() {
    const [ selectedColor, setSelectedColor] = useState('yellow');
    return (
        <div className="traffic-light">
            <div onClick={() => setSelectedColor("red")} 
            className={"light red "+((selectedColor === "red") ? " glow" : "")}></div>
            <div onClick={() => setSelectedColor("yellow")}
            class={"light yellow "+((selectedColor === "yellow") ? " glow" : "")}></div>
            <div onClick={() => setSelectedColor("green")} 
            class={"light green "+((selectedColor === "green") ? " glow" : "")}></div>
        </div>
    );    
}

export default TrafficLight;