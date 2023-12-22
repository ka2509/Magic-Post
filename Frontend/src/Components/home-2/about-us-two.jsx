import Link from 'next/link';
import React from 'react';
import about_img_2 from '@assets/img/about/about-3-1.png';
import about_img_3 from '@assets/img/about/about-page-1.jpg';
import Image from 'next/image';

const AboutUsTwo = () => {
    return (
        <section className="about__3 about__gray-bg p-relative pt-120 pb-60">
            <div className="container">
                <div className="row align-items-center wow fadeInU" data-wow-duration="1.5s"
                    data-wow-delay=".3s">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__3-img-wrapper p-relative mb-60">
                            <div className="about__3-top w-img">
                                <Image src={about_img_2} style={{ width: '100%', height: 'auto' }} alt={"About"} />
                            </div>
                            <div className="about__3-main w-img">
                                <Image src={about_img_3} style={{ width: '100%', height: 'auto' }} alt={"About"} />
                            </div>
                            <div className="about__3-text clip-box-sm">
                                <span><i className="far fa-trophy-alt"></i></span>
                                <h4 className="about__3-title">25 Years of experience</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__3-content mb-60">
                            <div className="section__title mb-30">
                                <span className="sub-title">about us</span>
                                <h2 className="title">A company involved in <br /> servicing, maintenance.</h2>
                            </div>
                            <div className="about__3-content-inner p-relative">
                                <div className="about__3-content-left">
                                    <p>From finance, retail, and travel, to social media,
                                        cybersecurity, adtech, and more, market leaders
                                        are leveraging web data to maintain their transt
                                        advantage. Discover how it can work for you.
                                    </p>
                                    <p>The Binance, retail, and travel, to social media,
                                        cybersecurity, adtech, and more...
                                    </p>
                                    <div className="about__3-content-btn mt-35">
                                        <Link href="/about-us" className="skew-btn">learn more</Link>
                                    </div>
                                </div>
                                <div className="about__3-content-right">
                                    <div className="about__3-shadow">
                                        <div className="about__3-content-num">
                                            <h2>20</h2>
                                            <h6>Project done</h6>
                                        </div>
                                    </div>
                                    <div className="about__3-shadow">
                                        <div className="about__3-content-num">
                                            <h2>31</h2>
                                            <h6>star ratings</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsTwo;