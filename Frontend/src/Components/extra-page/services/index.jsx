import React from 'react';
import ServicesAreaTwo from '@components/home-2/services-area-two';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = () => {
    return (
        <main>
            <Breadcrumb title={'Services'} subTitle={'Services'} />
            <ServicesAreaTwo />
        </main>
    );
};

export default index;