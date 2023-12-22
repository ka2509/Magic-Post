import ShopDetailsArea from '@components/extra-page/shop-details';
import SEO from '@components/seo';
import product_data from '@data/product-data';
import FooterFour from '@layout/footer/footer-4';
import HeaderFour from '@layout/header/header-four';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    const item = product_data[0]
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Delport'} />
                <HeaderFour headerClass={'header__two menu-sticky white-bg'} />
                <ShopDetailsArea item={item} />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default index;