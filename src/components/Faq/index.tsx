import React from "react";

interface QuestionData {
  id: number;
  title: string;
  description: string;
}

interface Props {
  title: string;
  data: Array<QuestionData>;
}

const Faq = ({ title, data }: Props) => {
  return (
    <section className="container">
      <h2 className="my-5 text-center">{title}</h2>
      <div className="row justify-content-lg-center pb-5">
        <div className="col-lg-9">
          <div className="accordion">
            {data.map((question: QuestionData) => {
              return (
                <div key={question.id} className="card-faq mb-2">
                  <div className="card-header" id="headingOne">
                    <h3 className="card-title font-weight-normal">
                      {question.title}
                    </h3>
                  </div>
                  <div>
                    <div className="card-body">
                      <p>{question.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
