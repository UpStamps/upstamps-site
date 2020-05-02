import React from "react";

const Details = () => {
  return (
    <section className="container mb-4">
      <div className="row justify-content-lg-between align-items-lg-center py-4 py-lg-5">
        <div className="col-lg-5 order-lg-2 mb-4 mb-lg-0">
          <h2 className="h3">Build an elegant website</h2>
          <p>
            Lots of designers will use fake copy or lorem impsum in their
            wireframes or prototypes to help them get a sense of the amount of
            copy required per page.
          </p>
          <a className="link-cta" href="#">
            Read more
          </a>
        </div>
        <div className="col-lg-6 order-lg-1">
          <img
            src="assets/img/course.png"
            className="img-fluid img-thumbnail"
            alt="Theme screenshot"
          />
        </div>
      </div>
      <div className="row justify-content-lg-between align-items-lg-center py-4 py-lg-5">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <h2 className="h3">Create, launch and grow</h2>
          <p>
            Lots of designers will use fake copy or lorem impsum in their
            wireframes or prototypes to help them get a sense of the amount of
            copy required per page.
          </p>
          <a className="link-cta" href="#">
            Read more
          </a>
        </div>
        <div className="col-lg-6">
          <img
            src="assets/img/event.jpg"
            className="img-fluid img-thumbnail"
            alt="Theme screenshot"
          />
        </div>
      </div>
    </section>
  );
};

export default Details;
