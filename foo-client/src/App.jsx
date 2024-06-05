import React, { useState } from 'react';
import Header from "./components/Header.jsx";
import ModuleSelector from "./components/ModuleSelector";
import ModuleContainer from "./components/ModuleContainer.jsx";
import RightContainer from "./components/RightContainer.jsx";

import './App.css'

const App = () => {
  const [ selectedModule, setSelectedModule ] = useState(null);

  const modules = {
    Sphere: React.lazy(() => import('./components/modules/sphere/Sphere_Phys.jsx')),
  }

  return (
    <>
      <Header />
      <ModuleSelector 
        modules={modules}
        setSelectedModule={setSelectedModule}
      />
      <div id='main-container'>
        <ModuleContainer 
          selectedModule={selectedModule}
          modules={modules}
        />
        <RightContainer />
      </div>
    </>
  )
}

export default App
