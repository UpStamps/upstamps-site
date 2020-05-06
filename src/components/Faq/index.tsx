import React from "react";

const Faq = () => {
  return (
    <section className="container">
      <h2 className="my-5 text-center">Frequently Asked Questions</h2>
      <div className="row justify-content-lg-center pb-5">
        <div className="col-lg-9">
          <div className="accordion" id="accordionQuestions">
            <div className="card-faq mb-2">
              <div className="card-header" id="headingOne">
                <h3 className="card-title font-weight-normal">
                  Do I need a credit card to sign up?
                </h3>
              </div>
              <div>
                <div className="card-body">
                  <p>
                    No! You can use UpStamps right away without a credit card.
                    We offer a Sandbox mode to test the features and integrate
                    them into your project. When you're comfortable, upgrade to
                    a paid plan.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-faq mb-2">
              <div className="card-header" id="headingTwo">
                <h3 className="card-title font-weight-normal">
                  How is the payment being processed?
                </h3>
              </div>
              <div>
                <div className="card-body">
                  <p>
                    We use Paddle to process your payment. It's the same payment
                    provider used in products such as Framer, Tower, MacPaw and
                    TablePlus. All payments are made via credit card, we do not
                    handle your credit card information directly.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-faq mb-2">
              <div className="card-header" id="headingThree">
                <h3 className="card-title font-weight-normal">
                  How do I switch to a different plan?
                </h3>
              </div>
              <div>
                <div className="card-body">
                  <p>
                    You can switch to a new plan at any time by going to the
                    Billing page in your account. Select the plan you’d like to
                    switch to and immediately start using new features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
