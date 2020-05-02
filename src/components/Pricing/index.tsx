import React from "react";
import { urls } from "../../services/constants";

const Pricing = () => {
  return (
    <section className="container">
      <h2 className="text-center mb-4">Let’s find the right plan for you.</h2>

      <div className="row py-5">
        <div className="col-lg-4">
          <div className="card card-price  mb-4">
            <div className="card-header">
              <h3 className="h4 font-weight-normal">Start</h3>
              <div className="d-flex justify-content-center">
                <span className="h4 font-weight-normal mt-1">$</span>
                <span className="display-4 font-weight-bold">9</span>
              </div>
              <span className="d-block text-muted">per month</span>
            </div>
            <div className="card-body">
              <ul className="list-unstyled text-secondary mb-4">
                <li className="py-2">2 Projects</li>
                <li className="py-2">25 Feature Flags</li>
                <li className="py-2">5 Remote Flags</li>
                <li className="py-2">2 Environments</li>
                <li className="py-2">Unlimited Requests</li>
                <li className="py-2">Rest API Access</li>
                <li className="py-2">SDKs Access</li>
                <li className="py-2">Email Support</li>
              </ul>
              <a
                className="btn btn-outline-primary  mb-3"
                href={urls.billing}
                target="_blank"
                rel="noopener noreferrer"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-price card-featured  mb-4">
            <div className="card-header">
              <h3 className="h4 font-weight-normal">Grow</h3>
              <div className="d-flex justify-content-center">
                <span className="h4 font-weight-normal mt-1">$</span>
                <span className="display-4 font-weight-bold">29</span>
              </div>
              <span className="text-muted">per month</span>
            </div>
            <div className="card-body">
              <ul className="list-unstyled text-secondary mb-4">
                <li className="py-2">10 Projects</li>
                <li className="py-2">Unlimited Feature Flags</li>
                <li className="py-2">25 Remote Flags</li>
                <li className="py-2">5 A/B Tests</li>
                <li className="py-2">5 Environments</li>
                <li className="py-2">5 Segments</li>
                <li className="py-2">100 Users</li>
                <li className="py-2">Unlimited Requests</li>
              </ul>
              <a
                className="btn btn-primary  mb-3"
                href={urls.billing}
                target="_blank"
                rel="noopener noreferrer"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card card-price  mb-4">
            <div className="card-header">
              <h3 className="h4 font-weight-normal">Scale</h3>
              <div className="d-flex justify-content-center">
                <span className="h4 font-weight-normal mt-1">$</span>
                <span className="display-4 font-weight-bold">79</span>
              </div>
              <span className="text-muted">per month</span>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-4">
                <li className="py-2">Unlimited Projects</li>
                <li className="py-2">Unlimited Feature Flags</li>
                <li className="py-2">Unlimited Remote Flags</li>
                <li className="py-2">100 A/B Tests</li>
                <li className="py-2">10 Environments</li>
                <li className="py-2">100 Segments</li>
                <li className="py-2">Unlimited Users</li>
                <li className="py-2">Unlimited Requests</li>
              </ul>
              <a
                className="btn btn-outline-primary  mb-3"
                href={urls.billing}
                target="_blank"
                rel="noopener noreferrer"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
