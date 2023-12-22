import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import BlogArea from './blog-area';

const index = () => {
    return (
        <main>
            <Breadcrumb title="Blog" subTitle="Blog" />
            <BlogArea />
        </main>
    );
};

export default index;