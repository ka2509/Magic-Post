import React from 'react';
import ServiceDetails from './service-details';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = ({ item }) => {
    return (
        <main>
            <Breadcrumb title={'Service Details'} subTitle={'Service Details'} />
            <ServiceDetails item={item} />
        </main>
    );
};

export default index;