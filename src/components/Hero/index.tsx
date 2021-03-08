import React from "react";
//Animation
//import * as TestAnimation from "./img/Animation.json";
import * as ShipAnimation from "./img/ShipAnimation.json";
import Lottie from "react-lottie";
//Utils
import { urls } from "../../services/constants";
//import { ABTest, useRemoteFlag } from "upstamps-react";
//Components
//import TypeWriter from "../TypeWriter";

/*interface Props {
  action: any;
}*/

const HorizontalHero = () => {
  const content = {
    title: "Did you ever deploy a feature by mistake?",
    description:
      "Feature flagging is a method by which developers wrap a new feature in an if/then statement to gain more control over its release",
    action: "Get Started for Free",
  };

  return (
    <div className="container mb-lg-3">
      <div className="row  py-5 py-lg-6">
        <div className="col-12 col-md">
          <h1 className="display-3 mb-4">{content.title}</h1>
          <p className="lead">{content.description}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              //Open new tab the app
              window.open(urls.app);
            }}
          >
            {content.action}
          </button>
          <a
            href="https://www.producthunt.com/posts/upstamps?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-upstamps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mt-2"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=210403&theme=light"
              alt="UpStamps - Central control & test for user interfaces | Product Hunt Embed"
              style={{ width: "250px", height: "54px", marginLeft: "10px" }}
              width="250px"
              height="54px"
            />
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
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

/*const CenterHero = ({ action }: Props) => {
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
            ]}
          />

          <div className="row justify-content-center">
            <div className="col-12 col-md-auto">
              <p className="lead text-center text-md-left">
                <span role="img" aria-label="control">
                  🎛
                </span>{" "}
                Central control & test for UI
              </p>
              <p className="lead text-center text-md-left">
                <span role="img" aria-label="ship">
                  🛳
                </span>{" "}
                Ship when you're ready
              </p>
            </div>
            <div className="col-12 col-md-auto">
              <p className="lead text-center text-md-left">
                <span role="img" aria-label="rocket">
                  🚀
                </span>{" "}
                Accelerate feature release
              </p>
              <p className="lead text-center text-md-left">
                <span role="img" aria-label="monkey">
                  🙈
                </span>{" "}
                Hide unfinished features
              </p>
            </div>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              //Send test choice
              action.current.emitter();
              //Open new tab the app
              window.open(urls.app);
            }}
          >
            Get Started for Free
          </button>

          <div>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                // @ts-ignore
                animationData: TestAnimation.default,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={460}
            />
          </div>
        </div>
      </div>
    </div>
  );
};*/

const Hero = () => {
  return <HorizontalHero />;
};

/*const Hero = () => {
  const componentRef = useRef();

  return (
    <ABTest testRef={componentRef} name="hero_content">
      <ABTest.Variant name="A">
        <CenterHero action={componentRef} />
      </ABTest.Variant>
      <ABTest.Variant name="B">
        <HorizontalHero action={componentRef} />
      </ABTest.Variant>
    </ABTest>
  );
};*/

export default Hero;
