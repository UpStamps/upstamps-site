import React from "react";
//Components
import { Screens, Content, CallToAction } from "../../components";

const TourPage = () => {
  return (
    <Content>
      <Screens
        title="Manage features without deployments"
        description={`See how teams are managing their projects using feature management
            to progressively deliver features to users with confidence.`}
        image={{
          url: "../imgs/gifs/global.gif",
          alt: "Create Projects",
        }}
        data={[
          {
            id: 1,
            icon: "view_agenda",
            title: "Create Projects",
            description: `Integrate different Feature Flags across multiple projects and
            manage across web, mobile, and server-side applications.`,
            image: {
              url: "../imgs/gifs/projects.gif",
              alt: "Create Projects",
            },
          },
          {
            id: 2,
            icon: "local_florist",
            title: "Organize by Environments",
            description: `Separate features deployment across different environments and
            control their feature lifecycles.`,
            image: {
              url: "../imgs/gifs/envs.gif",
              alt: "Organize by Environments",
            },
          },
          {
            id: 3,
            icon: "flag",
            title: "Easily Deploy with Feature & Remote Flags",
            description: `Use flags to test faster in Production, eliminating the risk by
            maintaining control of the deployments. Use Remote Flags to change
            real-time behavior of features through response data.`,
            image: {
              url: "../imgs/gifs/flags.gif",
              alt: "Easily Deploy with Feature & Remote Flags",
            },
          },
          {
            id: 4,
            icon: "hdr_strong",
            title: "Run A/B Tests",
            description: `Use A/B Tests to randomized experiments with two variants and
            compare with the users response. Decide by your users feedback which
            variant is more effective to launch.`,
            image: {
              url: "../imgs/gifs/tests.gif",
              alt: "Run A/B Tests",
            },
          },
          {
            id: 5,
            icon: "donut_large",
            title: "Target Specific Segments",
            description: `Control who has access to new features with Segments and define
            Targets based on Users Device or Location.`,
            image: {
              url: "../imgs/gifs/segments.gif",
              alt: "Target Specific Segments",
            },
          },
        ]}
      />
      <CallToAction
        title="Worried about deploying a feature to production by mistake?"
        action="Sign up for free"
      />
    </Content>
  );
};

export default TourPage;
