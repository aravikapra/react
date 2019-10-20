import React, { Component } from "react";
import "./App.css";
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import "./asset/Master.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
