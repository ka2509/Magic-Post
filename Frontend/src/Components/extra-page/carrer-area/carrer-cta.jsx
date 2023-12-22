import React from 'react';
import carreBg from '@assets/img/career/career-bg.jpg';
import Link from 'next/link';

const CarrerCta = () => {
    return (
        <section className="career-cta-area pt-120 pb-120" style={{ backgroundImage: `url(${carreBg.src})` }}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="career-cta-inner d-flex justify-content-lg-end">
                            <div className="career-cta-wrapper">
                                <div className="career-cta-content">
                                    <h3>Do You Need Any Job ?</h3>
                                    <p>Sedut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantim totam rem aperiam, eaque ipsa quae</p>
                                    <Link className="job-btn" href="/contact">apply now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarrerCta;