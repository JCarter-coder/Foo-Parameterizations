import { useState } from "react";
import Sphere from "./sub_components/Sphere";

function ModuleContainer({}) {
    //
    return (
        <div id="module-container">
            <div className="card">
                <h2>Module Container</h2>
            </div>
            <Sphere />
        </div>
    )
}

export default ModuleContainer;