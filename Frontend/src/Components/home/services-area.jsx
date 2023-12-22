import React from 'react';
import Link from 'next/link';
import services_data from '@data/services-data';
import banner_overlay from '@assets/img/services/services-bg.png'

//swiper style
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/bundle';

const ServicesArea = () => {

    return (
        <section id="services__area-2" className="services__area-2 fix grey-bg-2 pt-120 pb-120" style={{ backgroundImage: `url(${banner_overlay.src})` }}>
            <div className="services__section-area wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="services__section">
                                <div className="section__title mb-95">
                                    <span className="sub-title">services</span>
                                    <h2 className="title">what we do</h2>
                                </div>
                                <div className="services-two-nav">
                                    <div className="services-button-prev"><i className="fas fa-long-arrow-left"></i></div>
                                    <div className="services-button-next"><i className="fas fa-long-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="services-two">
                                <div className="swiper-container services-two-active">
                                    <div className="swiper-wrapper">
                                        <Swiper
                                            modules={[Navigation]}
                                            slidesPerView={4}
                                            spaceBetween={20}
                                            loop={true}
                                            navigation={{
                                                nextEl: ".services-button-next",
                                                prevEl: ".services-button-prev",
                                            }}
                                            // Responsive breakpoints
                                            breakpoints={{
                                                1400: {
                                                    slidesPerView: 4,
                                                },
                                                1200: {
                                                    slidesPerView: 4,
                                                },
                                                992: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 10,
                                                },
                                                768: {
                                                    slidesPerView: 3,
                                                },
                                                576: {
                                                    slidesPerView: 3,
                                                },
                                                0: {
                                                    slidesPerView: 3,
                                                }
                                            }}
                                        >

                                            {
                                                services_data.slice(0, 6).map((item) => (
                                                    <SwiperSlide key={item.id}>
                                                        <div className="swiper-slide">
                                                            <div className="services__item text-center">
                                                                <div className="services__item-icon mb-35">
                                                                    <i className={item.icon}></i>
                                                                </div>
                                                                <div className="services__item-content">
                                                                    <Link href={`/services-details/${item.id}`}>
                                                                        <h3>{item.title}</h3>
                                                                    </Link>
                                                                    <p>{item.description.slice(0, 63)}</p>
                                                                </div>
                                                                <div className="services__item-shape">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
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

export default ServicesArea;