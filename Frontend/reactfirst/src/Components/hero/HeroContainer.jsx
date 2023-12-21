import React from 'react';

const HeroContainer = ({ delay, children }) => {
  // Handle the "delay" prop if needed (e.g., for animations or delayed rendering)
  const handleDelay = () => {
    // Implement logic based on the "delay" prop
  };

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">
      <div className="container py-5">
        <div className="row flex-lg-row-reverse align-items-center g-md-5 py-5">
          {handleDelay()} {/* Apply delay if necessary */}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
