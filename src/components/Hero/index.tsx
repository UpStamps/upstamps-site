import React from "react";
import * as TestAnimation from "./img/Animation.json";
import Lottie from "react-lottie";
//Utils
import { urls } from "../../services/constants";

const Hero = () => {
  return (
    <div className="container mb-lg-3">
      <div className="row justify-content-center py-5 py-lg-6">
        <div className="col-lg-10 text-center py-4">
          <h1 className="display-3 mb-4">Ship faster with less risk</h1>
          <p className="lead px-sm-5">
            Manage every feature with a central visibility and control user
            interface. Test and use feature management to separate code from
            different environments and projects.
          </p>
          <a
            className="btn btn-primary"
            href={urls.app}
            rel="noopener noreferrer"
          >
            Get started for free
          </a>

          <div>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                // @ts-ignore
                animationData: TestAnimation.default,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                }
              }}
              height={460}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
