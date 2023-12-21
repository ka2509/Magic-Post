import React from 'react';

const ImageComponent = ({ src, alt }) => {
  return (
    <div className="col-10 col-sm-7 col-lg-7">
      <img
        alt={alt}
        className="d-block mx-lg-auto img-fluid"
        loading="lazy"
        src={require(`@/assets/images/${src}`)}
      />
    </div>
  );
};

export default ImageComponent;