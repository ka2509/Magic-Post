import pricingData from '@data/pricing-data';
import Link from 'next/link';
import React from 'react';

const PricingOne = () => {
    return (
        <div className="tab-pane fade active show" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
            <div className="row">
                {
                    pricingData.slice(0,4).map((item) => (
                        <div className="col-xl-3 col-md-6" key={item.id}>
                            <div className={item.active}>
                                <div className="pricing__header">
                                    <div className={item.activeStyle && item.activeStyle}>
                                        <span>{item.pricingBadge && item.pricingBadge}</span>
                                    </div>
                                    <h4 className="pricing__package-name">{item.packageName}</h4>
                                    <span className="pricing__package-price"> <span className="pricing__package-currency">$</span> {item.packagePrice}
                                        <span className="pricing__package-period">{item.packagePeriod}</span> </span>
                                </div>
                                <div className="pricing__content">
                                    <div className="pricing__features-list">
                                        <ul>
                                            <li>{item.featuresList}</li>
                                            <li>{item.featuresListTwo}</li>
                                            <li>{item.featuresListThere}</li>
                                            <li>{item.featuresListFour}</li>
                                            <li>{item.featuresListFive}</li>
                                            <li>{item.featuresListSix}</li>
                                        </ul>
                                    </div>
                                    <div className="pricing__btn lh-1">
                                        <Link href="/contact" className="fill-btn clip-btn">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PricingOne;