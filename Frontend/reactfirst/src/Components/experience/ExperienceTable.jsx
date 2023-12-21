import React from 'react';
import SingleJob from './SingleJob';
import BaseContainer from '../reusable/BaseContainer';

const ExperienceTable = ({ experience }) => {
  return (
    <BaseContainer title="Giới thiệu">
      <div className="col-md-12 pt-3">
        <ul className="timeline timeline-split">
          {experience.map((job) => (
            <SingleJob key={job.id} job={job} />
          ))}
        </ul>
      </div>
    </BaseContainer>
  );
};

export default ExperienceTable;