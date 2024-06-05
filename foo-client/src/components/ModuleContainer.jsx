import React, { Suspense, useState } from "react";

const ModuleContainer = ({ selectedModule, modules }) => {
    if (!selectedModule) {
        return (
            <div id="module-container">
                <div className="card">
                    <h2>Module</h2>
                </div>
                <h3>Please select a module.</h3>
            </div>
        )
    }

    const SelectedComponent = modules[selectedModule];
    //
    return (
        <div id="module-container">
            <div className="card">
                <h2>Module</h2>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <SelectedComponent />
            </Suspense>
        </div>
    )
}

export default ModuleContainer;