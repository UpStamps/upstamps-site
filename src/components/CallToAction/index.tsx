import React from "react";

const CallToAction = () => {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h2 className="mb-4">Are you ready to start?</h2>
        <div className="mb-4">
          <a className="btn btn-primary rounded-pill" href="#" role="button">
            Get started now
          </a>
        </div>
        <a className="link-cta" href="contact.html">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
