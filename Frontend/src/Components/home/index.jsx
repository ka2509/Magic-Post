import React from 'react';
import BannerArea from './banner-area';
import ServicesArea from './services-area';
import HelpCtaArea from './help-cta-area';
import TeamAreaSection from './team-area-section';
import BrandAreaSection from './brand-area-section';
import AboutUs from './about-us';
import GalleryAreaSection from './gallery-area-section';
import FunfactArea from './funfact-area';
import AccordionArea from './accordion-area';
import BlogAreaSection from './blog-area-section';

const index = () => {
    return (
        <main>
            <BannerArea />
            <ServicesArea />
            <HelpCtaArea />
            <TeamAreaSection />
            <BrandAreaSection />
            <AboutUs />
            <GalleryAreaSection />
            <FunfactArea />
            <AccordionArea />
            <BlogAreaSection />
             
        </main>
    );
};

export default index;