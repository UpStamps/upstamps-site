import React from "react";

const Pricing = () => {
  return (
    <section className="container">
      <h2 className="text-center mb-4">Choose the plan that works for you</h2>

      <div className="row py-5">
        <div className="col-lg-4">
          <div className="card card-price shadow-lg mb-4">
            <div className="card-header">
              <h3 className="h4 font-weight-normal">Basic</h3>
              <div className="d-flex justify-content-center">
                <span className="h4 font-weight-normal mt-1">$</span>
                <span className="display-4 font-weight-bold">0</span>
              </div>
              <span className="d-block text-muted">forever</span>
            </div>
            <div className="card-body">
              <ul className="list-unstyled text-secondary mb-4">
                <li className="py-2">5 downloads / month</li>
                <li className="py-2">Email support</li>
                <li className="py-2">No credit card required</li>
                <li className="py-2">Easy cancellation</li>
              </ul>
              <a className="btn btn-outline-primary rounded-pill mb-3" href="#">
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-price card-featured shadow-lg mb-4">
            <div className="card-header">
              <h3 className="h4 font-weight-normal">Standard</h3>
              <div className="d-flex justify-content-center">
                <span className="h4 font-weight-normal mt-1">$</span>
                <span className="display-4 font-weight-bold">5</span>
              </div>
              <span className="text-muted">per month</span>
            </div>
            <div className="card-body">
              <ul className="list-unstyled text-secondary mb-4">
                <li className="py-2">15 downloads / month</li>
                <li className="py-2">Email support</li>
                <li className="py-2">No credit card required</li>
                <li className="py-2">Easy cancellation</li>
              </ul>
              <a className="btn btn-primary rounded-pill mb-3" href="#">
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-price shadow-lg mb-4">
            <div className="card-header">
              <h3 className="h4 font-weight-normal">Unlimited</h3>
              <div className="d-flex justify-content-center">
                <span className="h4 font-weight-normal mt-1">$</span>
                <span className="display-4 font-weight-bold">10</span>
              </div>
              <span className="text-muted">per month</span>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-4">
                <li className="py-2 text-secondary">Unlimited downloads</li>
                <li className="py-2 text-secondary">Online support</li>
                <li className="py-2 text-secondary">Easy payment</li>
                <li className="py-2 text-secondary">Easy cancellation</li>
              </ul>
              <a className="btn btn-outline-primary rounded-pill mb-3" href="#">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
