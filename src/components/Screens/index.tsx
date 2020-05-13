import React from "react";

interface FeatureData {
  id: number;
  icon: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}

interface Props {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  data: Array<FeatureData>;
}

const Screens = ({ title, description, image, data }: Props) => {
  return (
    <section className="container">
      <div className="row justify-content-center py-4 py-md-5 py-xl-6">
        <div className="col-lg-10 col-xl-8 text-center mb-xl-4">
          <h1 className="display-4 mb-4">{title}</h1>
          <p className="lead">{description}</p>

          <img className="img-fluid shadow" src={image.url} alt={image.alt} />
        </div>

        {data.map((feature: FeatureData) => {
          return (
            <div key={feature.id} className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
              <span className="material-icons tour-icon">{feature.icon}</span>
              <h3 className="mb-4">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>

              <img
                className="img-fluid"
                src={feature.image.url}
                alt={feature.image.alt}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Screens;
