import React from "react";

const Features = () => {
  return (
    <div className="container">
      <div className="row py-4 mb-lg-5">
        <div className="col-md-4 mb-4">
          <div className="text-center px-lg-3">
            <span className="icon icon-primary icon-lg mb-3">
              <span className="icon-inner material-icons">flag</span>
            </span>
            <h2 className="h4">Feature Flags</h2>
            <p className="mb-md-0">
              Use feature flags to separate code deployments and manage all of
              your features in one place
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-center px-lg-3">
            <span className="icon icon-primary icon-lg mb-3">
              <span className="icon-inner material-icons">hdr_strong</span>
            </span>
            <h2 className="h4">A/B Tests</h2>
            <p className="mb-md-0">
              Test new features in production without deployments with metrics.
              Easily deploy or hide features.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="text-center px-lg-3">
            <span className="icon icon-primary icon-lg mb-3">
              <span className="icon-inner material-icons">donut_large</span>
            </span>
            <h2 className="h4">Segments</h2>
            <p className="mb-md-0">
              Target new feature releases with specific Segments of filters and
              rules. With easy implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
