import React from 'react';

const SingleAward = ({ award }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={require(`@/assets/images/${award.image}`)}
              alt={award.title}
              className="img-fluid rounded-start"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5
                className="card-title"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor-placement="top-bottom"
              >
                {award.title}
              </h5>
              <p
                className="card-text"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="top-bottom"
              >
                {award.description}
              </p>
              <p
                className="card-text"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor-placement="top-bottom"
              >
                <small className="text-muted">{award.date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAward;