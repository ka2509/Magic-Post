import Link from 'next/link';
import React from 'react';

const OfficeArea = () => {
    const officeData = [
        {
            id: 1,
            officeName: 'London Office:',
            link: 'https://www.google.com/maps/@40.6468815,-73.9677618,15z',
            status: 'New York 11226 United States',
            mailAddress: 'mailto:equita@farost.com',
            email: 'equita@farost.com',
            tel: 'tel:01061245741',
            number: '(002) 01061245741'
        },
        {
            id: 2,
            officeName: 'Canada Office:',
            link: 'https://www.google.com/maps/@40.6468815,-73.9677618,15z',
            status: 'Canada Street 2202',
            mailAddress: 'mailto:equita@farost.com',
            email: 'equita@farost.com',
            tel: 'tel:01061245741',
            number: '(002) 01061245741'
        },
    ]

    return (
        <section className="office-location-area pt-190 pb-180 p-relative">
            <div className="office-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d129862.68857093038!2d-0.13358502454226506!3d51.49977531250818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1669282939814!5m2!1sen!2sbd">
                </iframe>
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-xxl-7 col-xl-7">
                            <div className="office-wrapper">
                                {
                                    officeData.map((item) => (
                                        <div className="office-item" key={item.id}>
                                            <h4>{item.officeName}</h4>
                                            <div className="office-content">
                                                <div className="singel-addresss">
                                                    <Link href={item.link}><span><i className="far fa-map-marker-alt"></i></span><span>{item.status}</span></Link>
                                                </div>
                                                <div className="singel-addresss">
                                                    <Link href={item.mailAddress}><span><i className="far fa-envelope"></i></span><span>{item.email}</span></Link>
                                                </div>
                                                <div className="singel-addresss">
                                                    <Link href={item.tel}><span><i className="far fa-phone-alt"></i></span><span>{item.number}</span></Link>
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
        </section>
    );
};

export default OfficeArea;