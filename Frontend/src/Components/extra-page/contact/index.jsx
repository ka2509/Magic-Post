import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import ContactFrom from './contact-form';

const index = () => {
    return (
        <main>
            <Breadcrumb title="Contact" subTitle="Contact" />
            <ContactFrom />
        </main>
    );
};

export default index;