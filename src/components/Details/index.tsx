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
          <a className="link-cta" href={urls.app}>
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
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            height={400}
          />
        </div>
      </div>
      <div className="row justify-content-lg-between align-items-lg-center py-4 py-lg-5">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <h2 className="h3">Easy Implementation</h2>
          <p>
            Easy to use SDKs and Components for development teams quickly build
            and deploy applications.
          </p>
          <a className="link-cta" href={urls.docs}>
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
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Details;
