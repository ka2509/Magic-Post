import HomeThereArea from '@components/home-3';
import SEO from '@components/seo';
import FooterThere from '@layout/footer/footer-3';
import HeaderThere from '@layout/header/header-there';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Delport'}></SEO>
            <HeaderThere />
            <HomeThereArea />
            <FooterThere />
        </Wrapper>
    );
};

export default index;