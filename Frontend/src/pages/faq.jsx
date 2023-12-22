import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import FaqArea from '@components/extra-page/faq-area'
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Delport'} />
                <HeaderOne headerClass={'header__two menu-sticky white-bg'} />
                <FaqArea />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default index;