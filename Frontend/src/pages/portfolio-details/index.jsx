import PortfolioDetailsArea from '@components/extra-page/portfolio-details';
import SEO from '@components/seo';
import PortfolioData from '@data/portfolio-data';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';
import React from 'react';


const index = () => {
    const item = PortfolioData[0]
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Delport'} />
                <HeaderOne headerClass={'header__two menu-sticky white-bg'} />
                <PortfolioDetailsArea item={item} />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default index;