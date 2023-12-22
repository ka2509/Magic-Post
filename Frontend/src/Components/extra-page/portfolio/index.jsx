import React from 'react';
import PortfolioSection from './portfolio-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = () => {
    return (
        <main>
            <Breadcrumb title={'Portfolio'} subTitle={'Portfolio'} />
            <PortfolioSection />
        </main>
    );
};

export default index;