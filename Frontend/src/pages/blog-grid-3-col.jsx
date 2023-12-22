import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import SEO from '@components/seo';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';
import React from 'react';
import BlogGridThere from '@components/extra-page/blog-grid-3'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Delport'}/>
            <HeaderOne headerClass={'header__two menu-sticky white-bg'}/>
            <Breadcrumb title='Blog Grid 3 Col' subTitle="Blog Grid 3 Col"/>
            <BlogGridThere/>
         <FooterFour/>
        </Wrapper>
    );
};

export default index;