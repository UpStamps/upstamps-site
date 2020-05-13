import React from "react";
//Components
import {
  Hero,
  Features,
  Details,
  CallToAction,
  Content
} from "../../components";

const HomePage = () => {
  return (
    <Content>
      <Hero />
      <Content>
        <Features
          data={[
            {
              id: 1,
              icon: "flag",
              title: "Feature Flags",
              description: `Use feature flags to separate code deployments and manage all of
              your features in one place`
            },
            {
              id: 2,
              icon: "hdr_strong",
              title: "A/B Tests",
              description: `Test new features in production without deployments with metrics.
              Easily deploy or hide features.`
            },
            {
              id: 3,
              icon: "donut_large",
              title: "Segments",
              description: `Target new feature releases with specific Segments of filters and
              rules. With easy implementation.`
            }
          ]}
        />
        <Details />
        <CallToAction
          title="Ship Code When You're Ready"
          action="Create account"
        />
      </Content>
    </Content>
  );
};

export default HomePage;
