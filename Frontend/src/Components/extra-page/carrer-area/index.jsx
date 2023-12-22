import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import CarrerSection from './carrer-section';
import CarrerCta from './carrer-cta';

const index = () => {
    return (
        <main>
            <Breadcrumb title="Career" subTitle="Career" />
            <CarrerSection />
            <CarrerCta />
        </main>
    );
};

export default index;