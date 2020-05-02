import React from "react";
//Components
import { Header, Faq, Pricing, Content } from "../../components";

const PricingPage = () => {
  return (
    <Content>
      <Header />
      <Content>
        <Pricing />
        <Faq />
      </Content>
    </Content>
  );
};

export default PricingPage;
