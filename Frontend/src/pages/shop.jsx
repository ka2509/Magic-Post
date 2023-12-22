import ShopMainArea from '@components/extra-page/shop';
import SEO from '@components/seo';
import FooterThere from '@layout/footer/footer-3';
import HeaderFour from '@layout/header/header-four';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Delport'} />
            <HeaderFour headerClass={'header__two menu-sticky white-bg'} />
            <ShopMainArea />
            <FooterThere />
        </Wrapper>
    );
};

export default index;