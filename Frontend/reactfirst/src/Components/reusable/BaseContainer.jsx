import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section className="p-3 p-lg-5">
      <div className="container">
        <div className="row">
          <h2 className="my-md-5 mb-3 text-center">{title}</h2>
          {children} {/* Render children content directly */}
        </div>
      </div>
    </section>
  );
};

export default Section;
