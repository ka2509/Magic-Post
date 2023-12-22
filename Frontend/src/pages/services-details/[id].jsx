import SEO from '@components/seo';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DetailServices from '@components/extra-page/services-details';
import services_data from '@data/services-data';
import Wrapper from '@layout/wrapper';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';

const ServicesDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [service, setService] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setService(services_data.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <Wrapper>
        <SEO pageTitle={'Delport'} />
        <HeaderOne headerClass="header__two menu-sticky white-bg" />
        <DetailServices item={service} />
        <FooterFour />
      </Wrapper>
    </>
  );
};

export default ServicesDetails;