import React from 'react';
import CartAreaSection from './cart-area-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = () => {
    return (
        <main>
            <Breadcrumb title={'My Cart'} subTitle={'My Cart'} />
            <CartAreaSection />
        </main>
    );
};

export default index;