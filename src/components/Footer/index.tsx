import React from "react";
import { Link } from "react-router-dom";
import { urls } from "../../services/constants";

const Footer = () => {
  return (
    <footer className="site-footer mt-5 mb-4">
      <div className="container">
        <div className="row justify-content-md-between">
          <div className="col-sm-12 col-md-4 mb-4">
            <h2 className="h5 mb-3">UpStamps</h2>
            <p>
              Use UpStamps Feature Flag Management Platform to separate code
              from different environments and projects.
            </p>
          </div>
          <div className="col-4 col-md-2 mb-4">
            <h2 className="h5 mb-3">Product</h2>
            <ul className="nav flex-column">
              <li className="mb-1">
                <Link to="/tour">Product Tour</Link>
              </li>
              <li className="mb-1">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="mb-1">
                <Link to="/pricing">Faq</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 col-md-2 mb-4">
            <h2 className="h5 mb-3">Developers</h2>
            <ul className="nav flex-column">
              <li className="mb-1">
                <a href={urls.docs} target="_blank" rel="noopener noreferrer">
                  Documentation
                </a>
              </li>
              <li className="mb-1">
                <a href={urls.app} rel="noopener noreferrer">
                  Create Account
                </a>
              </li>
              <li className="mb-1">
                <a href={urls.app} rel="noopener noreferrer">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-md-2 mb-4">
            <h2 className="h5 mb-3">Legal</h2>
            <ul className="nav flex-column">
              <li className="mb-1">
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li className="mb-1">
                <Link to="/privacy">Privacy Policy</Link>
              </li>

              <li className="mb-1">
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "#656e79"
                  }}
                  onClick={() => {
                    //@ts-ignore
                    window.Metomic("ConsentManager:show");
                  }}
                >
                  Manage Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
