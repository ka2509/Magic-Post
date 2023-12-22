import React from 'react';
import brandOne from '@assets/img/brand/bc1.png';
import brandTwo from '@assets/img/brand/bc2.png';
import brandThere from '@assets/img/brand/bc3.png';
import brandFour from '@assets/img/brand/bc4.png';
import brandFive from '@assets/img/brand/bc5.png';
import brandSix from '@assets/img/brand/bc6.png';
import Image from 'next/image';
import Link from 'next/link';

const PertnerArea = () => {
    const pertnerData = [
        {
            id: 1,
            image: brandOne,
            title: 'Logistics Plus',
            description: 'Logistics Plus Inc. (LP) is A 21st Century Logistics Company™ and a leading worldwide provider of transportation',
        },
        {
            id: 2,
            image: brandTwo,
            title: 'Prologis GROUP',
            description: 'The World’s Leader in Logistics Real Estate Prologis provides efficient logistics real estate solutions to the world.',
        },
        {
            id: 3,
            image: brandThere,
            title: 'BLG LOGISTICS GROUP',
            description: 'BLG LOGISTICS is a seaport-oriented logistics services provider with an international network. The company’s more.',
        },
        {
            id: 4,
            image: brandFour,
            title: 'Milan Supply Chain Solutions',
            description: 'The Ross family founded Milan Express in 1969 as transportation company reliable service at a reasonable price.',
        },
        {
            id: 5,
            image: brandFive,
            title: 'Everglory Logistics',
            description: 'Everglory was founded in 2011 by experienced logistics managers who believed there was a market for a company.',
        },
        {
            id: 6,
            image: brandSix,
            title: 'Omni Logistics',
            description: 'Omni Logistics is a privately owned global 3PL provider. As one of the world’s leading privately held 3PL providers.',
        },
    ]
    return (
        <section className="partner-area pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-md-8">
                        <div className="section__title mb-55 text-center">
                            <span className="sub-title">partner</span>
                            <h2 className="title">We are working with them</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".5s">
                    {
                        pertnerData.map((item) => (
                            <div className="col-xl-4 col-md-6" key={item.id}>
                                <div className="partner-item mb-30">
                                    <div className="partner-thumb">
                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="certificate-image" />
                                    </div>
                                    <div className="partner-content">
                                        <h3><Link href="#">{item.title}</Link></h3>
                                        <p>{item.description}</p>
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

export default PertnerArea;