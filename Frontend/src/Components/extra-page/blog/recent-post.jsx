import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blog_data from '@data/blog-data';
const RecentPost = () => {
    return (
        <div className="sidebar__widget mb-40">
            <h3 className="sidebar__widget-title mb-25">Recent Post</h3>
            <div className="sidebar__widget-content">
                <div className="sidebar__post">
                    {
                        blog_data.slice(12, 15).map((item) => (
                            <div className="rc__post d-flex mb-20" key={item.id}>
                                <div className="rc__post-thumb">
                                    <Link href={`/blog-details/${item.id}`}>
                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="blog-sidebar" />
                                    </Link>
                                </div>
                                <div className="rc__post-content">
                                    <div className="rc__meta">
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="rc__post-title">
                                        <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                                    </h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentPost;