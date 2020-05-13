import React from "react";
//Components
import { Header, Faq, Pricing, Content } from "../../components";

const PricingPage = () => {
  return (
    <Content>
      <Header
        title="Simple pricing"
        description="All features are project-based. Our pricing is fair comparing to
            other platforms and you can cancel any time. No credit card
            required."
      />
      <Content>
        <Pricing title="Let’s find the right plan for you." />
        <Faq
          title="Frequently Asked Questions"
          data={[
            {
              id: 1,
              title: "Do I need a credit card to sign up?",
              description: `No! You can use UpStamps right away without a credit card.
                    We offer a Sandbox mode to test the features and integrate
                    them into your project. When you're comfortable, upgrade to
                    a paid plan.`
            },
            {
              id: 2,
              title: "How is the payment being processed?",
              description: `We use Paddle to process your payment. It's the same payment
                    provider used in products such as Framer, Tower, MacPaw and
                    TablePlus. All payments are made via credit card, we do not
                    handle your credit card information directly.`
            },
            {
              id: 3,
              title: "How do I switch to a different plan?",
              description: `You can switch to a new plan at any time by going to the
                    Billing page in your account. Select the plan you’d like to
                    switch to and immediately start using new features.`
            }
          ]}
        />
      </Content>
    </Content>
  );
};

export default PricingPage;
