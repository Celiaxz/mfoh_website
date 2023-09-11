// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Feature from "./components/feature/Feature";

// import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Team from "./components/Team/Team";
import Partner from "./components/Partner/Partner";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Feature />
      <div className="content"></div>
      <About />
      <Project />
      <Partner />
      <Team />
    </div>
  );
}

export default App;
