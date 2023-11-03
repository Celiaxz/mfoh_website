// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import Contact from "./components/Contact/Contact";
// import Pay from "./components/Payment/pay";
function App() {
  // const [count, setCount] = useState(0);

  // return (
  //   <div>
  //     <Navbar />
  //     <Feature />
  //     <div className="content"></div>
  //     <About />
  //     <Project />
  //
  //     <Team />
  //     <Ambassador />
  //     <Apply />
  //     <Contact />
  //     <Pay />
  //   </div>
  // );
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<About />} />
        {/* <Route path="/"></Route> */}
        <Route path="/" element={<Feature />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Project />
      <Partner />

      {/* <Team /> */}
    </>
  );
}

export default App;
