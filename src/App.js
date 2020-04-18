import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Portfolio from "./components/pages/Portfolio";
// import About from "./pages/About";
// import Contact from "./components/pages/Contact";

function Hello(){
  return(
    <div>
      <p>Hello again</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/About" component={Hello} />
        <Footer />
        {/* <Route exact path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;
