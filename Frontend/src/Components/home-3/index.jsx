import React from 'react';
import BannerArea from './banner-area';
import ServiceThere from './service-there';
import AboutUsArea from './about-us-area';
import ServiceCtaArea from './service-cta-area';
import WorkProcessArea from './work-process-area';
import TestimonialArea from './testimonial-area';
import BrandArea from './brand-area';
import PriceCtaArea from './price-cta-area';
import PortfolioSection from './portfolio-section';
import FunfactSection from './funfact-section';
import BlogSection from './blog-section';


const index = () => {
    return (
        <main>
            <BannerArea />
            <ServiceThere />
            <AboutUsArea />
            <ServiceCtaArea />
            <WorkProcessArea />
            <TestimonialArea />
            <BrandArea />
            <PriceCtaArea />
            <PortfolioSection />
            <FunfactSection />
            <BlogSection />
        </main>
    );
};

export default index;