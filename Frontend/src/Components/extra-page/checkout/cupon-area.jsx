import CouponForm from '@components/forms/coupon-form';
import CouponInfoForm from '@components/forms/coupon-info-form';
import React, { useState } from 'react';


const CuponArea = () => {
    const [isActive, setActive] = useState("false");
    const [isActiveA, setActiveA] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    const handleToggleA = () => {
        setActiveA(!isActiveA);
    };

    
    return (
        <section className="coupon-area pt-100 pb-30">
            <div className="container container-small">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-md-6">
                        <div className="coupon-accordion">
                            {/* -- ACCORDION START -- */}
                            <h3>Returning customer? <span id="showlogin" onClick={handleToggle}>Click here to login</span></h3>
                            <div id="checkout-login" className={`coupon-content ${isActive ? "danger" : "d-block"}`}>
                                <div className="coupon-info">
                                    <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                                        sed est
                                        sit amet ipsum luctus.</p>
                                   <CouponForm/>
                                </div>
                            </div>
                            {/* -- ACCORDION END -- */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="coupon-accordion">
                            {/* -- ACCORDION START -- */}
                            <h3>Have a coupon? <span id="showcoupon" onClick={handleToggleA}>Click here to enter your code</span></h3>
                            <div id="checkout_coupon" className={`coupon-checkout-content ${isActiveA ? "danger" : "d-block"}`}>
                                <div className="coupon-info">
                                   <CouponInfoForm/>
                                </div>
                            </div>
                            {/* -- ACCORDION END -- */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CuponArea;