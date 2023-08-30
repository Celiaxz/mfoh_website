import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Feature from "./components/feature/Feature";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Feature />
      <div className="content"></div>
    </div>
  );
}

export default App;
