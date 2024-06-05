import { useState } from "react";

const ModuleSelector = ({ modules, setSelectedModule }) => {
    const handleModuleChange = (event) => {
        setSelectedModule(event.target.value);
    }

    return (
        <>
            <div id="module-selector">
                <select onChange={handleModuleChange} defaultValue="">
                    <option value="" disabled>Select a module</option>
                    {Object.keys(modules).map((moduleName) => (
                        <option key={moduleName} value={moduleName}>
                            {moduleName}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default ModuleSelector;