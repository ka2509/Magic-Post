import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import FaqArea from './faq-area';

const index = () => {
    return (
        <main>
            <Breadcrumb title="Faq" subTitle="Faq" />
            <FaqArea />
        </main>
    );
};

export default index;