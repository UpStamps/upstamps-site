import React from "react";
//Animation
import * as TestAnimation from "./img/Animation.json";
import Lottie from "react-lottie";
//Utils
import { urls } from "../../services/constants";
//Components
import TypeWriter from "../TypeWriter";

const Hero = () => {
  return (
    <div className="container mb-lg-3">
      <div className="row justify-content-center py-5 py-lg-6">
        <div className="col-lg-10 text-center py-4">
          <TypeWriter
            heading="Deploy faster with"
            messages={[
              "less risk",
              "Feature Flag",
              "A/B Testing",
              "Segments",
              "Remote Flag",
              "Environments"
            ]}
          />

          <p className="px-sm-5">
            Central control and test for user interfaces <br />
            🛳 Ship when you're ready 🚀 Accelerate feature release 🙈 Hide
            unfinished features
          </p>

          <a
            className="btn btn-primary"
            href={urls.app}
            rel="noopener noreferrer"
          >
            Start testing in production
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
