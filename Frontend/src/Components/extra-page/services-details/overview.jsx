import React from 'react';
import FaqSection from './faq';
import Image from 'next/image';
import service_img from '@assets/img/services/services-details-img.jpg';
import service_img_2 from '@assets/img/services/services-details-img-2.jpg';

const Overview = ({ item }) => {
    return (
        <div className="services__details-wrapper mb-60">
            <div className="services__details-img mb-35 m-img">
                <Image src={service_img} style={{ width: "100%", height: "100%" }} alt="services" />
            </div>
            <div className="service__details-content mb-25">
                <div className="section__title mb-20">
                    <h3 className="title-sm">{item?.title && item?.title}</h3>
                </div>
                <p className="content-para">These are inbound logistics, outbound logistics, and reverse logistics.
                    The information
                    about
                    these three
                    supply chain directions is essential to know, especially to people inclined in the
                    logistics
                    industry.
                </p>
                <p className="mb-25">Logistics is the overseeing of both the inward and outward flow of goods from
                    the
                    manufacturing point
                    to the end user or point of use. The movement of these goods is known as transportation.
                    While some
                    use these terms interchangeably, they are two very unique aspects of the supply chain.
                    {`Here’s`} what you
                    need to know about logistics vs. transportation.
                </p>
                <div className="row align-items-center overview-list services-overview-space mb-30">
                    <div className="col-sm-6">
                        <div className="overview-list-img w-img mb-25">
                            <Image src={service_img_2} style={{ width: "100%", height: "100%" }} alt="services" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <ul className="mb-25">
                            <li>Integrated Shipping</li>
                            <li>Logistics Services</li>
                            <li>Product Distribution</li>
                            <li>Product Sustainability</li>
                            <li>Market leaders</li>
                            <li>Maintain their transt</li>
                        </ul>
                    </div>
                </div>
                <FaqSection />
            </div>
        </div>
    );
};

export default Overview;