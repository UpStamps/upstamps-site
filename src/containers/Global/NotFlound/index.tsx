import React from "react";
import Lottie from "react-lottie";
import * as GrowAnimation from "./img/Animation.json";

const Index = () => {
  return (
    <section className="container">
      <div className="row justify-content-center py-4 py-md-5 py-xl-6">
        <div className="col-lg-10 col-xl-8 text-center mb-xl-4">
          <h1 className="display-4 mb-4">404: Page Not Found</h1>
          <p className="lead">
            Whoops... we couldn't find that page! A Feature flag was created to
            fix this.
          </p>
        </div>
      </div>
      <div className="row justify-content-center py-4 py-md-5 py-xl-6">
        <div className="col-lg-10 col-xl-8 text-center mb-xl-4">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              // @ts-ignore
              animationData: GrowAnimation.default,
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

export default Index;
