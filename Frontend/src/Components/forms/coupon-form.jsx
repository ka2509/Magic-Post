import React from "react";

const CouponForm = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} action="#">
      <p className="form-row-first">
        <label>
          Username or email <span className="required">*</span>
        </label>
        <input type="text" />
      </p>
      <p className="form-row-last">
        <label>
          Password <span className="required">*</span>
        </label>
        <input type="text" />
      </p>
      <p className="form-row">
        <button className="fill-btn" type="submit">
          Login
        </button>
        <label>
          <input type="checkbox" />
          Remember me
        </label>
      </p>
    </form>
  );
};

export default CouponForm;
