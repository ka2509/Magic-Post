
import SEO from '@components/seo';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import team_data from '@data/team-data';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import TeamDetailsAreas from '@components/extra-page/team-details'
import Wrapper from '@layout/wrapper';


const TeamDetails = () => {
    const [team, setTeam] = useState({})
    const router = useRouter()
    const id = router.query.id;
    useEffect(() => {
        if (!id) (<h1>Looding...</h1>)
        else (setTeam(team_data.find(item => item.id == id)))
        return () => {

        }
    }, [id])
    return (
        <Wrapper>
            <SEO pageTitle={'Delport'} />
            <HeaderOne headerClass={'header__two menu-sticky white-bg'}  />
            <TeamDetailsAreas item={team} />
            <FooterFour />
        </Wrapper>
    );
};

export default TeamDetails;