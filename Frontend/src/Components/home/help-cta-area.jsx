import React from 'react';
import bg_overlay from '@assets/img/cta/help-cta-bg.png'
import Link from 'next/link';

const HelpCtaArea = () => {
    return (
        <section className="help__cta overlay bg-css overlay-red pt-50 pb-20" style={{ backgroundImage: `url(${bg_overlay.src})` }}>
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-duration="1.5s"
                    data-wow-delay=".3s">
                    <div className="col-md-8">
                        <div className="help__cta-title mb-30">
                            <h2>New to cargo service? need help?</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="help__cta-btn text-lg-end mb-30">
                            <Link className="skew-btn" href="/contact">get a quote</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpCtaArea;