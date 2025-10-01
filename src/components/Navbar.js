import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
  }

  toggleNavbar = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  closeNavbar = () => {
    this.setState({ isCollapsed: true });
  };

  render() {
    const { isCollapsed } = this.state;
    const { isDarkMode, toggleDarkMode } = this.context;
    const collapseClass = isCollapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';

    return (
        <nav className="navbar custom-menu hamburger-nav navbar-light">
          <div className="container">
            <Link className="navbar-brand navbar-size" to="/" onClick={this.closeNavbar}>
              {/* <b>RG</b> or logo here */}
            </Link>

             {/*This is the hamburger menu button that shows in mobile view.*/}
             {/*When clicked, it toggles the navbar open/closed using React state.*/}
            <button
                // This class makes the button look like a hamburger by default.
                // If the navbar is collapsed, we add the 'collapsed' class.
                // This keeps the animation and icon working correctly.
                className={`navbar-toggler ${this.state.isCollapsed ? 'collapsed' : ''}`}

                // Tells the browser this is a button
                type="button"

                // When clicked, it triggers our custom method to toggle open/close
                onClick={this.toggleNavbar}

                // Accessibility: tells screen readers whether menu is open or closed
                aria-expanded={!this.state.isCollapsed}
                aria-label="Toggle navigation"
            >
              {/* These are the three bars of the hamburger icon.
      You already have styles for these (top-bar, middle-bar, bottom-bar) */}
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>

              {/* This helps screen readers understand what the button does */}
              <span className="sr-only">Toggle navigation</span>
            </button>


            <div className={collapseClass} id="navbar-toggle">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/landing" onClick={this.closeNavbar}>ABOUT</Link>
                  <Link className="nav-link active" to="/blogs" onClick={this.closeNavbar}>BLOG</Link>
                  {/*<Link className="nav-link active" to="/cv" onClick={this.closeNavbar}>CV</Link>*/}
                  {/*<Link className="nav-link active" to="/about" onClick={this.closeNavbar}>ABOUT</Link>*/}
                  {/*<Link className="nav-link active" to="/projects" onClick={this.closeNavbar}>PROJECTS</Link>*/}
                  {/*<Link className="nav-link active" to="/experience" onClick={this.closeNavbar}>EXPERIENCE</Link>*/}
                </li>
              </ul>
            </div>
          </div>

          {/* Floating dark mode toggle button */}
          <button
              className="dark-mode-toggle-floating"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
    );
  }
}

export default Navbar;
