import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import PertnerArea from '@components/extra-page/pertner';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Delport'} />
                <HeaderOne headerClass={'header__two menu-sticky white-bg'} />
                <PertnerArea />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default index;