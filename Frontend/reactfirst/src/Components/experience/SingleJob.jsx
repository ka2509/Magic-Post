import React from 'react';

const SingleJob = ({ job }) => {
  return (
    <li className="timeline-item">
      <div className="timeline-info">
        <span>{job.date}</span>
      </div>
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <h5 className="timeline-title mb-md-3">
          {job.position} @
          {job.url ? (
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              {job.company}
            </a>
          ) : (
            <span>{job.company}</span>
          )}
        </h5>
        <ul data-aos="fade-left">
          {job.description.map((desc) => (
            <li key={desc.id}>{desc.description};</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default SingleJob;