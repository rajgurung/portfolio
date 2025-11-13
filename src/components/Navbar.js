import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

class NavbarClass extends Component {
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
    const { pathname } = this.props.location;
    const isHirePage = pathname === '/hire';
    const isBlogsPage = pathname === '/blogs' || pathname === '/';
    const isAboutPage = pathname === '/landing';
    const collapseClass = isCollapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';

    return (
        <nav className="navbar navbar-expand-lg custom-menu hamburger-nav navbar-light">
          <div className="container">
            {/* Brand/Logo - links to home */}
            <Link className="navbar-brand navbar-size" to="/" onClick={this.closeNavbar}>
              <b>RG</b>
            </Link>

            {/* Hamburger button - only shows on mobile (<992px) */}
            <button
                className={`navbar-toggler ${this.state.isCollapsed ? 'collapsed' : ''}`}
                type="button"
                onClick={this.toggleNavbar}
                aria-expanded={!this.state.isCollapsed}
                aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
              <span className="sr-only">Toggle navigation</span>
            </button>

            {/* Navigation items - horizontal on desktop, collapsible on mobile */}
            <div className={collapseClass} id="navbar-toggle">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={`nav-link ${isBlogsPage ? 'active' : ''}`} to="/blogs" onClick={this.closeNavbar}>
                    BLOG
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isAboutPage ? 'active' : ''}`} to="/landing" onClick={this.closeNavbar}>
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`navbar-hire-link ${isHirePage ? 'active' : ''}`} to="/hire" onClick={this.closeNavbar}>
                    HIRE ME
                  </Link>
                </li>
              </ul>

              {/* Right-side items: Dark mode toggle */}
              <div className="navbar-right-items">
                <button
                    className="dark-mode-toggle-navbar"
                    onClick={toggleDarkMode}
                    aria-label="Toggle dark mode"
                    title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDarkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </div>
        </nav>
    );
  }
}

// Wrapper component to use React Router v6 hooks with class component
function Navbar(props) {
  const location = useLocation();
  return <NavbarClass {...props} location={location} />;
}

export default Navbar;
