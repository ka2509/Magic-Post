import SEO from '@components/seo';
import blog_data from '@data/blog-data';
import ShopHeader from '@layout/header/header-four';
import Wrapper from '@layout/wrapper';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BlogDetails from '@components/extra-page/blog-details'
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';

const BlogDetaila = () => {

    const [blog, setBlog] = useState({})
    const router = useRouter()
    const id = router.query.id;

    useEffect(() => {
        if (!id) (<h1>Loading...</h1>)
        else (setBlog(blog_data.find(item => item.id == id)))
        return () => {

        }
    }, [id])
    return (
        <Wrapper>
            <SEO pageTitle={'Delport'}></SEO>
            <HeaderOne headerClass="header__two menu-sticky white-bg" />
            <BlogDetails item={blog} />
            <FooterFour />
        </Wrapper>
    );
};

export default BlogDetaila;