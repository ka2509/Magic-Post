import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import AwardsSection from './awards-section';

const index = () => {
    return (
        <main>
            <Breadcrumb title='awards' subTitle="awards" />
            <AwardsSection />
        </main>
    );
};

export default index;