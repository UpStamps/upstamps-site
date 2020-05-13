import React from "react";

interface Props {
  title: string;
  description: string;
}

const Header = ({ title, description }: Props) => {
  return (
    <section className="container">
      <div className="row justify-content-center py-4 py-md-5 py-xl-6">
        <div className="col-lg-10 col-xl-8 text-center mb-xl-4">
          <h1 className="display-4 mb-4">{title}</h1>
          <p className="lead">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
