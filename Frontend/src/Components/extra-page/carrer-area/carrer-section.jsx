import React from 'react';
import CarrerOne from '@assets/img/career/job-1.png';
import CarrerTwo from '@assets/img/career/job-2.png';
import CarrerThere from '@assets/img/career/job-7.png';
import CarrerFour from '@assets/img/career/job-6.png';
import CarrerFive from '@assets/img/career/job-8.png';
import CarrerSix from '@assets/img/career/job-11.png';
import Link from 'next/link';
import Image from 'next/image';

const CarrerSection = () => {
    const carrerData = [
        {
            id: 1,
            image: CarrerOne,
            tagNormal: 'full time',
            tagUrgent: 'urgent',
            contact: 'Logistics coordinator',
            link: 'https://www.google.com/maps/@43.108672,-75.289946,17z',
            icon: 'far fa-map-marker-alt',
            iconTwo: 'fal fa-usd-circle',
            address: '205 Main Road, New York',
            doller: '250 - 495'
        },
        {
            id: 2,
            image: CarrerTwo,
            tagNormal: 'full time',
            tagUrgent: 'urgent',
            contact: 'Logistics specialist',
            link: 'https://www.google.com/maps/@43.108672,-75.289946,17z',
            icon: 'far fa-map-marker-alt',
            iconTwo: 'fal fa-usd-circle',
            address: '205 Main Road, New York',
            doller: '250 - 495'
        },
        {
            id: 3,
            image: CarrerThere,
            tagNormal: 'full time',
            tagUrgent: 'urgent',
            contact: 'Inventory analyst',
            link: 'https://www.google.com/maps/@43.108672,-75.289946,17z',
            icon: 'far fa-map-marker-alt',
            iconTwo: 'fal fa-usd-circle',
            address: '205 Main Road, New York',
            doller: '250 - 495'
        },
        {
            id: 4,
            image: CarrerFour,
            tagNormal: 'full time',
            tagUrgent: 'urgent',
            contact: 'Warehouse manager',
            link: 'https://www.google.com/maps/@43.108672,-75.289946,17z',
            icon: 'far fa-map-marker-alt',
            iconTwo: 'fal fa-usd-circle',
            address: '205 Main Road, New York',
            doller: '250 - 495'
        },
        {
            id: 5,
            image: CarrerFive,
            tagNormal: 'full time',
            tagUrgent: 'urgent',
            contact: 'Fleet manager',
            link: 'https://www.google.com/maps/@43.108672,-75.289946,17z',
            icon: 'far fa-map-marker-alt',
            iconTwo: 'fal fa-usd-circle',
            address: '205 Main Road, New York',
            doller: '250 - 495'
        },
        {
            id: 6,
            image: CarrerSix,
            tagNormal: 'full time',
            tagUrgent: 'urgent',
            contact: 'Transportation manager',
            link: 'https://www.google.com/maps/@43.108672,-75.289946,17z',
            icon: 'far fa-map-marker-alt',
            iconTwo: 'fal fa-usd-circle',
            address: '205 Main Road, New York',
            doller: '250 - 495'
        },
    ]
    return (
        <section className="job-area pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-md-8">
                        <div className="section__title mb-55 text-center">
                            <span className="sub-title">job</span>
                            <h2 className="title">our active job</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".5s">
                    {
                        carrerData.map((item) => (
                            <div className="col-xl-6 col-lg-6" key={item.id}>
                                <div className="job-wrapper mb-30">
                                    <div className="job-instructor-profile">
                                        <div className="job-instructor-img">
                                            <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="job" />
                                        </div>
                                        <div className="job-instructor-title">
                                            <div className="job-tag mb-20">
                                                <span className="tag-normal">{item.tagNormal}</span>
                                                <span className="tag-urgent">{item.tagUrgent}</span>
                                            </div>
                                            <h3><Link href="/contact">{item.contact}</Link></h3>
                                            <div className="job-meta mt-15">
                                                <Link href={item.link}><span><i className={item.icon}></i> {item.address}</span></Link>
                                                <span><i className={item.iconTwo}></i>{item.doller}</span>
                                            </div>
                                            <div className="job-btn-inner mt-30">
                                                <Link className="job-btn" href="/contact">apply now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default CarrerSection;