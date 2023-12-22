import ServicesMainArea from '@components/extra-page/services';
import SEO from '@components/seo';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Delport'} />
            <HeaderOne headerClass={'header__two menu-sticky white-bg'} />
            <ServicesMainArea />
            <FooterFour />
        </Wrapper>
    );
};

export default index;