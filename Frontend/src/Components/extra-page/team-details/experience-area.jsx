import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const ExperienceArea = ({ item }) => {
    return (
        <>
            <div className="col-12">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="tmd-img w-img p-relative mb-50">
                            {item?.image && <Image src={item?.image} style={{ width: "100%", height: "auto" }} alt="team" />}
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="tmd__content mb-50">
                            <div className="section__title td-section-title mb-25">
                                <span className="sub-title">{item?.desination && item?.desination}</span>
                                {item?.name && <h2 className="title">{item?.name}</h2>}
                                <p>The spectacular Harbour Central is a brand new development in {`London’s`} The Docklands, comprising a total of 642 private apartments divided across five residential buildings. So I said on your bike mate easy peasy dropped.</p>
                            </div>

                            <div className="team__founder-info mb-45">
                                <div className="team__founder-item">
                                    <div className="team__founder-item-icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="team__founder-text">
                                        <span className="title">Phone Number</span>
                                        <h4 className="contact"><Link href="tel:+(908)786789786">+(908) 786  789 78 6</Link></h4>
                                    </div>
                                </div>
                                <div className="team__founder-item">
                                    <div className="team__founder-item-icon">
                                        <i className="fas fa-envelope-open"></i>
                                    </div>
                                    <div className="team__founder-text">
                                        <span className="title">Email Address</span>
                                        <h4 className="contact"><Link href="mailto:info@webexample.com">info@webexample.com</Link></h4>
                                    </div>
                                </div>
                                <div className="team__founder-item">
                                    <div className="team__founder-item-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="team__founder-text">
                                        <span className="title">Office Location</span>
                                        <h4 className="contact"> <Link href="#">14/A, Kilix Home Tower, NYC</Link> </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="tmd__content-btn">
                                <Link href="contact.html" className="fill-btn clip-btn">get in touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <div className="tmd__qualification mb-45">
                    <div className="section__title mb-20">
                        <h3 className="title-sm">Diversity of Experiences</h3>
                    </div>
                    <p>A recent Kent State graduate, Danny joined Builderry shortly after obtaining his
                        {`Bachelor’s`}
                        degree in Business
                        Administration, Accounting. His analytical nature and long-standing
                        interest in commercial construction makes Danny an ideal fit for Project Engineer. In
                        his
                        short career, {`he’s`} proven
                        himself to be an invaluable team member, assisting with various
                        estimating and project management responsibilities. While in school, Danny held a
                        variety of
                        leadership positions,
                        participated in numerous extracurricular activities and was a
                        fixture on the {`Dean’s`} List.
                    </p>
                    <p>These most common five modes of transport are: railways, roadways, airways, waterways and
                        pipelines. Following is the
                        brief account of each mode with reference to Indian
                        conditions with relative merits and demerits.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ExperienceArea;