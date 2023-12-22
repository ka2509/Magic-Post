import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import PortfolioData from '@data/portfolio-data';

const PortfolioSection = () => {
    return (
        <section className="portfolio__area pt-115 pb-60">
            <div className="container wow slideInUp">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="portfolio-menu filter-button-group mb-55">
                            <nav>
                                <div className="nav justify-content-center" id="nav-tab" role="tablist">
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
                                PortfolioData.slice(6, 15).map((item) => (
                                    <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                                        <div className="portfolio__item mb-30">
                                            <div className="portfolio__img">
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="portfolio" />
                                                <div className="portfolio__content">
                                                    <div className="portfolio__content-thumb">
                                                        <Image src={item.icon} style={{ width: "100%", height: "auto" }} alt="portfolio Image" />
                                                    </div>
                                                    <div className="portfolio__content-title">
                                                        <h5><Link href={`/portfolio-details/${item.id}`}>{item.subTitle}</Link></h5>
                                                        <h2><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link></h2>
                                                    </div>
                                                    <p>{item.description}</p>
                                                    <div className="portfolio__content-data">
                                                        <span><i className={item.userIcon}></i> <Link href="/team">{item.authorName}</Link></span>
                                                        <span><i className={item.dateIcon}></i> <Link href="#">{item.date}</Link></span>
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
                                PortfolioData.slice(8, 15).map((item) => (
                                    item.forwarding && <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                                        <div className="portfolio__item mb-30">
                                            <div className="portfolio__img">
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="portfolio" />
                                                <div className="portfolio__content">
                                                    <div className="portfolio__content-thumb">
                                                        <Image src={item.icon} style={{ width: "100%", height: "auto" }} alt="portfolio Image" />
                                                    </div>
                                                    <div className="portfolio__content-title">
                                                        <h5><Link href={`/portfolio-details/${item.id}`}>{item.subTitle}</Link></h5>
                                                        <h2><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link></h2>
                                                    </div>
                                                    <p>{item.description}</p>
                                                    <div className="portfolio__content-data">
                                                        <span><i className={item.userIcon}></i> <Link href="/team">{item.authorName}</Link></span>
                                                        <span><i className={item.dateIcon}></i> <Link href="#">{item.date}</Link></span>
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
                                PortfolioData.slice(10, 15).map((item) => (
                                    item.management && <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                                        <div className="portfolio__item mb-30">
                                            <div className="portfolio__img">
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="portfolio" />
                                                <div className="portfolio__content">
                                                    <div className="portfolio__content-thumb">
                                                        <Image src={item.icon} style={{ width: "100%", height: "auto" }} alt="portfolio Image" />
                                                    </div>
                                                    <div className="portfolio__content-title">
                                                        <h5><Link href={`/portfolio-details/${item.id}`}>{item.subTitle}</Link></h5>
                                                        <h2><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link></h2>
                                                    </div>
                                                    <p>{item.description}</p>
                                                    <div className="portfolio__content-data">
                                                        <span><i className={item.userIcon}></i> <Link href="/team">{item.authorName}</Link></span>
                                                        <span><i className={item.dateIcon}></i> <Link href="#">{item.date}</Link></span>
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
                                PortfolioData.slice(11, 15).map((item) => (
                                    item.materials && <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                                        <div className="portfolio__item mb-30">
                                            <div className="portfolio__img">
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="portfolio" />
                                                <div className="portfolio__content">
                                                    <div className="portfolio__content-thumb">
                                                        <Image src={item.icon} style={{ width: "100%", height: "auto" }} alt="portfolio Image" />
                                                    </div>
                                                    <div className="portfolio__content-title">
                                                        <h5><Link href={`/portfolio-details/${item.id}`}>{item.subTitle}</Link></h5>
                                                        <h2><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link></h2>
                                                    </div>
                                                    <p>{item.description}</p>
                                                    <div className="portfolio__content-data">
                                                        <span><i className={item.userIcon}></i> <Link href="/team">{item.authorName}</Link></span>
                                                        <span><i className={item.dateIcon}></i> <Link href="#">{item.date}</Link></span>
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
                                PortfolioData.slice(9, 14).map((item) => (
                                    item.warhouse && <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                                        <div className="portfolio__item mb-30">
                                            <div className="portfolio__img">
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="portfolio" />
                                                <div className="portfolio__content">
                                                    <div className="portfolio__content-thumb">
                                                        <Image src={item.icon} style={{ width: "100%", height: "auto" }} alt="portfolio Image" />
                                                    </div>
                                                    <div className="portfolio__content-title">
                                                        <h5><Link href={`/portfolio-details/${item.id}`}>{item.subTitle}</Link></h5>
                                                        <h2><Link href={`/portfolio-details/${item.id}`}>{item.title}</Link></h2>
                                                    </div>
                                                    <p>{item.description}</p>
                                                    <div className="portfolio__content-data">
                                                        <span><i className={item.userIcon}></i> <Link href="/team">{item.authorName}</Link></span>
                                                        <span><i className={item.dateIcon}></i> <Link href="#">{item.date}</Link></span>
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

export default PortfolioSection;