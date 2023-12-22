import Link from 'next/link';
import React from 'react';

const Contact = () => {
    const contactData = [
        {
            id: 1,
            icon: 'flaticon-telephone-call',
            contact: 'tel:32622266600',
            infoText: 'Call us now',
            other: '326 222 666 00'
        },
        {
            id: 2,
            icon: 'flaticon-envelope',
            contact: 'mailto:info@webdow.com',
            infoText: 'send email',
            other: 'info@webdow.com'
        },
        {
            id: 3,
            icon: 'flaticon-pin',
            contact: 'https://www.google.com/maps/search/12%2FA,+New+Boston+Hall/@42.5515021,-79.7879305,7z/data=!3m1!4b1',
            infoText: 'visit office',
            other: 'New york, united states'
        },
    ]
    return (
        <div className="contact--wrapper mb-60">
            <div className="section__title mb-45">
                <span className="sub-title">contact with us</span>
                <h2 className="title">Speak with our consultant</h2>
            </div>
            <div className="contact-info mr-20">
                {
                    contactData.map((item) => (
                        <div className="single-contact-info d-flex align-items-center" key={item.id}>
                            <div className="contact-info-icon">
                                <Link href="#"><i className={item.icon}></i></Link>
                            </div>
                            <div className="contact-info-text">
                                <span>{item.infoText}</span>
                                <h5><Link href={item.contact}>{item.other}</Link></h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Contact;