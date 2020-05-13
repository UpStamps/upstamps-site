import React from "react";
//Animation
import * as TestAnimation from "./img/Animation.json";
import * as ShipAnimation from "./img/ShipAnimation.json";
import Lottie from "react-lottie";
//Utils
import { urls } from "../../services/constants";
//Components
import TypeWriter from "../TypeWriter";

const HorizontalHero = () => {
  return (
    <div className="container mb-lg-3">
      <div className="row  py-5 py-lg-6">
        <div className="col-12 col-md">
          <h1 className="display-3 mb-4">
            Did you ever deploy a feature by mistake?
          </h1>

          <p className="lead">
            Feature flagging is a method by which developers wrap a new feature
            in an if/then statement to gain more control over its release
          </p>

          <a
            className="btn btn-primary"
            href={urls.app}
            rel="noopener noreferrer"
          >
            Get Started for Free
          </a>
        </div>
        <div className="col-12 col-md mt-sm-5">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              // @ts-ignore
              animationData: ShipAnimation.default,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

const CenterHero = () => {
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
              "Remote Flag"
            ]}
          />

          <div className="row justify-content-center">
            <div className="col-12 col-md-auto">
              <p className="lead text-center text-md-left">
                🎛 Central control & test for UI
              </p>
              <p className="lead text-center text-md-left">
                🛳 Ship when you're ready
              </p>
            </div>
            <div className="col-12 col-md-auto">
              <p className="lead text-center text-md-left">
                🚀 Accelerate feature release
              </p>
              <p className="lead text-center text-md-left">
                🙈 Hide unfinished features
              </p>
            </div>
          </div>

          <a
            className="btn btn-primary"
            href={urls.app}
            rel="noopener noreferrer"
          >
            Get Started for Free
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

const Hero = () => {
  return <HorizontalHero />;
};

export default Hero;
