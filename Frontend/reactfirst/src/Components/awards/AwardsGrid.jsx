import React from 'react';
import SingleAward from './SingleAward';
import BaseContainer from '../reusable/BaseContainer';

const AwardsGrid = ({ awards }) => {
  return (
    <BaseContainer title="THÀNH TÍCH">
      {awards.map((award) => (
        <SingleAward key={award.id} award={award} />
      ))}
    </BaseContainer>
  );
};

export default AwardsGrid;