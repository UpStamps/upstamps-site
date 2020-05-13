import React from "react";
import { urls } from "../../services/constants";

interface Props {
  title: string;
}

interface PlanData {
  id: number;
  name: string;
  currency: string;
  amount: number;
  type: string;
  action: string;
  popular: boolean;
  features: [string];
}

const data = [
  {
    id: 1,
    name: "Start",
    currency: "$",
    amount: 9,
    type: "per month",
    action: "Choose Plan",
    popular: false,
    features: [
      "2 Projects",
      "25 Feature Flag",
      "5 Remote Flags",
      "2 Environments",
      "Unlimited Requests",
      "Rest API Access",
      "SDKs Access",
      "Email Support"
    ]
  },
  {
    id: 2,
    name: "Grow",
    currency: "$",
    amount: 29,
    type: "per month",
    action: "Choose Plan",
    popular: true,
    features: [
      "10 Projects",
      "Unlimited Feature Flags",
      "25 Remote Flags",
      "5 A/B Tests",
      "5 Environments",
      "5 Segments",
      "100 Users",
      "Unlimited Requests"
    ]
  },
  {
    id: 3,
    name: "Scale",
    currency: "$",
    amount: 79,
    type: "per month",
    action: "Choose Plan",
    popular: false,
    features: [
      "Unlimited Projects",
      "Unlimited Feature Flags",
      "Unlimited Remote Flags",
      "100 A/B Tests",
      "10 Environments",
      "100 Segments",
      "Unlimited Users",
      "Unlimited Requests"
    ]
  }
];

const Pricing = ({ title }: Props) => {
  return (
    <section className="container">
      <h2 className="text-center mb-4">{title}</h2>
      <div className="row py-5">
        {data.map((plan: PlanData) => {
          return (
            <div key={plan.id} className="col-lg-4">
              <div
                className={`card card-price ${
                  plan.popular ? "card-featured" : ""
                }  mb-4`}
              >
                <div className="card-header">
                  <h3 className="h4 font-weight-normal">{plan.name}</h3>
                  <div className="d-flex justify-content-center">
                    <span className="h4 font-weight-normal mt-1">
                      {plan.currency}
                    </span>
                    <span className="display-4 font-weight-bold">
                      {plan.amount}
                    </span>
                  </div>
                  <span className="d-block text-muted">{plan.type}</span>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled text-secondary mb-4">
                    {plan.features.map((feature: string, index: number) => (
                      <li key={index} className="py-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${
                      plan.popular ? "btn-primary" : "btn-outline-primary"
                    } mb-3`}
                    href={urls.billing}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.action}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
