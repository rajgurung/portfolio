import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Project from './Project';

class Navbar extends Component {
  render() {
    return (
        <div>
          <nav className="navbar custom-menu hamburger-nav navbar-light">
            <div className="container">
              <a className="navbar-brand navbar-size" href="/">
                {/*<img src={Logo} alt=""/>*/}
                <b>RG</b>
              </a>

              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-toggle"
                      aria-controls="navbar-toggle" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
                <span className="sr-only">Toggle navigation</span>
              </button>
              {/*navbar-toggler*/}

              <div className="collapse navbar-collapse" id="navbar-toggle">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    {/*<a className="nav-link active" href="/">HOME</a>*/}
                      <a className="nav-link active" href="/home">HOME</a>
                      <a className="nav-link active" href="/about">ABOUT</a>
                      <a className="nav-link active" href="/projects">PROJECTS</a>
                  </li>
                </ul>
                {/*navbar-nav*/}
              </div>
              {/*navbar-collapse*/}
            </div>
            {/*container*/}
          </nav> {/* navbar-light */}


          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />} />
              <Route path="/projects" component={Project} />} />
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default Navbar;
