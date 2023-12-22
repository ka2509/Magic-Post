import SEO from '@components/seo';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PortfolioDetailsArea from '@components/extra-page/portfolio-details';
import Wrapper from '@layout/wrapper';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import PortfolioData from '@data/portfolio-data';

const ServicesDetails = () => {
    const router = useRouter();
    const id = router.query.id;
    const [service, setService] = useState({});


    useEffect(() => {
        if (!id) (<h1>Loading...</h1>)
        else (setService(PortfolioData.find(item => item.id == id)))
        return () => {

        };
    }, [id]);

    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Delport'} />
                <HeaderOne headerClass={'header__two menu-sticky white-bg'} />
                <PortfolioDetailsArea item={service} />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default ServicesDetails;