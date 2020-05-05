import React from "react";

const Screens = () => {
  return (
    <section className="container">
      <div className="row justify-content-center py-4 py-md-5 py-xl-6">
        <div className="col-lg-10 col-xl-8 text-center mb-xl-4">
          <h1 className="display-4 mb-4">
            Manage features without deployments
          </h1>
          <p className="lead">
            See how teams are managing their projects using feature management
            to progressively deliver features to users with confidence.
          </p>

          <img
            className="img-fluid shadow"
            src="../imgs/gifs/global.gif"
            alt="Create Projects"
          />
        </div>

        <div className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
          <span className="material-icons tour-icon">view_agenda</span>
          <h3 className="mb-4">Create Projects</h3>
          <p className="text-muted">
            Integrate different Feature Flags across multiple projects and
            manage across web, mobile, and server-side applications.
          </p>

          <img
            className="img-fluid"
            src="../imgs/gifs/projects.gif"
            alt="Create Projects"
          />
        </div>

        <div className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
          <span className="material-icons tour-icon">local_florist</span>
          <h3 className="mb-4">Organize by Environments</h3>
          <p className="text-muted">
            Separate features deployment across different environments and
            control their feature lifecycles.
          </p>

          <img
            className="img-fluid"
            src="../imgs/gifs/envs.gif"
            alt="Organize by Environments"
          />
        </div>

        <div className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
          <span className="material-icons tour-icon">flag</span>
          <h3 className="mb-4">Easily Deploy with Feature & Remote Flags</h3>
          <p className="text-muted">
            Use flags to test faster in Production, eliminating the risk by
            maintaining control of the deployments. Use Remote Flags to change
            real-time behavior of features through response data.
          </p>

          <img
            className="img-fluid"
            src="../imgs/gifs/flags.gif"
            alt="Easily Deploy with Feature & Remote Flags"
          />
        </div>

        <div className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
          <span className="material-icons tour-icon">hdr_strong</span>
          <h3 className="mb-4">Run A/B Tests</h3>
          <p className="text-muted">
            Use A/B Tests to randomized experiments with two variants and
            compare with the users response. Decide by your users feedback which
            variant is more effective to launch.
          </p>

          <img
            className="img-fluid"
            src="../imgs/gifs/tests.gif"
            alt="Run A/B Tests"
          />
        </div>

        <div className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
          <span className="material-icons tour-icon">donut_large</span>
          <h3 className="mb-4">Target Specific Segments</h3>
          <p className="text-muted">
            Control who has access to new features with Segments and define
            Targets based on Users Device or Location.
          </p>

          <img
            className="img-fluid"
            src="../imgs/gifs/segments.gif"
            alt="Target Specific Segments"
          />
        </div>
      </div>
    </section>
  );
};

export default Screens;
