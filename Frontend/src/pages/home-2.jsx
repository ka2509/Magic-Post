import HomeTwoArea from '@components/home-2';
import SEO from '@components/seo';
import FooterTwo from '@layout/footer/footer-2';
import HeaderTwo from '@layout/header/header-two';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Delport'} />
            <HeaderTwo />
            <HomeTwoArea />
            <FooterTwo />
        </Wrapper>
    );
};

export default index;