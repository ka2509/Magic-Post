import React from 'react';

const SingleSkill = ({ skill }) => {
  return (
    <div className="col-sm-12 col-md-4 mb-3">
      <div className="text-center">
        <img
          className="mb-3"
          src={require(`@/assets/images/${skill.image}`)} // Assuming image loading
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-anchor-placement="top-bottom"
        />
        <h4
          className="mb-3"
          data-aos="fade-up"
          data-aos-delay={600}
          data-aos-anchor-placement="top-bottom"
        >
          {skill.title}
        </h4>
        <div
          className="tags mb-3 has-text-weight-semibold"
          data-aos="fade-up"
          data-aos-delay={700}
          data-aos-anchor-placement="top-bottom"
        >
          {skill.languages.map((language) => (
            <span
              key={language.id}
              className={`tag ${language.css}`}
            >
              {language.title}
            </span>
          ))}
        </div>
        <div>{skill.description}</div>
      </div>
    </div>
  );
};

export default SingleSkill;
