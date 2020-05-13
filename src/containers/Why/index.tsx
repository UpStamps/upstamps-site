import React from "react";
//Components
import { Explanation, Content, CallToAction } from "../../components";

const WhyPage = () => {
  return (
    <Content>
      <Explanation />
      <CallToAction
        title="Ship Code When You're Ready"
        action="Create account"
      />
    </Content>
  );
};

export default WhyPage;
