import React from 'react';
import Image from 'next/image';
import awardsData from '@data/award-data';

const AwardsSection = () => {
    
    return (
        <section className="dp-awards-area pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-md-8">
                        <div className="section__title mb-55 text-center">
                            <span className="sub-title">certificate</span>
                            <h2 className="title">see our achievement</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".5s">
                    {
                        awardsData.map((item) => (
                            <div className="col-xl-4 col-lg-6" key={item.id}>
                                <div className="dp-awards-wrapper mb-30">
                                    <div className="dp-award-thumb">
                                        <Image src={item.Image} style={{ width: "100%", height: "auto" }} alt="certificate-image" />
                                    </div>
                                    <div className="dp-awards-content">
                                        <h3 className="dp-awards-titel">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;