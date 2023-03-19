import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Details from "./routes/Details";
import Home from "./routes/Home";
  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Details/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    );
}

export default App;
