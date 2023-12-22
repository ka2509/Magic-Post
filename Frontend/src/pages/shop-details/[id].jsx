
import ShopDetailsArea from '@components/extra-page/shop-details';
import SEO from '@components/seo';
import product_data from '@data/product-data';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Wrapper from '@layout/wrapper';
import FooterFour from '@layout/footer/footer-4';
import HeaderFour from '@layout/header/header-four';

const ShopDetails = () => {
    const [shop, setShop] = useState({})
    const router = useRouter()
    const id = router.query.id;
    useEffect(() => {
        if (!id) (<h1>Looding...</h1>)
        else (setShop(product_data.find(item => item.id == id)))
        return () => {

        }
    }, [id])
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Delport'} />
                <HeaderFour headerClass={'header__two menu-sticky white-bg'} />
                <ShopDetailsArea item={shop} />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default ShopDetails;