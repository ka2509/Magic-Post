import PortfolioData from '@data/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PortfolioArea = () => {

    return (
        <section className="portfolio__area pt-115 pb-60">
            <div className="container wow fadeInUp" data-wow-duration="1.5s"
                data-wow-delay=".3s">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="section__title gallery-section-title mb-55">
                            <span className="sub-title">Our recent work</span>
                            <h2 className="title">Work showcase</h2>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="dp-portfolio-menu dp-filter-button-group mb-55">
                            <nav>
                                <div className="nav" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">View All</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-forwarding" aria-selected="false">Freight Forwarding</button>
                                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Transport Management</button>
                                    <button className="nav-link" id="nav-wordpress-tab" data-bs-toggle="tab" data-bs-target="#nav-wordpress" type="button" role="tab" aria-controls="nav-wordpress" aria-selected="false">Materials</button>
                                    <button className="nav-link" id="nav-webdesign-tab" data-bs-toggle="tab" data-bs-target="#nav-webdesign" type="button" role="tab" aria-controls="nav-webdesign" aria-selected="false">Warehouse</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                        <div className="row grid mb-30">
                            {
                                PortfolioData.slice(0, 6).map((item) => (
                                    <div className={item.daynamic_class} key={item.id}>
                                        <div className="portfolio__item mb-30">
                                            <div className="dp-single-gallery">
                                                <div className="dp-gallery-thumb">
                                                    <Image src={item.image} alt='gallery-image' style={{ width: '100%', height: 'auto' }} />
                                                </div>
                                                <div className="dp-gallery-content">
                                                    <div className="dp-gallery-content-text">
                                                        <h4 className="dp-gallery-title"><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link></h4>
                                                        <span>{item.subTitle}</span>
                                                    </div>
                                                    <div className="dp-gallery-link">
                                                        <Link href={`/portfolio-details/${item.id}`}><i className="fal fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        <div className="row grid mb-30">
                            {
                                PortfolioData.slice(0, 6).map((item) => (
                                    item.forwarding && <div className={item.daynamic_class} key={item.id}>
                                        <div className="portfolio__item mb-30">
                                            <div className="dp-single-gallery">
                                                <div className="dp-gallery-thumb">
                                                    <Image src={item.image} alt='gallery-image' style={{ width: '100%', height: 'auto' }} />
                                                </div>
                                                <div className="dp-gallery-content">
                                                    <div className="dp-gallery-content-text">
                                                        <h4 className="dp-gallery-title"><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link></h4>
                                                        <span>{item.subTitle}</span>
                                                    </div>
                                                    <div className="dp-gallery-link">
                                                        <Link href={`/portfolio-details/${item.id}`}><i className="fal fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                        <div className="row grid mb-30">
                            {
                                PortfolioData.slice(0, 6).map((item) => (
                                    item.management && <div className={item.daynamic_class} key={item.id}>
                                        <div className="portfolio__item mb-30">
                                            <div className="dp-single-gallery">
                                                <div className="dp-gallery-thumb">
                                                    <Image src={item.image} alt='gallery-image' style={{ width: '100%', height: 'auto' }} />
                                                </div>
                                                <div className="dp-gallery-content">
                                                    <div className="dp-gallery-content-text">
                                                        <h4 className="dp-gallery-title"><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link></h4>
                                                        <span>{item.subTitle}</span>
                                                    </div>
                                                    <div className="dp-gallery-link">
                                                        <Link href={`/portfolio-details/${item.id}`}><i className="fal fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-wordpress" role="tabpanel" aria-labelledby="nav-wordpress-tab" tabIndex="0">
                        <div className="row grid mb-30">
                            {
                                PortfolioData.slice(0, 6).map((item) => (
                                    item.materials && <div className={item.daynamic_class} key={item.id}>
                                        <div className="portfolio__item mb-30">
                                            <div className="dp-single-gallery">
                                                <div className="dp-gallery-thumb">
                                                    <Image src={item.image} alt='gallery-image' style={{ width: '100%', height: 'auto' }} />
                                                </div>
                                                <div className="dp-gallery-content">
                                                    <div className="dp-gallery-content-text">
                                                        <h4 className="dp-gallery-title"><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link></h4>
                                                        <span>{item.subTitle}</span>
                                                    </div>
                                                    <div className="dp-gallery-link">
                                                        <Link href={`/portfolio-details/${item.id}`}><i className="fal fa-long-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-webdesign" role="tabpanel" aria-labelledby="nav-webdesign-tab" tabIndex="0">
                        <div className="row grid mb-30">
                            {
                                PortfolioData.slice(0, 6).map((item) => (
                                    item.warhouse && <div className={item.daynamic_class} key={item.id}>
                                        <div className="portfolio__item mb-30">
                                            <div className="dp-single-gallery">
                                                <div className="dp-gallery-thumb">
                                                    <Image src={item.image} alt='gallery-image' style={{ width: '100%', height: 'auto' }} />
                                                </div>
                                                <div className="dp-gallery-content">
                                                    <div className="dp-gallery-content-text">
                                                        <h4 className="dp-gallery-title"><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link></h4>
                                                        <span>{item.subTitle}</span>
                                                    </div>
                                                    <div className="dp-gallery-link">
                                                        <Link href={`/portfolio-details/${item.id}`}><i className="fal fa-long-arrow-right"></i></Link>
                                                    </div>
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

export default PortfolioArea;