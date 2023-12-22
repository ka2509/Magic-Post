import React from 'react';
import CartArea from './cart-area';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = () => {
    return (
        <main>
            <Breadcrumb title={'Wishlist'} subTitle={'Wishlist'} />
            <CartArea />
        </main>
    );
};

export default index;