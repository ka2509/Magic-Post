import Link from 'next/link';
import React from 'react';
import OverlayImg from '@assets/img/cta/contact-cta.jpg';

const ContactCta = () => {
    return (
        <section className="contact__cta pt-120 pb-120 bg-css overlay overlay-red" data-wow-delay=".3s" style={{ backgroundImage: `url(${OverlayImg.src})` }} data-background="assets/img/cta/contact-cta.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="contact__cta-text text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <div className="section__title mb-50">
                                <span className="sub-title white">get in touch</span>
                                <h2 className="title white">we give best support in transportation</h2>
                            </div>
                            <div className="contact__cat-btn">
                                <Link className="fill-btn clip-btn" href="/contact">contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactCta;