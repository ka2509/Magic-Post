import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import TeamSectionArea from './team-section-area';
import ContactCta from './contact-cta';

const index = () => {
    return (
        <main>
            <Breadcrumb title="Team" subTitle="Team" />
            <TeamSectionArea />
            <ContactCta />
        </main>
    );
};

export default index;