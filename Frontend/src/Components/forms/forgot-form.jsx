import Email from "@svg/email";
import React from "react";

const ForgotForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input type="email" placeholder="Email" />
            <span><Email /></span>
          </div>
        </div>
      </div>
      <div className="login__btn text-center">
        <button type="submit" className="fill-btn clip-btn">
        Send Request
        </button>
      </div>
    </form>
  );
};

export default ForgotForm;
