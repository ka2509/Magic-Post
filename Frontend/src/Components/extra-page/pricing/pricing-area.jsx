import React from 'react';
import PricingOne from './pricing-1';
import PricingTwo from './pricing-2';

const PricingArea = () => {

    return (
        <section className="pricing__area grey-bg pt-120 pb-85">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section__title mb-55 text-center ">
                            <span className="sub-title">Pricing Table</span>
                            <h2 className="title">choose your best plan</h2>
                        </div>
                        <div className="pricing-tab mb-75">
                            <ul className="nav nav-tabs justify-content-center" id="priceTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="monthly-tab" data-bs-toggle="tab"
                                        data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly"
                                        aria-selected="true">monthly</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly"
                                        type="button" role="tab" aria-controls="yearly" aria-selected="false">yearly</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="priceTabContent">
                    <PricingOne />
                    <PricingTwo />
                </div>
            </div>
        </section>
    );
};

export default PricingArea;