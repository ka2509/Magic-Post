import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import ProductSection from './products-section';
import ShopModal from '@components/common/shop-filtering/shop-modal';

const index = () => {
    return (
        <main>
            <Breadcrumb title='Shop' subTitle='Shop' />
            <ProductSection />
            <ShopModal />
        </main>
    );
};

export default index;