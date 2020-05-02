import React, { Fragment } from "react";

const Faq = () => {
  return (
    <Fragment>
      <section className="container">
        <h2 className="my-5 text-center">Frequently Asked Questions</h2>
        <div className="row justify-content-lg-center pb-5">
          <div className="col-lg-9">
            <div className="accordion" id="accordionQuestions">
              <div className="card mb-2 shadow">
                <div className="card-header" id="headingOne">
                  <h3 className="card-title font-weight-normal">
                    <a
                      className="collapsed"
                      role="button"
                      href="#collapseTwo"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Are there discounts for yearly plans?{" "}
                      <i
                        className="fas fa-angle-down float-right rotate-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </h3>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionQuestions"
                >
                  <div className="card-body">
                    <p>
                      Ut sit amet neque sed mauris elementum pellentesque. In
                      viverra sed justo a eleifend. Vestibulum a finibus nunc,
                      ut malesuada nisl. Duis dignissim ipsum ut quam dictum,
                      vel mollis orci sodales.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-2 shadow">
                <div className="card-header" id="headingTwo">
                  <h3 className="card-title font-weight-normal">
                    <a
                      className="collapsed"
                      role="button"
                      href="#collapseOne"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Do I need to enter my credit card details to sign up?{" "}
                      <i
                        className="fas fa-angle-down float-right rotate-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </h3>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionQuestions"
                >
                  <div className="card-body">
                    <p>
                      Sed tincidunt euismod augue sit amet finibus. Phasellus
                      ullamcorper ante quis eros sagittis, vel efficitur risus
                      porta.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-2 shadow">
                <div className="card-header" id="headingThree">
                  <h3 className="card-title font-weight-normal">
                    <a
                      className="collapsed"
                      role="button"
                      href="#collapseThree"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can I change my plan later on?{" "}
                      <i
                        className="fas fa-angle-down float-right rotate-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </h3>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionQuestions"
                >
                  <div className="card-body">
                    <p>
                      Quisque suscipit, enim ut porta vulputate, lacus sem
                      venenatis mauris, id convallis dui mauris et urna.
                      Pellentesque habitant morbi tristique senectus et netus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-2 shadow">
                <div className="card-header" id="headingFour">
                  <h3 className="card-title font-weight-normal">
                    <a
                      className="collapsed"
                      role="button"
                      href="#collapseFour"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Can I cancel my account at any time?{" "}
                      <i
                        className="fas fa-angle-down float-right rotate-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </h3>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionQuestions"
                >
                  <div className="card-body">
                    <p>
                      Sed vestibulum eu urna a condimentum. Nullam molestie
                      efficitur ex, eu tincidunt dui eleifend quis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-5">
        <p className="text-center">
          Still have questions? <a href="contact.html">Get in touch</a>
        </p>
      </div>
    </Fragment>
  );
};

export default Faq;
