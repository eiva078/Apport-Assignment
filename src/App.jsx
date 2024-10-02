import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Selector from "./components/Selector/Selector";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selector" element={<Selector />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
