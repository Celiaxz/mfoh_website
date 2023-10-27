// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Feature from "./components/feature/Feature";

// import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Team from "./components/Team/Team";
import Partner from "./components/Partner/Partner";
import Ambassador from "./components/Ambassador/Ambassador";
import Apply from "./components/Apply/Apply";
import Contact from "./components/Contact/contact";
import Pay from "./components/Payment/pay";
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
      <Ambassador />
      <Apply />
      <Contact />
      <Pay />
    </div>
  );
}

export default App;
