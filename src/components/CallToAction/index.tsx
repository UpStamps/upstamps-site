import React from "react";
import { urls } from "../../services/constants";

const CallToAction = () => {
  return (
    <div className="container py-5">
      <div className="cta-container">
        <div className="text-center r">
          <h2 className="mb-4 m-4">Ship Code When You're Ready</h2>
          <div>
            <a
              className="btn btn-primary"
              href={urls.app}
              target="_blank"
              role="button"
              rel="noopener noreferrer"
            >
              Create account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
