import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import work_img from '@assets/img/work/work-img.png';
import 'react-modal-video/css/modal-video.min.css';
import VideoModal from '@components/common/modals/modal-video';
import useModal from '@hooks/use-modal';

const WorkProcessArea = () => {
    const work_data = [
        {
            id: 1,
            sub_title: 'make online order',
            number: '01',
            description: 'From finance, retail, and travel, to social media, cybersecurity, adtech, and more.'
        },
        {
            id: 2,
            sub_title: 'bring your product',
            number: '03',
            description: 'From finance, retail, and travel, to social media, cybersecurity, adtech, and more.'
        },
        {
            id: 3,
            sub_title: 'get transportation',
            number: '03',
            description: 'From finance, retail, and travel, to social media, cybersecurity, adtech, and more.'
        },
    ]
    const { isVideoOpen, setIsVideoOpen } = useModal();

    return (
        <>
            <section className="work grey-bg mt--60">
                <div className="container">
                    <div className="work__wrapper p-relative wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="row align-items-center align-items-xxl-end">
                            <div className="col-xl-5 col-lg-5">
                                <div className="work__content">
                                    <div className="section__title mb-45">
                                        <span className="sub-title">process</span>
                                        <h2 className="title">{`company’s`} working process for grow</h2>
                                    </div>
                                    <div className="work__content-list pr-60">
                                        {
                                            work_data.map((item) => (
                                                <div className="work__item" key={item.id}>
                                                    <div className="work__item-num">
                                                        <h5>{item.number}</h5>
                                                    </div>
                                                    <div className="work__item-text">
                                                        <h4>{item.sub_title}</h4>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="work__img white-bg p-relative ml-30">
                                    <Image src={work_img} alt='Work' style={{ width: '100%', height: 'auto' }} />
                                    <div className="work__btn">
                                        <button type='submit'
                                            className="popup-video play-btn play-btn-white" onClick={() => setIsVideoOpen(true)}><i className="fas fa-play"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"go7QYaQR494"} />
        </>

    );
};

export default WorkProcessArea;