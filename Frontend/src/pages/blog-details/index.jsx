import SEO from '@components/seo';
import React from 'react';
import BlogDetails from '@components/extra-page/blog-details'
import blog_data from '@data/blog-data';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';

const index = () => {
    const item = blog_data[0]
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Delport'} />
                <HeaderOne headerClass={'header__two menu-sticky white-bg'} />
                <BlogDetails item={item} />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default index;