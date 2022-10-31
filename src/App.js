import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useRef } from "react";

function App() {
  const projref = useRef(null);
  const contref = useRef(null);

  const handleProjClick = () => {
    projref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handleContClick = () => {
    contref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="">
      <Home handleProjClick={handleProjClick} handleContClick={handleContClick} />
      <div ref={projref}><Projects /></div>
      <div ref={contref}><Contact /></div>
    </div>
  );
}

export default App;
