import React from 'react';
import uk_flag from '@assets/img/contact/uk-flag.png';
import usa_flag from '@assets/img/contact/usa-flag.png';
import russia_flag from '@assets/img/contact/russia-flag.png';
import canada_flag from '@assets/img/contact/canada-flag.png';
import india_flag from '@assets/img/contact/india-flag.jpg';
import Image from 'next/image';
import Link from 'next/link';

const ContactInfoArea = () => {

    const contact_data = [
        {
            id: 1,
            image: uk_flag,
            style: 'dot dot-1'
        },
        {
            id: 2,
            image: usa_flag,
            style: 'dot dot-2 active'
        },
        {
            id: 3,
            image: russia_flag,
            style: 'dot dot-3'
        },
        {
            id: 4,
            image: canada_flag,
            style: 'dot dot-4'
        },
        {
            id: 5,
            image: india_flag,
            style: 'dot dot-5'
        },
    ]

    const contact__info = [
        {
            id: 1,
            text: 'Call us now',
            contact: 'tel:32622266600',
            option: '326 222 666 00',
            icon: 'flaticon-telephone-call',
        },
        {
            id: 2,
            text: 'Email us',
            contact: 'mailto:info@webdow.com',
            option: 'info@webdow.com',
            icon: 'flaticon-envelope',
        },
        {
            id: 3,
            text: '12/a, new huq tower',
            contact: 'https://www.google.com/maps/search/12%2FA,+New+Boston+Hall/@42.5515021,-79.7879305,7z/data=!3m1!4b1',
            option: 'new york, usa',
            icon: 'flaticon-pin',
        },

    ]
    return (
        <section className="contact__area contact__bg pt-120 pb-90 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s"
            data-background="assets/img/contact/map-bg.png">
            <div className="container">
                <div className="contact__info-box mb-120">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="contact__content">
                                <div className="section__title">
                                    <span className="sub-title">contact us</span>
                                    <h2 className="title">nearest locations to <br /> learn your delivery <br /> process easy.</h2>
                                </div>
                                <p className="mb-45">From finance, retail, and travel, to social media, cybersecurity,
                                    adtech, and more, market leaders are leveraging web data to
                                    maintain their transt advantage.
                                </p>
                                <div className="contact__content-btn">
                                    <Link href="/contact" className="fill-btn">get direction</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="coverage__map p-relative wow slideInUp">
                                <div className="dot-main">
                                    {
                                        contact_data.map((item) => (
                                            <div className="dot-main-item" key={item.id}>
                                                <div className={item.style}>
                                                    <div className="dot-content p-relative">
                                                        <div className="dot-inner">
                                                            <Image src={item.image} alt='contact img'></Image>
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
                </div>
                <div className="contact__info">
                    <div className="row">
                        {
                            contact__info.map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="contact__shadow">
                                        <div className="contact__info-item mb-30">
                                            <div className="contact__info-text">
                                                <span>{item.text}</span>
                                                <h3><Link href={item.contact}>{item.option}</Link></h3>
                                            </div>
                                            <div className="contact__info-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfoArea;