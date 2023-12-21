import React from 'react';
import { Link } from 'react-router-dom'; // Import for routing

const SingleProject = ({ project }) => {
  return (
    <Link
      to="/projects/single-project"
      className="col-12 col-lg-4 mb-3 mb-md-5"
      aria-label="Single Project"
    >
      <div
        className="card rounded-0 border-0 shadow-sm mb-lg-0"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="card-img-container position-relative">
          <img
            className="card-img-top rounded-0"
            src={require(`@/assets/images/${project.image}`)} // Dynamically import image
            alt={project.title}
          />
          <a
            className="card-img-overlay overlay-content text-start p-lg-4"
            href={project.url}
          >
            <h5 className="card-title font-weight-bold text-white">
              {project.title}
            </h5>
            <p className="card-text">{project.description}</p>
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title text-truncate text-center mb-0">
            <a className="text-link" href={project.url}>{project.title}</a>
          </h4>
        </div>
        <div className="text-center">
          <div className="tags mb-3 has-text-weight-semibold">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      </Link>
  );
};

export default SingleProject;