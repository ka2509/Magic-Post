import React from "react";
import OrderSidebar from "./order-sidebar";
import CheckoutForm from "./checkout-form";
import { useState } from "react";
import NiceSelect from "@ui/niceSelect";

const CheckoutSection = () => {
  const [isActiveC, setActiveC] = useState("false");
  
  const handleToggleC = () => {
    setActiveC(!isActiveC);
  };

  const handleSubmit = (event) => {
    event.preventDefualt();
  };
  const selectHandler = (e) => {};

  return (
    <section className="checkout-area pb-70">
      <div className="container container-small">
        <form onSubmit={handleSubmit} action="#">
          <div className="row wow fadeInUp" data-wow-delay=".3s">
            <div className="col-lg-6">
              <div className="checkbox-form">
                <h3>Billing Details</h3>
                <CheckoutForm />
                <div className="different-address">
                  <div className="ship-different-title">
                    <label htmlFor="ship-box">
                      Ship to a different address?
                    </label>
                    <input onClick={handleToggleC} id="ship-box" type="checkbox" />
                  </div>
                  <div
                    id="ship-box-info"
                    className={`${isActiveC ? "danger" : "d-block"}`}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="country-select">
                          <label>
                            Country <span className="required">*</span>
                          </label>
                          <NiceSelect
                            options={[
                              { value: "volvo", text: "Bangladesh" },
                              { value: "saab", text: "Algeria" },
                              { value: "mercedes", text: "Afghanistan" },
                              { value: "audi", text: "Ghana" },
                              { value: "audi2", text: "Albania" },
                              { value: "audi3", text: "Bahrain" },
                              { value: "audi4", text: "Colombia" },
                              { value: "audi5", text: "Dominican Republic" },
                            ]}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name="Bangladesh"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            First Name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Last Name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Company Name</label>
                          <input type="text" placeholder="Company Name" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Address <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Street address" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <input
                            type="text"
                            placeholder="Apartment, suite, unit etc. (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Town / City <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Town / City" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            State / County <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="State / County" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input type="email" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Phone" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-notes">
                    <div className="checkout-form-list">
                      <label>Order Notes</label>
                      <textarea
                        id="checkout-mess"
                        cols="30"
                        rows="10"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <OrderSidebar />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutSection;
