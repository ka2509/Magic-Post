import React from 'react';

const HeroText = ({ delay, children }) => {
  // Handle the "delay" prop if needed (e.g., for animations or delayed rendering)
  const handleDelay = () => {
    // Implement logic based on the "delay" prop
  };

  return (
    <div className="col-lg-5">
      {handleDelay()} {/* Apply delay if necessary */}
      <h1 className="display-5 fw-bold lh-1 mb-4">
        {children.welcome} {/* Access content from "welcome" slot */}
      </h1>
      <p className="lead mb-4">
        {children.default} {/* Access default slot content */}
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        {children.buttons} {/* Access content from "buttons" slot */}
      </div>
    </div>
  );
};

export default HeroText;