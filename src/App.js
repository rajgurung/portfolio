import React from 'react';
import './styelsheets/bootstrap.min.css';
// import './styelsheets/App.css';
import './styelsheets/custom.css'
import './styelsheets/style.css'
import './styelsheets/animate.css';
import './styelsheets/magnific-popup.css';
// Custom Styles
import './styelsheets/linear-icons.css';
import './styelsheets/fontawesome-all.min.css';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import './images/slide1.jpg'

// import About from './components/About';
import Navbar from './components/Navbar';
// import Header from "./components/Header";
// import Home from "./components/Home";
// import About from "./components/About";

function App() {
  return(
    <div className="App" style={{ whiteSpace: "pre-line" }}>
      <div id="preloader">
        <div className="preloader">
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="top"></div>
      <Navbar></Navbar>
      {/*<Header></Header>*/}
    </div>
  );
}

export default App;
