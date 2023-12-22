import React from 'react';
import CuponArea from './cupon-area';
import CheckoutSection from './checkout-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = () => {
    return (
        <main>
            <Breadcrumb title={'Cheakout'} subTitle={'Cheakout'} />
            <CuponArea />
            <CheckoutSection />
        </main>
    );
};

export default index;