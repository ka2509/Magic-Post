import React from 'react';
import ShopDetails from './shop-details';
import ShopRelatedProducts from './shop-related-products';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import ShopModal from '@components/common/shop-filtering/shop-modal';

const index = ({ item }) => {
    return (
        <main>
            <Breadcrumb title={'Shop Details'} subTitle={'Shop Details'} />
            <ShopDetails item={item} />
            <ShopRelatedProducts item={item} />
            <ShopModal />
        </main>
    );
};

export default index;