import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import PricingArea from './pricing-area';
import TestimonialArea from '@components/home-3/testimonial-area';

const index = () => {
    return (
        <main>
            <Breadcrumb title="Pricing" subTitle="Pricing" />
            <PricingArea />
            <TestimonialArea />
        </main>
    );
};

export default index;