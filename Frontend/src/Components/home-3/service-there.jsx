import servicesData from '@data/services-data';
import Link from 'next/link';
import React from 'react';

const ServiceThere = () => {
    return (
        <section className="services__area pb-60">
            <div className="container">
                <div className="services-one">
                    <div className="services__box services__box--space wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="row">
                            {
                                servicesData.slice(0, 4).map((item) => (
                                    <div className="col-lg-3 col-xl-3 col-md-6" key={item.id}>
                                        <div className="services__item text-center">
                                            <div className="services__item-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                            <div className="services__item-content">
                                                <h3><Link href={`/services-details/${item.id}`}>{item.title}<br /> {item.title_two}</Link></h3>
                                                <p>
                                                    {item.description.slice(0, 63)}
                                                </p>
                                                <div className="services__item-btn">
                                                    <Link href={`/services-details/${item.id}`}>service details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceThere;