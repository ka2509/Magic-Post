import React from 'react';
import bg_overlay from '@assets/img/cta/services-cta.png';
import Link from 'next/link';
import VideoModal from '@components/common/modals/modal-video';
import 'react-modal-video/css/modal-video.min.css';
import useModal from '@hooks/use-modal';

const ServiceCta = () => {
    const { isVideoOpen, setIsVideoOpen } = useModal();
    return (
        <>
            <section className="services__cta bg-css overlay pt-125 pb-120" style={{ backgroundImage: `url(${bg_overlay.src})` }}>
                <div className="container">
                    <div className="row justify-content-center wow fadeInUp" data-wow-duration="1.5s"
                        data-wow-delay=".3s">
                        <div className="col-lg-6">
                            <div className="services__cta-3-content text-center">
                                <div className="services__cta-3-play">
                                    <button type='button'
                                        className="popup-video play-btn play-btn-white" onClick={() => setIsVideoOpen(true)}>
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <h2 className="services__cta-3-title">New to cargo service?<br /> need help?</h2>
                                <div className="services__cta-3-btn">
                                    <Link className="fill-btn" href="tel:01254896245">make a call</Link>
                                    <Link href="/contact" className="skew-btn">get a quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoModal videoId='vWLcyFtni6U' isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} />
        </>
    );
};

export default ServiceCta;