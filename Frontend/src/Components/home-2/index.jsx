import React from 'react';
import HomeTwoBanner from './home-two-banner';
import AboutUsTwo from './about-us-two';
import ServicesAreaTwo from './services-area-two';
import BrandArea from './brand-area';
import PriceCtaArea from './price-cta-area';
import TeamSection from './team-section';
import PortfolioArea from './portfolio-area';
import ServiceCta from './service-cta';
import ContactInfoArea from './contact-info-area';
import BlogSectionTwo from './blog-section-two';
import FunfactArea from '@components/home/funfact-area';

const index = () => {
    return (
        <main>
            <HomeTwoBanner />
            <AboutUsTwo />
            <ServicesAreaTwo />
            <BrandArea />
            <PriceCtaArea />
            <FunfactArea />
            <TeamSection />
            <PortfolioArea />
            <ServiceCta />
            <ContactInfoArea />
            <BlogSectionTwo />
        </main>
    );
};

export default index;