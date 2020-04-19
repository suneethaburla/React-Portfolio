import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./pages/Contact";
import Portfolio from "./components/Portfolio";
// import Portfolio from "./components/pages/Portfolio";
// import About from "./pages/About";
// import Contact from "./components/pages/Contact";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} /> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
