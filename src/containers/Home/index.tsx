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
        <Features />
        <Details />
        <CallToAction />
      </Content>
    </Content>
  );
};

export default HomePage;
