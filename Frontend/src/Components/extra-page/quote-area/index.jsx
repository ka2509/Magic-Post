import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import QuoteArea from './quote-area';

const index = () => {
    return (
        <main>
            <Breadcrumb title="quote" subTitle="quote" />
            <QuoteArea />
        </main>
    );
};

export default index;