import React from 'react';
import BlogSearch from '../blog/blog-search';
import BlogCategory from '../blog/blog-category';
import RecentPost from '../blog/recent-post';
import BlogTag from '../blog/blog-tag';
import BlogReplyForm from '@components/forms/blog-reply-form';
import Comment from './comment';
import Author from './author';
import PostBox from './postbox';

const PostBoxArea = ({item}) => {
    return (
        <div className="postbox-area postbox-area-padd  pt-120 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="postbox__wrapper mb-60">
                            <PostBox item={item}/>
                            <Author />
                            <Comment />
                            <div className="post-comment-form">
                                <div className="section__title mb-30">
                                    <h3 className="title-sm">Leave a Reply</h3>
                                </div>
                                <div className="bd-contact-form-wrapper mb-30">
                                    <BlogReplyForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog__sidebar-wrapper mb-60">
                            <BlogSearch />
                            <BlogCategory />
                            <RecentPost />
                            <BlogTag />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostBoxArea;