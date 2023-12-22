import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import PostBoxArea from './postbox-area';

const index = ({ item }) => {
    return (
        <main>
            <Breadcrumb title="Blog Details" subTitle="Blog Details" />
            <PostBoxArea item={item} />
        </main>
    );
};

export default index;