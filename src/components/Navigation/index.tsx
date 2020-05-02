import React from "react";

const Navigation = () => {
  return (
    <header className="site-header">
      <a href="#main" className="sr-only sr-only-focusable">
        Skip to main content
      </a>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-light py-3"
          aria-label="Main navigation"
        >
          <a className="navbar-brand text-dark" href="index.html">
            <img src="assets/img/logo-boost.svg" alt="Boost Theme" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars fa-lg"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center text-uppercase pt-3 pt-lg-0 ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="pages.html">
                  Pages
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="docs/index.html">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
