import React, { Fragment } from "react";

const Footer = () => {
  return (
    <footer className="site-footer mt-5">
      <div className="container">
        <div className="row justify-content-md-between">
          <div className="col-sm-12 col-md-4 mb-4">
            <h2 className="h5 mb-3">Company</h2>
            <p>
              Boost is a responsive website theme based on Bootstrap 4. We help
              you to create a site that your users will love.
            </p>
          </div>
          <div className="col-4 col-md-2 mb-4">
            <h2 className="h5 mb-3">About</h2>
            <ul className="nav flex-column">
              <li className="mb-1">
                <a href="#">About</a>
              </li>
              <li className="mb-1">
                <a href="#">Team</a>
              </li>
              <li className="mb-1">
                <a href="#">Careers</a>
              </li>
              <li className="mb-1">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-md-2 mb-4">
            <h2 className="h5 mb-3">Services</h2>
            <ul className="nav flex-column">
              <li className="mb-1">
                <a href="#">Design</a>
              </li>
              <li className="mb-1">
                <a href="#">Themes</a>
              </li>
              <li className="mb-1">
                <a href="#">Branding</a>
              </li>
              <li className="mb-1">
                <a href="#">CMS</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-md-2 mb-4">
            <h2 className="h5 mb-3">Help</h2>
            <ul className="nav flex-column">
              <li className="mb-1">
                <a href="#">FAQ</a>
              </li>
              <li className="mb-1">
                <a href="#">Contact</a>
              </li>
              <li className="mb-1">
                <a href="#">Phones</a>
              </li>
              <li className="mb-1">
                <a href="#">Chat</a>
              </li>
            </ul>
          </div>
        </div>

        <hr role="presentation" />

        <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center">
          <div className="text-muted mb-3">
            &copy; Made by{" "}
            <a href="https://11bits.es/" target="_blank" rel="noopener">
              11bits
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="icon icon-sm icon-secondary" href="#">
                <i className="icon-inner fab fa-twitter" aria-hidden="true"></i>
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="icon icon-sm icon-secondary" href="#">
                <i
                  className="icon-inner fab fa-facebook-f"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="icon icon-sm icon-secondary" href="#">
                <i
                  className="icon-inner fab fa-linkedin-in"
                  aria-hidden="true"
                ></i>
                <span className="sr-only">Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
