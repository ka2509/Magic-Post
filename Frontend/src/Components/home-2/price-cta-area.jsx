import Image from 'next/image';
import React from 'react';
import cta_img from '@assets/img/cta/cat-3-img.png';
import PriceFrom from '@components/forms/price-from';

const PriceCtaArea = () => {
    return (
        <section className="price__cta-3 price__cta3-bg p-relative">
            <div className="price__cta-3-img d-none d-xl-block">
                <Image src={cta_img} alt='cta' style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-6 col-xl-6"></div>
                    <div className="col-xl-6">
                        <div className="price__cta-content-3 wow fadeInUp" data-wow-duration="1.5s"
                            data-wow-delay=".3s">
                            <div className="section__title mb-55">
                                <span className="sub-title">call to action</span>
                                <h2 className="title">price calculation</h2>
                            </div>
                            <div className="price__cta-form">
                                <PriceFrom />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceCtaArea;