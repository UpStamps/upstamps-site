import React from "react";
import { urls } from "../../services/constants";

interface Props {
  title: string;
  action: string;
}

const CallToAction = ({ title, action }: Props) => {
  return (
    <div className="container py-5">
      <div className="cta-container">
        <div className="text-center r">
          <h2 className="mb-4 m-4">{title}</h2>
          <div>
            <a
              className="btn btn-primary"
              href={urls.app}
              target="_blank"
              role="button"
              rel="noopener noreferrer"
            >
              {action}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
