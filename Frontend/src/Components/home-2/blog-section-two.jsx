import blog_data from '@data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogSectionTwo = () => {
    return (
        <section className="blog pt-120 pb-55 grey-bg-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8">
                        <div className="section__title text-center mb-30">
                            <span className="sub-title">news insights</span>
                            <h2 className="title">our blog & insights</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-two mt-45">
                    <div className="row">
                        {
                            blog_data.slice(0, 3).map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="blog__item mb-60 w-img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                                        <div className="blog__item-img mb-35">
                                            <Link href={`/blog-details/${item.id}`}><Image src={item.image} alt='Blog-Img' style={{ width: '100%', height: 'auto' }}></Image></Link>
                                            <div className="blog__meta dp-blog-meta1">
                                                <span><Link href={`/blog-details/${item.id}`}><i className={item.commentIcon}> </i>
                                                {item.comments > 0 ? `${item.comments} Comments` : `${item.comments} Comment`  }
                                                    </Link></span>
                                                <span> <Link href={`/blog-details/${item.id}`}><i className={item.userIcon}></i> {item.author}</Link></span>
                                            </div>
                                        </div>
                                        <div className="blog__item-date">
                                            <span><b>{item.date} </b>{item.month}</span>
                                        </div>
                                        <div className="blog__item-content">
                                            <h2><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h2>
                                            <div className="blog__item-text">
                                                <p>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSectionTwo;