import Link from 'next/link';
import React from 'react';
import blog_data from '@data/blog-data';
import Image from 'next/image';

const BlogAreaSection = () => {
    return (
        <section className="blog pt-120 pb-85 white-bg">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <div className="section__title mb-75 text-center">
                            <span className="sub-title">news insights</span>
                            <h2 className="title">our blog & insights</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-two">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                {
                                    blog_data.slice(0, 2).map((item) => (
                                        <div className="col-md-6" key={item.id}>
                                            <div className="blog__item mb-60 w-img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".6s">
                                                <div className="blog__item-img mb-35">
                                                    <Link href={`/blog-details/${item.id}`}><Image src={item.image} style={{ with: '100%', height: 'auto' }} alt="Blog" /></Link>
                                                    <div className="blog__meta dp-blog-meta1">
                                                        <span><Link href={`/blog-details/${item.id}`}><i className={item.commentIcon}></i>
                                                        {item.comments > 0 ? `${item.comments} Comments` : `${item.comments} Comment`  }
                                                        </Link></span>
                                                        <span> <Link href={`/blog-details/${item.id}`}><i className={item.userIcon}></i>{item.author}</Link></span>
                                                    </div>
                                                </div>
                                                <div className="blog__item-date">
                                                    <span><b>{item.date} </b>{item.month}</span>
                                                </div>
                                                <div className="blog__item-content">
                                                    <h2><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h2>
                                                    <div className="blog__item-text">
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".9s">
                            <div className="row">
                                <div className="col-12">
                                    <div className="blog__title-wrapper mb-60">
                                        {
                                            blog_data.slice(6, 9).map((item) => (
                                                <div className="blog__title-inner" key={item.id}>
                                                    <div className="blog__item-date">
                                                        <span><b>{item.date}</b>{item.month}</span>
                                                    </div>
                                                    <div className="blog__item-title">
                                                        <h4><Link href={`/blog-details/${item.id}`} >{item.title}</Link></h4>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogAreaSection;