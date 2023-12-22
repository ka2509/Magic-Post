import React from 'react';
import service_cta from '@assets/img/services/services-cta-bg.png';
import Link from 'next/link';


const ServiceCtaArea = () => {
    return (
        <section className="services__cta">
            <div className="container-fluid container-lg">
                <div className="services__cta-box p-relative services__cta-overlay"
                    style={{ backgroundImage: `url(${service_cta.src})` }}>
                    <div className="services__cta-wrapper">
                        <div className="services__cta-item t-right mb-15">
                            <h3>New to cargo service?</h3>
                        </div>
                        <div className="services__cta-item text-center mb-15">
                            <i className="flaticon-telephone-call"></i>
                        </div>
                        <div className="services__cta-item mb-15">
                            <h3>call us on <Link href="tel:89900099988">899 000 999 88</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCtaArea;