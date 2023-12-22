import CartMainArea from '@components/extra-page/cart-main';
import SEO from '@components/seo';
import FooterFour from '@layout/footer/footer-4';
import HeaderFour from '@layout/header/header-four';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Delport'} />
            <HeaderFour headerClass={'header__two menu-sticky white-bg'} />
            <CartMainArea />
            <FooterFour />
        </Wrapper>
    );
};

export default index;