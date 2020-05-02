import React from "react";
import { Link } from "react-router-dom";
//Utils
import { urls } from "../../services/constants";

interface Props {
  className?: string;
}

const Navigation = ({ className }: Props) => {
  return (
    <header className={className}>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-light py-3"
          aria-label="Navigation"
        >
          <Link className="navbar-brand text-dark" to="/">
            <img src="../imgs/logo.jpg" alt="UpStamps" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="material-icons">menu</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center text-uppercase pt-3 pt-lg-0 ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Features
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={urls.docs} target="_blank">
                  Documentation
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={urls.app} target="_blank">
                  Sign In
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={urls.app} target="_blank">
                  Sign Up
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
