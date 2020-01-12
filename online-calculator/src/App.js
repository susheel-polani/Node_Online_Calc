import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import Calculator from "./components/calculator";
import History from "./components/history";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Calculator} />
      <Route path="/history" component={History} />
      </div>
    </Router>
  );
}

export default App;
