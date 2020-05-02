import React from "react";

const Features = () => {
  return (
    <div className="container">
      <div className="row py-4 mb-lg-5">
        <div className="col-md-4 mb-4">
          <div className="text-center px-lg-3">
            <span className="icon icon-primary icon-lg mb-3">
              <i className="icon-inner fas fa-pen-fancy" aria-hidden="true"></i>
            </span>
            <h2 className="h4">Clean Design</h2>
            <p className="mb-md-0">
              The quick brown fox jumps over the lazy dog contains all of the
              letters of the alphabet.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-center px-lg-3">
            <span className="icon icon-primary icon-lg mb-3">
              <i
                className="icon-inner fas fa-mobile-alt"
                aria-hidden="true"
              ></i>
            </span>
            <h2 className="h4">Fully Responsive</h2>
            <p className="mb-md-0">
              The quick brown fox jumps over the lazy dog contains all of the
              letters of the alphabet.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-center px-lg-3">
            <span className="icon icon-primary icon-lg mb-3">
              <i className="icon-inner fab fa-sass" aria-hidden="true"></i>
            </span>
            <h2 className="h4">Built with Sass</h2>
            <p className="mb-md-0">
              The quick brown fox jumps over the lazy dog contains all of the
              letters of the alphabet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
