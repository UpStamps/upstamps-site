import React, { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
//Utils
import { urls } from "../../services/constants";
//Hooks
import useWindowSize from "../../hooks/useWindowSize";

interface Props {
  className?: string;
}

const Navigation = ({ className }: Props) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [width] = useWindowSize();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header className={className}>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-light py-3"
          aria-label="Navigation"
        >
          <Link className="navbar-brand" to="/">
            <img src="../imgs/logo.svg" alt="UpStamps" />
          </Link>
          {width <= 991 && (
            <button
              className="navbar-button"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <span className="material-icons">{open ? "close" : "menu"}</span>
            </button>
          )}
          <div className={`${open ? "" : "collapse"} navbar-collapse`}>
            <ul className="navbar-nav align-items-lg-center text-uppercase pt-3 pt-lg-0 ml-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/tour"
                  activeClassName="nav-link-active"
                >
                  Product Tour
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/why-use-feature-flags"
                  activeClassName="nav-link-active"
                >
                  Why Use?
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/pricing"
                  activeClassName="nav-link-active"
                >
                  Pricing
                </NavLink>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href={urls.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href={urls.app}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign In
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={open ? "nav-link" : "btn btn-sm btn-secondary"}
                  href={urls.app}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign Up for free
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
