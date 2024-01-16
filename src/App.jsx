// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Feature from "./components/feature/Feature";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Team from "./components/Team/Team";
import Partner from "./components/Partner/Partner";
import Ambassador from "./components/Ambassador/Ambassador";
// import Contact from "./components/Contact/Contact"
import MainBlog from "./components/Blog/MainBlog";
import Footer from "./components/Footer/Footer";
import Application from "./components/Apply/ApplicationRequire";
function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path="/" element={<Feature />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ambassador" element={<Ambassador />} />

        <Route path="/project" element={<Project />} />
        <Route path="/partner-with-us" element={<Partner />} />
        <Route path="/apply" element={<Application />} />
      </Routes> */}
      <Feature />
      <About />

      <Ambassador />
      <Project />
      <Partner />
      <Application />
      <Team />
      <Footer />
    </>
  );
}

export default App;
