import React from "react";
import LandingSec from "./homepage/LandingSec.js"
import ExperienceSec from "./homepage/ExperienceSec.js"
import ProgramSec from "./homepage/programSec.js"
import "./homepage.css"

function Homepage(){
    return (
        <div>
            <LandingSec/>
            <ExperienceSec/>
            <ProgramSec/>
        </div>    
    );
}

export default Homepage;