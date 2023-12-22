import React from "react";

const CouponInfoForm = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
    <p className="checkout-coupon">
        <input type="text" placeholder="Coupon Code" />
        <button className="fill-btn" type="submit">Apply Coupon</button>
    </p>
</form>
  );
};

export default CouponInfoForm;
