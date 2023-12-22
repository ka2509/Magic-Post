import Link from 'next/link';
import React from 'react';
import servicesData from '@data/services-data';

const ServicesAreaTwo = () => {
    return (
        <section className="services__3 grey-bg-4 pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="col-md-8">
                        <div className="section__title mb-55 text-center">
                            <span className="sub-title">services</span>
                            <h2 className="title">what we do</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                    {
                        servicesData.slice(6, 12).map((item) => (
                            <div className="col-xl-4 col-md-6" key={item.id}>
                                <div className="services__3-item mb-30">
                                    <div className="services__3-item-num">
                                        <h3>{item.number}</h3>
                                    </div>
                                    <div className="services__3-item-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3 className="services__3-item-title"><Link href={`/services-details/${item.id}`}> {item.title}</Link></h3>
                                    <p className="services__3-item-text">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ServicesAreaTwo;