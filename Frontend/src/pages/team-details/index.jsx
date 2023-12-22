import SEO from '@components/seo';
import FooterFour from '@layout/footer/footer-4';
import Wrapper from '@layout/wrapper';
import React from 'react';
import TeamDetailsArea from '@components/extra-page/team-details'
import HeaderOne from '@layout/header/header-one';
import team_data from '@data/team-data';

const index = () => {
    const item = team_data[0]
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Delport'} />
                <HeaderOne headerClass={'header__two menu-sticky white-bg'}  />
                <TeamDetailsArea item={item} />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default index;