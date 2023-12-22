import React from 'react';
import approch_img from '@assets/img/approach/approch-img.jpg';
import Image from 'next/image';

const ApproachArea = () => {
    return (
        <section className="approach__area fix grey-bg-4">
            <div className="approach__img m-img">
                <Image src={approch_img} style={{ width: "100%", height: "auto" }} alt="approach" />
            </div>
            <div className="container">
                <div className="row g-0 justify-content-end">
                    <div className="col-lg-6">
                        <div className="approach__content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <div className="section__title mb-35">
                                <span className="sub-title">approach</span>
                                <h2 className="title">100% Satisfaction
                                    Guarantee
                                </h2>
                            </div>
                            <div className="approach__text">
                                <p>Delport Group is a representative logistics operator providing full range of service
                                    in
                                    the sphere of customs
                                    clearance
                                    transportation worldwide for any cargo.
                                </p>
                                <ul>
                                    <li><i className="fal fa-check-circle"></i>Commercial expertise</li>
                                    <li><i className="fal fa-check-circle"></i>Logistical expertise</li>
                                    <li><i className="fal fa-check-circle"></i>Sustainability goals</li>
                                    <li><i className="fal fa-check-circle"></i>Cost Optimization</li>
                                    <li><i className="fal fa-check-circle"></i>Reduce Transit Time</li>
                                    <li><i className="fal fa-check-circle"></i>Managing Logistics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachArea;