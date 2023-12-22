import DetailServices from '@components/extra-page/services-details';
import SEO from '@components/seo';
import services_data from '@data/services-data';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';
import React from 'react';


const index = () => {
    const item = services_data[0]
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Delport'} />
                <HeaderOne headerClass="header__two menu-sticky white-bg" />
                <DetailServices item={item} />
                <FooterFour />
            </Wrapper>
        </>
    );

};

export default index;