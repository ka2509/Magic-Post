import React from 'react';
import Link from 'next/link';
import Wrapper from '@layout/wrapper';
import SEO from '@components/seo';
import WishlistMainArea from '@components/extra-page/whislist';
import HeaderFour from '@layout/header/header-four';
import FooterFour from '@layout/footer/footer-4';

const wishlist = () => {
    return (
        <Wrapper>
            <HeaderFour headerClass={'header__two menu-sticky white-bg'} />
            <SEO pageTitle={'Delport'} />
            <WishlistMainArea />
            <FooterFour />
        </Wrapper>
    );
};

export default wishlist;