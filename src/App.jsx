import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Project from "./Project";
import Career from "./Career";
import About from "./About";
import Service from "./Service"


function App() {
  return (

    <Routes>
          <Route path="/" element={<Layout />}>        
          <Route path="services" element={<Service />} />
          <Route path="projects" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          </Route>
    </Routes>
    


  )
}

export default App
