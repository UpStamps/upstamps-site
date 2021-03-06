import React from "react";
//Utils
import { urls } from "../../services/constants";

import Lottie from "react-lottie";
import * as DiscoveryAnimation from "./imgs/discovery/Animation.json";
import * as BuildAnimation from "./imgs/build/Animation.json";

const Details = () => {
  return (
    <section className="container mb-4">
      <div className="row justify-content-lg-between align-items-lg-center py-4 py-lg-5">
        <div className="col-lg-5 order-lg-2 mb-4 mb-lg-0">
          <h2 className="h3">Test in Production</h2>
          <p>
            Accelerate feature delivery using Feature Flag and Toggle Management
            to build better software.
          </p>
          <a
            className="link-cta"
            href={urls.app}
            target="_blank"
            rel="noopener noreferrer"
          >
            Create a new Feature Flag
          </a>
        </div>
        <div className="col-lg-6 order-lg-1">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              // @ts-ignore
              animationData: DiscoveryAnimation.default,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={400}
          />
        </div>
      </div>
      <div className="row justify-content-lg-between align-items-lg-center py-4 py-lg-5">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <h2 className="h3">Easy Implementation</h2>
          <p>
            Easy to use SDKs and Components for development teams to quickly
            build and deploy applications.
          </p>

          <ul className="list-group list-group-horizontal">
            <li className="list-group-item list-group-item-integration">
              <a
                href={urls.integrations.javacript}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../imgs/integrations/javascript.svg"
                  alt="Vanilla JS Integration"
                  className="img-fluid"
                />
              </a>
            </li>
            <li className="list-group-item list-group-item-integration">
              <a
                href={urls.integrations.react}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../imgs/integrations/react.svg"
                  alt="React Integration"
                  className="img-fluid"
                />
              </a>
            </li>
            <li className="list-group-item list-group-item-integration">
              <a
                href={urls.integrations.rest}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../imgs/integrations/rest.svg"
                  alt="Rest API Integration"
                  className="img-fluid"
                />
              </a>
            </li>
          </ul>

          <a
            className="link-cta"
            href={urls.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            See Documentation
          </a>
        </div>
        <div className="col-lg-6">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              // @ts-ignore
              animationData: BuildAnimation.default,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Details;
