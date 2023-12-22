import team_data from '@data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamSection = () => {
    return (
        <section className="team__3 grey-bg-4 pt-120 pb-70 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="section__title mb-55 text-center">
                            <span className="sub-title">team</span>
                            <h2 className="title">our experts</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        team_data.slice(3, 6).map((item) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <div className="team__3-item mb-50">
                                    <div className="team__3-item-img w-img">
                                        <Link href={`/team-details/${item.id}`}>
                                            <Image src={item.image} style={{ width: '100%', height: 'auto' }} alt='Team' />
                                        </Link>
                                        <div className="team__3-item-social">
                                            <ul>
                                                <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="https://www.behance.net/"><i className="fab fa-behance"></i></Link></li>
                                                <li><Link href="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link></li>
                                                <li><Link href="https://bd.linkedin.com/"><i className="fab fa-linkedin"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="team__3-item-content">
                                            <span className="team__3-item-subtitle">{item.desination}</span>
                                            <h4 className="team__3-item-title"><Link href={`/team-details/${item.id}`}>{item.name}</Link></h4>
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

export default TeamSection;