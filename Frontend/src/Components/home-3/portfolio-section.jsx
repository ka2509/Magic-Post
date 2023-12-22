import Link from 'next/link';
import React from 'react';
import PortfolioData from '@data/portfolio-data';

//swiper style
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/bundle';


const PortfolioSection = () => {

    return (
        <>
            <section className="dp-gallery-area-03 pt-120 pb-120 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-12">
                            <div className="section__title gallery-section-title mb-55 text-center">
                                <span className="sub-title">explore recent works</span>
                                <h2 className="title">Managing Logistics For {`World’s`} Best Companies.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dp-gallery-slider-03 p-relative">
                    <div className="dp-gallery-active-03">
                        <div>
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                spaceBetween={15}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    pauseOnMouseEnter: true,
                                }}
                                navigation={{
                                    nextEl: ".dp-gallery-button-next-03",
                                    prevEl: ".dp-gallery-button-prev-03",
                                }}

                                breakpoints={{
                                    1600: {
                                        slidesPerView: 4,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    }
                                }
                                }
                            >
                                {
                                    PortfolioData.slice(0, 6).map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="dp-single-gallery-03" >
                                                <div className="dp-single-gallery-thumb-03" style={{ backgroundImage: `url(${item.image.src})` }}></div>
                                                <div className="dp-gallery-content-03">
                                                    <h3 className="dp-gallery-title-03">
                                                        <Link href={`/portfolio-details/${item.id}`}>{item.title}</Link>
                                                    </h3>
                                                    <div className="dp-gallery-tag-03">
                                                        <span>{item.subTitle}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className="dp-gallery-nav-03 d-none d-md-block">
                        <button type="button" className="dp-gallery-button-prev-03"><i className="far fa-arrow-left"></i></button>
                        <button type="button" className="dp-gallery-button-next-03"><i className="far fa-arrow-right"></i></button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSection;