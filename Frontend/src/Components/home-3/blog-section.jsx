import blog_data from '@data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogSection = () => {
    return (
        <section className="blog pt-120 pb-55 white-bg">
            <div className="container">
                <div className="blog-section-title mb-55 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="section__title">
                            <span className="sub-title">blog</span>
                            <h2 className="title">news & insights</h2>
                        </div>
                        <div className="blog__more-btn d-none d-sm-block t-right">
                            <Link href="/blog">more news <i className="fas fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="blog__box">
                    <div className="row">
                        {
                            blog_data.slice(9, 12).map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <article>
                                        <div className="blog__item mb-60 w-img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".6s">
                                            <div className="blog__item-img mb-35">
                                                <Link href={`/blog-details/${item.id}`}> <Image src={item.image} style={{ width: '100%', height: 'auto' }} alt='Blog' /></Link>
                                            </div>
                                            <div className="blog__item-date">
                                                <span><b>{item.date} </b>{item.month}</span>
                                            </div>
                                            <div className="blog__item-content">
                                                <h2><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h2>
                                                <div className="blog__meta">
                                                    <span><Link href={`/blog-details/${item.id}`}><i className={item.commentIcon}></i>
                                                    {item.comments > 0 ? `${item.comments} Comments` : `${item.comments} Comment`  }
                                                    </Link></span>
                                                    <span> <Link href={`/blog-details/${item.id}`}><i className={item.userIcon}></i> {item.author} </Link></span>
                                                </div>
                                                <div className="blog__item-text">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;