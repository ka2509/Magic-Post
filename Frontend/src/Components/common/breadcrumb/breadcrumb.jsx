import React from 'react';
import breadcrumb_bg from '@assets/img/breadcrumb/breadcrumb-bg.png';
import Link from 'next/link';

const Breadcrumb = ({ title, subTitle }) => {
    return (
        <section className="page-title-area breadcrumb-spacing" style={{ backgroundImage: `url(${breadcrumb_bg.src})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-9">
                        <div className="page-title-wrapper text-center">
                            <h3 className="page-title mb-25">{title}</h3>
                            <div className="breadcrumb-menu">
                                <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                    <ul className="trail-items">
                                        <li className="trail-item trail-begin"><Link href="/"><span>Home</span></Link></li>
                                        <li className="trail-item trail-end"><span>{subTitle}</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;