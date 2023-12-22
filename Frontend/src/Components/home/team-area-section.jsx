import React from 'react';
import team_data from '@data/team-data';
import Image from 'next/image';
import Link from 'next/link';

const TeamAreaSection = () => {
    return (
        <section className="team__area pt-120 pb-70">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="col-md-8">
                        <div className="section__title mb-50 text-center">
                            <span className="sub-title">team</span>
                            <h2 className="title">our experts</h2>
                        </div>
                    </div>
                    <div className="row wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        {
                            team_data.slice(0, 3).map((item) => (
                                <div className="col-lg-4 col-md-6" key={item.id}>
                                    <div className="team__item team__overlay p-relative mb-50 clip-box">
                                        <div className="team__item-img w-img">
                                            <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="Team Images" />
                                        </div>
                                        <div className="team__item-text p-absolute">
                                            <span>{item.desination}</span>
                                            <Link href={`/team-details/${item.id}`}>
                                                <h3>{item.name}</h3>
                                            </Link>

                                            <div className="team__social">
                                                <Link href="https://www.facebook.com/">fb</Link>
                                                <Link href="https://twitter.com/">tw</Link>
                                                <Link href="https://www.behance.net/">be</Link>
                                                <Link href="https://bd.linkedin.com/">ln</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    );
};

export default TeamAreaSection;