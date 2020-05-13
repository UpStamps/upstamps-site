import React from "react";

interface featureData {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface Props {
  data: Array<featureData>;
}

const Features = ({ data }: Props) => {
  return (
    <div className="container">
      <div className="row py-4 mb-lg-5">
        {data.map((feature: featureData) => {
          return (
            <div key={feature.id} className="col-md-4 mb-4">
              <div className="text-center px-lg-3">
                <span className="icon icon-primary icon-lg mb-3">
                  <span className="icon-inner material-icons">
                    {feature.icon}
                  </span>
                </span>
                <h2 className="h4">{feature.title}</h2>
                <p className="mb-md-0">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
